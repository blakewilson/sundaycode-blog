import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";

type NavLinkProps = {
  href: string;
};

const NavLink: FC<NavLinkProps> = ({ href, children }) => {
  const router = useRouter();
  let className = `inline-flex items-center px-1 pt-1 text-sm font-medium`;

  if (router.asPath === href) {
    className += ` text-indigo-600 dark:text-white`;
  } else {
    className += ` text-gray-900 dark:text-gray-400`;
  }

  return (
    <Link href={href}>
      <a className={className}>{children}</a>
    </Link>
  );
};

export default NavLink;
