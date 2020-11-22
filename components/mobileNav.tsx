import { FC } from "react";
import MobileNavItem from "./mobileNavItem";
import links from "../lib/menuLinks";

type MobileNavProps = {
  toggleMenu: boolean;
};

const MobileNav: FC<MobileNavProps> = ({ toggleMenu }) => {
  const menuClassName = toggleMenu ? `block sm:hidden` : `hidden sm:hidden`;
  return (
    <div className={menuClassName}>
      <div className="pt-2 pb-4 space-y-1">
        {links.map((link, index) => (
          <MobileNavItem href={link.href} key={index}>
            {link.text}
          </MobileNavItem>
        ))}
      </div>
    </div>
  );
};

export default MobileNav;
