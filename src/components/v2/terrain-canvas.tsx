import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { createNoise2D } from "simplex-noise";

const vertexShader = `
  uniform float uTime;
  varying float vElevation;
  varying vec3 vNormal;
  varying vec2 vUv;

  void main() {
    vec3 pos = position;

    // subtle breathing animation
    pos.z += sin(pos.x * 0.3 + uTime * 0.25) * 0.06;
    pos.z += cos(pos.y * 0.25 + uTime * 0.2) * 0.04;

    vElevation = pos.z;
    vNormal = normalize(normalMatrix * normal);
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const fragmentShader = `
  uniform float uTime;
  varying float vElevation;
  varying vec3 vNormal;
  varying vec2 vUv;

  void main() {
    float h = clamp((vElevation + 3.0) / 6.5, 0.0, 1.0);

    // topo color ramp — muted, dark, map-like
    vec3 deep    = vec3(0.035, 0.10, 0.09);
    vec3 lowland = vec3(0.05, 0.16, 0.12);
    vec3 forest  = vec3(0.07, 0.22, 0.15);
    vec3 meadow  = vec3(0.14, 0.30, 0.16);
    vec3 earth   = vec3(0.30, 0.26, 0.18);
    vec3 rock    = vec3(0.42, 0.38, 0.30);
    vec3 peak    = vec3(0.58, 0.54, 0.46);

    vec3 color = deep;
    color = mix(color, lowland, smoothstep(0.0,  0.12, h));
    color = mix(color, forest,  smoothstep(0.12, 0.28, h));
    color = mix(color, meadow,  smoothstep(0.28, 0.45, h));
    color = mix(color, earth,   smoothstep(0.45, 0.60, h));
    color = mix(color, rock,    smoothstep(0.60, 0.78, h));
    color = mix(color, peak,    smoothstep(0.78, 1.0,  h));

    // minor contour lines
    float interval = 0.25;
    float contour = abs(fract(vElevation / interval + 0.5) - 0.5) * interval;
    float line = 1.0 - smoothstep(0.003, 0.014, contour);
    color = mix(color, color * 0.5, line * 0.35);

    // major contour lines — bolder, with subtle highlight
    float majorInterval = 1.25;
    float major = abs(fract(vElevation / majorInterval + 0.5) - 0.5) * majorInterval;
    float majorLine = 1.0 - smoothstep(0.006, 0.022, major);
    color = mix(color, vec3(0.7, 0.65, 0.5), majorLine * 0.25);

    // hillshade — NW light source
    vec3 lightDir = normalize(vec3(-0.5, 0.7, 1.2));
    float diff = max(dot(vNormal, lightDir), 0.0);
    float ambient = 0.35;
    color *= ambient + diff * (1.0 - ambient);

    // subtle highlight on ridges
    float ridge = pow(max(dot(vNormal, vec3(0.0, 0.0, 1.0)), 0.0), 8.0);
    color += vec3(0.15, 0.14, 0.10) * ridge * 0.3;

    // vignette — darken edges
    vec2 center = vUv - 0.5;
    float vignette = 1.0 - dot(center, center) * 1.6;
    vignette = clamp(vignette, 0.0, 1.0);
    color *= 0.5 + vignette * 0.5;

    gl_FragColor = vec4(color, 1.0);
  }
`;

/** the background color the canvas clears to — matches the terrain's deep color */
const BG_COLOR = new THREE.Color(0.035, 0.1, 0.09);

function TerrainMesh() {
  const meshRef = useRef<THREE.Mesh>(null);
  const mouse = useRef({ x: 0, y: 0, tx: 0, ty: 0 });
  const { camera } = useThree();

  const { geometry, material } = useMemo(() => {
    // oversized plane so edges never show even with camera panning
    const geo = new THREE.PlaneGeometry(40, 30, 280, 200);
    const noise = createNoise2D();
    const pos = geo.attributes.position;

    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);

      let h = 0;
      h += noise(x * 0.08, y * 0.08) * 2.8;
      h += noise(x * 0.18, y * 0.18) * 1.4;
      h += noise(x * 0.38, y * 0.38) * 0.7;
      h += noise(x * 0.75, y * 0.75) * 0.3;
      h += noise(x * 1.5, y * 1.5) * 0.1;

      pos.setZ(i, h);
    }

    geo.computeVertexNormals();

    const mat = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: { uTime: { value: 0 } },
      transparent: false,
      side: THREE.FrontSide,
    });

    return { geometry: geo, material: mat };
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current.tx = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.ty = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useFrame(({ clock }, delta) => {
    if (!meshRef.current) return;

    const lerp = 1 - Math.pow(0.04, delta); // frame-rate independent smoothing
    mouse.current.x += (mouse.current.tx - mouse.current.x) * lerp;
    mouse.current.y += (mouse.current.ty - mouse.current.y) * lerp;

    // parallax: pan camera position instead of rotating mesh
    // this feels like dragging a map under a viewport
    camera.position.x = mouse.current.x * 1.8;
    camera.position.y = mouse.current.y * 1.2;

    // very slight tilt toward cursor for depth feel
    meshRef.current.rotation.x = mouse.current.y * 0.04;
    meshRef.current.rotation.y = -mouse.current.x * 0.04;

    // slow idle drift
    meshRef.current.rotation.z = clock.elapsedTime * 0.006;

    material.uniforms.uTime.value = clock.elapsedTime;
  });

  return <mesh ref={meshRef} geometry={geometry} material={material} />;
}

export function TerrainCanvas() {
  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{ position: [0, 0, 12], fov: 50 }}
        gl={{
          antialias: true,
          powerPreference: "high-performance",
        }}
        dpr={[1, 1.5]}
        onCreated={({ gl }) => {
          gl.setClearColor(BG_COLOR);
        }}
      >
        <TerrainMesh />
      </Canvas>
    </div>
  );
}
