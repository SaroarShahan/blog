import fetch from "isomorphic-unfetch";
import dynamic from "next/dynamic";
import renderHTML from "react-render-html";
import { baseUrl } from "../../utlis/baseUrl";
const BlogLayout = dynamic(() => import("../../components/layout/BlogLayout"), {
  ssr: false,
});

const SinglePost = ({ post }) => {
  return (
    <div>
      {post.better_featured_image.source_url && (
        <div>
          <img src={post.better_featured_image.source_url} />
        </div>
      )}
      <div>
        <h1>{post.title.rendered && post.title.rendered}</h1>
        {renderHTML(post.content.rendered)}
      </div>
    </div>
  );
};

export async function getStaticPaths() {
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

  return {
    props: {
      post: post["0"],
    },
  };
}

SinglePost.Layout = BlogLayout;

export default SinglePost;
