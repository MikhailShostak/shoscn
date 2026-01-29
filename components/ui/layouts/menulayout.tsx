import { cn } from "@/lib/utils";
import { Flex } from "@/components/ui/layouts/flex";
import { BackButton, useTitlebar } from "@/components/ui/layouts/titlebar";
import { ScrollContent, ScrollFooter, ScrollHeader, ScrollPage } from "@/components/ui/layouts/scrollpage";

interface MenuLayoutProps {
  isOpened: boolean,
  onClosed?: () => void,
  menuHeader?: React.ReactNode,
  menu: React.ReactNode,
  menuFooter?: React.ReactNode,
  children: React.ReactNode,
}

export function MenuLayout({ isOpened, onClosed, menuHeader, menu, menuFooter, children }: MenuLayoutProps) {
  if (onClosed) {
    useTitlebar(
      isOpened && <BackButton className="flex md:hidden" onClick={onClosed} />
      , [isOpened, onClosed]);
  }

  return (
    <Flex row expanded className='min-h-0'>
      {/* Menu sidebar - show when isOpened on small screens, always show on md+ screens */}
      <Flex className={cn(
        "h-full w-full md:w-96 border-r-0 md:border-r",
        isOpened && "hidden md:flex"
      )}>
        <ScrollPage>
          {menuHeader && (
            <ScrollHeader>
              {menuHeader}
            </ScrollHeader>
          )}
          <ScrollContent className="p-0">
            {menu}
          </ScrollContent>
          {menuFooter && (
            <ScrollFooter>
              {menuFooter}
            </ScrollFooter>
          )}
        </ScrollPage>
      </Flex>

      {/* Children content - show when !isOpened on small screens, always show on md+ screens */}
      <Flex expanded className={cn(
        !isOpened && "hidden md:flex"
      )}>
        {children}
      </Flex>
    </Flex>
  );
}