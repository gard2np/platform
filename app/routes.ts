import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";

export default [
  layout("routes/layout.tsx", [
    index("routes/home.tsx"), // 홈 (`/`)
    route("jjk", "routes/jjk.tsx"), // 지장간 암기 도우미 (`/jjk`)
    route("ss", "routes/ss.tsx"), // 십신 암기 도우미 (`/ss`)
    route("ox", "routes/oxquiz.tsx"), // 십신 암기 도우미 (`/ss`)
  ])
] satisfies RouteConfig;
