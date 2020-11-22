import { FC } from "react";
import NavLink from "./navLink";
import links from "../lib/menuLinks";

const Nav: FC = () => {
  return (
    <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
      {links.map((link, index) => (
        <NavLink href={link.href} key={index}>
          {link.text}
        </NavLink>
      ))}
    </div>
  );
};

export default Nav;
