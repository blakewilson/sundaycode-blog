import { FC } from "react";
import { Post } from "../types";
import Excerpt from "./excerpt";

type PostsListProps = {
  posts: Post[];
};

const PostsList: FC<PostsListProps> = ({ posts }) => {
  return (
    <>
      {posts.map((post, index) => (
        <Excerpt key={post.slug} post={post} />
      ))}
    </>
  );
};

export default PostsList;
