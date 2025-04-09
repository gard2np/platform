import { Link, Outlet } from "react-router";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuItem, DropdownMenuGroup, DropdownMenuSeparator, DropdownMenuLabel } from "~/components/ui/dropdown-menu";
import { Button } from "~/components/ui/button";

const Layout: React.FC = () => {
  return (
    <div className="h-screen flex flex-col">
      {/* ✅ 한 번만 로드되는 헤더 */}
      <header className="fixed top-0 w-full h-14 bg-gray-900 text-white flex items-center justify-center shadow-md z-50">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-8 bg-gray-100 text-black">MENU OPEN</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel className="font-bold">사주 읽는 치히로</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <Link to="/"><DropdownMenuItem>홈</DropdownMenuItem></Link>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <Link to="/jjk"><DropdownMenuItem>지장간 암기 도우미</DropdownMenuItem></Link>
              <Link to="/ss"><DropdownMenuItem>십신 암기 도우미</DropdownMenuItem></Link>
              <Link to="/ox"><DropdownMenuItem>OX Quiz</DropdownMenuItem></Link>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>

      {/* ✅ 내부 콘텐츠 (라우팅 변경 시 이 부분만 업데이트됨) */}
      <main className="flex-grow mt-14">
        <Outlet /> {/* 여기에 하위 페이지들이 렌더링됨 */}
      </main>
    </div>
  );
};

export default Layout;
