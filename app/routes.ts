import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";

export default [
  layout("routes/layout.tsx", [
    index("routes/home.tsx"), // 홈 (`/`)
    route("jjk", "routes/study/jjk.tsx"), // 지장간 암기 도우미 (`/jjk`)
    route("ss", "routes/study/ss.tsx"), // 십신 암기 도우미 (`/ss`)
    route("ox", "routes/study/oxquiz.tsx"), // 십신 암기 도우미 (`/ss`)
    route("sky", "routes/study/skyquiz.tsx"), // 십신 암기 도우미 (`/ss`)
    route("study", "routes/002.tsx"), // 커뮤니티 (`/community`)
    route("mansae", "routes/003.tsx"),
    route("community", "routes/004.tsx"),
    route("config", "routes/005.tsx"),
  ])
] satisfies RouteConfig;
