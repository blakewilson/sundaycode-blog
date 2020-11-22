import Link from "next/link";
import { FC } from "react";
import { Post } from "../types";
import Date from "./date";

type ExcerptProps = {
  post: Post;
};

const Excerpt: FC<ExcerptProps> = ({ post }) => {
  const { slug, title, createdAt, excerpt } = post;

  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
      <div className="flex-1 bg-white border-2 border-transparent dark:border-gray-900 dark:bg-black p-6 flex flex-col justify-between">
        <div className="flex-1">
          {/* <div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 mr-2">
                  typescript
                </span>

                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 mr-2">
                  serverless
                </span>
              </div> */}
          <Link href={`/posts/${slug}`}>
            <a className="block mt-2">
              <p className="text-xl font-semibold text-gray-900 dark:text-white">
                {title}
              </p>
              <div className="flex mt-3 space-x-1 text-sm text-gray-500 dark:text-gray-400">
                <time dateTime={createdAt}>
                  <Date isoDate={createdAt} />
                </time>
              </div>
              <p className="mt-3 text-base text-gray-500 dark:text-gray-400">
                {excerpt}
              </p>
            </a>
          </Link>
        </div>
        {/* <div className="mt-6 flex items-center">
          <div className="flex-shrink-0">
            <a href="#">
              <span className="sr-only">Roel Aufderehar</span>
              <img
                className="h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </a>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">
              <a href="#" className="hover:underline">
                Roel Aufderehar
              </a>
            </p>
            <div className="flex space-x-1 text-sm text-gray-500">
              <time dateTime="2020-03-16">Mar 16, 2020</time>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Excerpt;
