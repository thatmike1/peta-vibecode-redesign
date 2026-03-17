import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { Suspense, lazy } from "react";
import { cn } from "@/lib/utils";

const V1 = lazy(() => import("@/pages/v1-original"));
const V2 = lazy(() => import("@/pages/v2-terrain"));
const V3 = lazy(() => import("@/pages/v3-satellite"));
const V4 = lazy(() => import("@/pages/v4-dashboard"));

const versions = [
  { path: "/", label: "V1", title: "Editorial" },
  { path: "/v2", label: "V2", title: "Terrain" },
  { path: "/v3", label: "V3", title: "Satellite" },
  { path: "/v4", label: "V4", title: "Dashboard" },
];

function VersionSwitcher() {
  const location = useLocation();

  return (
    <div className="fixed bottom-5 right-5 z-[100] flex items-center gap-1 bg-black/85 backdrop-blur-xl rounded-full p-1 border border-white/10 shadow-2xl">
      {versions.map((v) => (
        <Link
          key={v.path}
          to={v.path}
          className={cn(
            "text-[10px] font-semibold px-3 py-1.5 rounded-full transition-all duration-300",
            location.pathname === v.path
              ? "bg-white text-black shadow-sm"
              : "text-white/40 hover:text-white/80",
          )}
          title={v.title}
        >
          {v.label}
        </Link>
      ))}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="min-h-screen bg-background flex items-center justify-center">
            <div className="w-6 h-6 border-2 border-foreground/20 border-t-foreground/60 rounded-full animate-spin" />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<V1 />} />
          <Route path="/v2" element={<V2 />} />
          <Route path="/v3" element={<V3 />} />
          <Route path="/v4" element={<V4 />} />
        </Routes>
      </Suspense>
      <VersionSwitcher />
    </BrowserRouter>
  );
}
