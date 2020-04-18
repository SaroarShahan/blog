import React, { useContext, useEffect } from "react";
import axios from "axios";
import dynamic from "next/dynamic";
import Post from "../components/posts/Post";
import { baseUrl } from "../utlis/baseUrl";
const BlogLayout = dynamic(() => import("../components/layout/BlogLayout"), {
  ssr: false,
});
import { CreateContext } from "./../provider/SiteProvider";

const Home = ({ posts }) => {
  const providerContext = useContext(CreateContext);

  useEffect(() => {
    providerContext.getPosts(posts);
    providerContext.getRecentPosts(posts.slice(0, 2));
  }, [posts]);

  return (
    <div>
      {posts && posts.map((post) => <Post key={post.id} post={post} />)}
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch(`${baseUrl}/posts?_embed=author`);
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

Home.Layout = BlogLayout;

export default Home;
