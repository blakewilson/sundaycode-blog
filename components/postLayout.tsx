import Head from "next/head";
import { FC } from "react";
import Content from "./content";
import Footer from "./footer";
import Header from "./header";
import { Newsletter } from "./newsletter";
import { useRecentPost } from "../hooks";
import { getMostRecentPost } from "../lib/api";
import { siteName } from "../lib/constants";
import { StoreProvider } from "../store";
import { Post } from "../types";

type BlogTemplateProps = {
  post: Post;
};

const BlogTemplate: FC<BlogTemplateProps> = ({ children, post }) => {
  return (
    <StoreProvider>
      <Head>
        <title>
          {post.title} | {siteName}
        </title>

        <meta name="description" content={post.excerpt} />
      </Head>

      <div className="bg-white dark:bg-black">
        <Header />

        <Content post={post}>{children}</Content>

        <Newsletter />

        <Footer />
      </div>
    </StoreProvider>
  );
};

export default BlogTemplate;
