import fetch from "isomorphic-unfetch";
import dynamic from "next/dynamic";
import renderHTML from "react-render-html";
const BlogLayout = dynamic(() => import("../../components/layout/BlogLayout"), {
  ssr: false,
});

const SinglePost = ({ post }) => {
  return (
    <div>
      <div>
        <img src={post._embedded["wp:featuredmedia"]["0"].source_url} />
      </div>
      <div>
        <h1>{post.title.rendered && post.title.rendered}</h1>
        {renderHTML(post.content.rendered)}
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const res = await fetch("http://shahansdiary.com/wp-json/wp/v2/posts");
  const posts = await res.json();
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const response = await fetch(
    `http://shahansdiary.com/wp-json/wp/v2/posts?slug=${params.slug}&_embed`
  );
  const post = await response.json();

  return {
    props: {
      post: post["0"],
    },
  };
}

SinglePost.Layout = BlogLayout;

export default SinglePost;
