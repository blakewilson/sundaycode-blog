import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";

type MobileNavItemProps = {
  href: string;
};

const MobileNavItem: FC<MobileNavItemProps> = ({ href, children }) => {
  let className = `block pl-3 pr-4 py-2 text-base font-medium`;

  const router = useRouter();
  if (router.asPath === href) {
    className += ` text-indigo-600 bg-indigo-50 dark:bg-gray-900 dark:text-white`;
  } else {
    className += ` text-gray-900 dark:text-gray-400`;
  }

  return (
    <Link href={href}>
      <a className={className}>{children}</a>
    </Link>
  );
};

export default MobileNavItem;
