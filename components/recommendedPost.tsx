import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import { useStore } from "../store";

const RecommendedPost: FC = () => {
  const router = useRouter();
  if (router.asPath === "/") {
    return null;
  }

  const { state } = useStore();

  console.log(state);

  return (
    <div className="hidden lg:flex items-center mr-auto ml-8">
      <Link href="/">
        <a className="flex items-center">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 dark:bg-white text-blue-800 dark:text-indigo-600 mr-2">
            Recent
          </span>
          <div className="text-gray-600 dark:text-gray-400 text-sm">
            Global State with React Hooks (TypeScript)
          </div>
        </a>
      </Link>
    </div>
  );
};

export default RecommendedPost;
