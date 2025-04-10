import React from "react";
import { href, Link, Outlet } from "react-router";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuItem, DropdownMenuGroup, DropdownMenuSeparator, DropdownMenuLabel } from "~/components/ui/dropdown-menu";
import { Button } from "~/components/ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink  } from "~/components/ui/navigation-menu";
import { cn } from "~/lib/utils";

const Layout: React.FC = () => {
  return (
    <div className="h-screen flex flex-col">
      {/* ✅ 한 번만 로드되는 헤더 */}
      <header className="fixed top-0 w-full h-14 bg-gray-900 text-white flex items-center shadow-md z-50">
        <div className="fixed left-5">
          <Link to="/">
          <img src="public/00123.png" alt="logo" className="w-10 h-10" />
          </Link>
        </div>
        <div className="fixed left-20">
        <NavigationMenu>
          <NavigationMenuList>
          <NavigationMenuItem>
              <NavigationMenuTrigger className="text-white font-bold bg-gray-900 mr-1">About</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    to="/"
                  >
                    <img src="public/11123.png" alt="logo" className="h-16 w-16" />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      용해용
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      명리학 학습을 스마트하게 도와주는 플랫폼 서비스입니다.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem to="/docs" title="소개">
                아직 작성되지 않았습니다.
              </ListItem>
              <ListItem to="/docs/installation" title="사용법">
                아직 작성되지 않았습니다.
              </ListItem>
              <ListItem to="/docs/primitives/typography" title="연락처">
                peal9@naver.com
              </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-white font-bold bg-gray-900 mr-1">퀴즈</NavigationMenuTrigger>
              <NavigationMenuContent>
                
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <ListItem to="/ox" title="OX Quiz">  
                  명리학 전반의 지식에 대한 퀴즈를 풀어보세요.
                </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-white font-bold bg-gray-900 mr-1">암기 도우미</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li>
                    <ListItem to="/ss" title="십신 암기 도우미">
                      십신 암기는 필수입니다.
                    </ListItem>
                  </li>  
                  <li>
                    <ListItem to="/jjk" title="지장간 암기 도우미">
                      지장간은 입체적인 해석을 위해 암기해두면 아주 유유용합니다.
                    </ListItem>
                  </li>
                  
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
          </NavigationMenuList>
        </NavigationMenu>
        </div>
      </header>

      {/* ✅ 내부 콘텐츠 (라우팅 변경 시 이 부분만 업데이트됨) */}
      <main className="flex-grow mt-14">
        <Outlet /> {/* 여기에 하위 페이지들이 렌더링됨 */}
      </main>
    </div>
  );
};

interface ListItemProps extends React.ComponentPropsWithoutRef<"a"> {
  to: string;
  title: string;
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  ListItemProps
>(({ className, title, children, to, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          to={to}
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export default Layout;
