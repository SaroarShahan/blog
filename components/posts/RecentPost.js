import fetch from "isomorphic-unfetch";

const RecentPost = ({ posts }) => {
  console.log("posts", posts);
  return (
    <div>
      <h1>সাম্প্রতিক পোস্টসমূহ</h1>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch(
    "http://shahansdiary.com/wp-json/wp/v2/posts?per_page=5"
  );
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default RecentPost;
