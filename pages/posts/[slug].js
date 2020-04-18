import { useContext, useEffect } from "react";
import Head from "next/head";
import fetch from "isomorphic-unfetch";
import dynamic from "next/dynamic";
import moment from "moment";
import renderHTML from "react-render-html";
import styles from "./../styles/PostDetails.module.scss";
import { baseUrl } from "../../utlis/baseUrl";
import { CreateContext } from "../../provider/SiteProvider";
const BlogLayout = dynamic(() => import("../../components/layout/BlogLayout"), {
  ssr: false,
});

const SinglePost = ({ post, recentPosts }) => {
  const { getRecentPosts } = useContext(CreateContext);

  useEffect(() => {
    getRecentPosts(recentPosts);
  }, []);

  return (
    <>
      <Head>
        <title>{post.title.rendered} || শাহানের ডায়েরি</title>
      </Head>
      <div className={styles.box}>
        {post.better_featured_image && (
          <div className={styles.box__featured}>
            <img src={post.better_featured_image.source_url} />
          </div>
        )}
        <div className={styles.box__content}>
          <h1 className={styles.box__title}>
            {post.title.rendered && post.title.rendered}
          </h1>
          <p>
            <span>{moment(post.date).format("MMMM DD, YYYY")}</span>
            {/* <Link href="/about">
            <a>{post._embedded.author["0"].name}</a>
          </Link> */}
          </p>
          {renderHTML(post.content.rendered)}
        </div>
      </div>
    </>
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

SinglePost.Layout = BlogLayout;

export default SinglePost;
