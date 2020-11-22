import Head from "next/head";
import { FC } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import PostsList from "../components/postsList";
import { getPostMetas } from "../lib/api";
import { siteName } from "../lib/constants";
import { Post } from "../types";

type HomeProps = {
  posts: Post[];
};

const Home: FC<HomeProps> = ({ posts }) => {
  return (
    <div className="bg-white dark:bg-black">
      <Head>
        <title>All posts | {siteName}</title>

        {/* TODO: SEO */}
      </Head>
      <Header />

      <div className="relative max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          <PostsList posts={posts} />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export const getStaticProps = async () => {
  const posts = await getPostMetas();

  return {
    props: {
      posts,
    },
  };
};

export default Home;
