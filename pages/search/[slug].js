import Head from "next/head";
import dynamic from "next/dynamic";
const BlogLayout = dynamic(() => import("../../components/layout/BlogLayout"), {
  ssr: false,
});
const Search = () => {
  return (
    <div>
      <h1>search</h1>
    </div>
  );
};

export async function getStaticPaths(ctx) {
  const res = await fetch(`${baseUrl}/posts`);
  const posts = await res.json();
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const response = await fetch(`${baseUrl}/posts?slug=${params.slug}`);
  const post = await response.json();
  const recentRes = await fetch(`${baseUrl}/posts?per_page=5`);
  const recentPosts = await recentRes.json();

  return {
    props: {
      post: post["0"],
      recentPosts,
    },
  };
}

Search.Layout = BlogLayout;

export default Search;
