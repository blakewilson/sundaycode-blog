import fs from "fs";
import { join } from "path";

export const getPostSlugs = () => {
  const pages = fs.readdirSync(join(process.cwd(), "pages/posts"));

  return pages
    .filter((page) => page.endsWith(".mdx"))
    .map((page) => page.replace(".mdx", ""));
};

export const getPostBySlug = async (slug: string) => {
  let { postMeta } = await import(`../pages/posts/${slug}.mdx`);

  postMeta = { ...postMeta, slug };

  return postMeta;
};

export const getPostMetas = async () => {
  const slugs = getPostSlugs();

  let postMetas = [];

  for (const slug of slugs) {
    postMetas = [...postMetas, await getPostBySlug(slug)];
  }

  return postMetas.sort((a, b) =>
    new Date(a).getTime() > new Date(b).getTime() ? 1 : -1
  );
};

export const getMostRecentPost = async () => {
  const posts = await getPostMetas();

  if (posts.length) {
    return posts[0];
  } else {
    return null;
  }
};
