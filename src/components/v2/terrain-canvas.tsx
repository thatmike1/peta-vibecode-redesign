import { Canvas, useFrame } from "@react-three/fiber";
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
    pos.z += sin(pos.x * 0.5 + uTime * 0.4) * 0.05;
    pos.z += cos(pos.y * 0.4 + uTime * 0.3) * 0.03;

    vElevation = pos.z;
    vNormal = normalize(normalMatrix * normal);
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const fragmentShader = `
  varying float vElevation;
  varying vec3 vNormal;
  varying vec2 vUv;

  vec3 topoColor(float h) {
    float t = clamp((h + 2.5) / 5.0, 0.0, 1.0);

    vec3 deep   = vec3(0.04, 0.20, 0.16);
    vec3 forest = vec3(0.06, 0.35, 0.24);
    vec3 meadow = vec3(0.22, 0.48, 0.22);
    vec3 earth  = vec3(0.48, 0.40, 0.26);
    vec3 rock   = vec3(0.64, 0.56, 0.44);
    vec3 snow   = vec3(0.92, 0.90, 0.86);

    vec3 c = deep;
    c = mix(c, forest, smoothstep(0.0,  0.18, t));
    c = mix(c, meadow, smoothstep(0.18, 0.36, t));
    c = mix(c, earth,  smoothstep(0.36, 0.52, t));
    c = mix(c, rock,   smoothstep(0.52, 0.70, t));
    c = mix(c, snow,   smoothstep(0.70, 1.0,  t));
    return c;
  }

  void main() {
    vec3 color = topoColor(vElevation);

    // minor contour lines
    float interval = 0.3;
    float contour = abs(fract(vElevation / interval + 0.5) - 0.5) * interval;
    float line = 1.0 - smoothstep(0.005, 0.016, contour);
    color = mix(color, color * 0.35, line * 0.45);

    // major contour lines (every 5th)
    float majorInterval = 1.5;
    float major = abs(fract(vElevation / majorInterval + 0.5) - 0.5) * majorInterval;
    float majorLine = 1.0 - smoothstep(0.008, 0.025, major);
    color = mix(color, color * 0.15, majorLine * 0.65);

    // directional lighting
    vec3 lightDir = normalize(vec3(0.7, 0.5, 1.5));
    float diff = max(dot(vNormal, lightDir), 0.0);
    color *= 0.40 + diff * 0.60;

    // edge fade so terrain bleeds into background
    float edge = smoothstep(0.0, 0.14, vUv.x) * smoothstep(1.0, 0.86, vUv.x)
               * smoothstep(0.0, 0.20, vUv.y) * smoothstep(1.0, 0.80, vUv.y);

    gl_FragColor = vec4(color, edge);
  }
`;

function TerrainMesh() {
  const meshRef = useRef<THREE.Mesh>(null);
  const mouse = useRef({ x: 0, y: 0, tx: 0, ty: 0 });

  const { geometry, material } = useMemo(() => {
    const geo = new THREE.PlaneGeometry(24, 16, 200, 140);
    const noise = createNoise2D();
    const pos = geo.attributes.position;

    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);

      let h = 0;
      h += noise(x * 0.1, y * 0.1) * 2.4;
      h += noise(x * 0.22, y * 0.22) * 1.2;
      h += noise(x * 0.45, y * 0.45) * 0.6;
      h += noise(x * 0.9, y * 0.9) * 0.25;
      h += noise(x * 1.8, y * 1.8) * 0.08;

      pos.setZ(i, h);
    }

    geo.computeVertexNormals();

    const mat = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: { uTime: { value: 0 } },
      transparent: true,
      side: THREE.DoubleSide,
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

    mouse.current.x += (mouse.current.tx - mouse.current.x) * delta * 1.8;
    mouse.current.y += (mouse.current.ty - mouse.current.y) * delta * 1.8;

    meshRef.current.rotation.x = -Math.PI / 2.5 + mouse.current.y * 0.06;
    meshRef.current.rotation.z =
      mouse.current.x * 0.04 + clock.elapsedTime * 0.012;

    material.uniforms.uTime.value = clock.elapsedTime;
  });

  return <mesh ref={meshRef} geometry={geometry} material={material} />;
}

export function TerrainCanvas() {
  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{ position: [0, -4, 10], fov: 48 }}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
        }}
        dpr={[1, 1.5]}
        style={{ background: "transparent" }}
      >
        <TerrainMesh />
      </Canvas>
    </div>
  );
}
