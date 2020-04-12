import fetch from "node-fetch";
import dynamic from "next/dynamic";
import Post from "../components/posts/Post";
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
  const response = await fetch(
    "http://shahansdiary.com/wp-json/wp/v2/posts?_embed"
  );
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

Home.Layout = BlogLayout;

export default Home;
