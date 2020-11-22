import { FC } from "react";
import { Post } from "../types";
import BlogPattern from "./blogPattern";
import Date from "./date";

type ContentProps = {
  post: Post;
};

const Content: FC<ContentProps> = ({ post, children }) => {
  const { title, createdAt } = post;
  return (
    <div className="relative py-16 overflow-hidden">
      <BlogPattern />

      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="text-lg max-w-prose mx-auto">
          <h1>
            <span className="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">
              <Date isoDate={createdAt} />
            </span>
            <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              {title}
            </span>
          </h1>

          {/* {lead ?? (
            <p className="mt-8 text-xl text-gray-500 leading-8">{lead}</p>
          )} */}
        </div>

        <div className="mt-6 prose prose-indigo prose-lg text-gray-500 dark:text-gray-200 mx-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Content;
