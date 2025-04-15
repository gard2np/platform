import React from "react";
import { Link, Outlet } from "react-router";
import { Button } from "../components/ui/button";
import { CalendarDays, Handshake, NotebookPen, ThumbsUp, UserRoundPen } from "lucide-react";


const Layout: React.FC = () => {
  return (
    <div className="h-screen flex flex-col">
      <main className="flex-grow">
        <Outlet /> {/* 여기에 하위 페이지들이 렌더링됨 */}
      </main>
      <footer>
        <div className="fixed bottom-0 w-full h-20 bg-gray-900 justify-center items-center flex grid grid-rows-2 gap-2">
        <div className="w-fullgrid grid-cols-5 gap-2 pr-5 pl-5 justify-center items-center flex h-10 pt-4">
        <Link to="/">
        <Button variant="custom">용해<ThumbsUp /></Button>
        </Link>
        <Link to="/study">
        <Button variant="custom">학습<NotebookPen /></Button>
        </Link>
        <Link to="/mansae">
        <Button variant="custom">사주<CalendarDays /></Button>
        </Link>
        <Link to="/community">
        <Button variant="custom">소통<Handshake /></Button>
        </Link>
        <Link to="/config">
        <Button variant="custom">설정<UserRoundPen /></Button>
        </Link>         
        </div>
        <div className="w-full items-center text-center text-gray-500 pb-4 h-10 justify-center flex">
          <p className="text-xs text-white mt-6">© 2025 사주 읽는 치히로 All rights reserved.</p>
        </div>
        </div>
      </footer>
    </div>
  );
};

interface ListItemProps extends React.ComponentPropsWithoutRef<"a"> {
  to: string;
  title: string;
}

export default Layout;
