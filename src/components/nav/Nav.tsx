import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "../ui/button";

const Nav = () => {
  const navItems = ["About", "Experience", "Projects", "Hobbies"];

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b justify-items-center py-4 ">
      <NavigationMenu>
        <NavigationMenuList>
          <Button variant="outline" size="lg" className="ml-4">
            Jihro Abendano
          </Button>
          <div className="flex ">
            {navItems.map((items) => {
              const targetId = items.toLocaleLowerCase();
              return (
                <NavigationMenuItem key={items}>
                  <NavigationMenuLink
                    href={`#${targetId}`}
                    onClick={(e) => handleClick(e, targetId)}
                    className="text-xl px-4"
                  >
                    {items}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              );
            })}
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
};

export default Nav;
