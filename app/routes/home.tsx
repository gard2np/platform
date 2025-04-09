import React from "react";
import Quiz from "~/routes/Quiz"; // 퀴즈 컴포넌트

const Home: React.FC = () => {
  return <Quiz />; // Layout.tsx에서 Outlet으로 감싸고 있으므로 따로 감쌀 필요 없음
};

export default Home;
