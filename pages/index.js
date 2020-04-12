import fetch from "node-fetch";
import dynamic from "next/dynamic";
import Post from "../components/posts/Post";
import { baseUrl } from "../utlis/baseUrl";
const BlogLayout = dynamic(() => import("../components/layout/BlogLayout"), {
  ssr: false,
});

const Home = ({ posts }) => {
  return (
    <div>
      {posts && posts.map((post) => <Post key={post.id} post={post} />)}
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch(`${baseUrl}/posts`);
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

Home.Layout = BlogLayout;

export default Home;
