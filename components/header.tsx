import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import { Post } from "../types";
import Logo from "./logo";
import MobileNav from "./mobileNav";
import MobileNavButton from "./mobileNavButton";
import Nav from "./nav";
import RecommendedPost from "./recommendedPost";

const Header: FC = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex justify-between h-16">
          <MobileNavButton
            toggleMenu={toggleMenu}
            setToggleMenu={(state) => setToggleMenu(state)}
          />

          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
            <Link href="/">
              <a className="flex-shrink-0 flex items-center">
                <Logo />
              </a>
            </Link>

            {/* <RecommendedPost /> */}

            <Nav />
          </div>
        </div>
      </div>

      <MobileNav toggleMenu={toggleMenu} />
    </nav>
  );
};

export default Header;
