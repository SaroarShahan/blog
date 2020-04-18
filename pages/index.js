import React, { useContext, useEffect } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import fetch from "node-fetch";
import Post from "../components/posts/Post";
import { baseUrl } from "../utlis/baseUrl";
import { CreateContext } from "./../provider/SiteProvider";
const BlogLayout = dynamic(() => import("../components/layout/BlogLayout"), {
  ssr: false,
});

const Home = ({ posts }) => {
  const providerContext = useContext(CreateContext);

  useEffect(() => {
    providerContext.getPosts(posts);
    providerContext.getRecentPosts(posts.slice(0, 5));
  }, []);

  return (
    <div>
      <Head>
        <title>হোম || শাহানের ডায়েরি</title>
      </Head>
      {posts.length > 0 ? (
        posts.map((post) => <Post key={post.id} post={post} />)
      ) : (
        <p>লেখা আসছে!!!</p>
      )}
    </div>
  );
};

export async function getStaticProps(ctx) {
  const response = await fetch(`${baseUrl}/posts?_embed=author`);
  const posts = await response.json();

  console.log("context query", ctx);

  return {
    props: {
      posts,
    },
  };
}

Home.Layout = BlogLayout;

export default Home;
