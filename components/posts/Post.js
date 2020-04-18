import Link from "next/link";
import moment from "moment";
import renderHTML from "react-render-html";
import styles from "./styles/Post.module.scss";

const Post = ({ post }) => {
  console.log("post", post);
  return (
    <div className={styles.box}>
      {post.better_featured_image && (
        <Link href="/posts/[slug]" as={`/posts/${post.slug}`}>
          <a className={styles.box__featured}>
            <img src={post.better_featured_image.source_url} />
          </a>
        </Link>
      )}
      <div className={styles.box__content}>
        <h2 className={styles.box__title}>
          <Link href="/posts/[slug]" as={`/posts/${post.slug}`}>
            <a className={styles.box__link}>{post.title.rendered}</a>
          </Link>
        </h2>
        <p className={styles.box__meta}>
          <span>{moment(post.date).format("MMMM DD, YYYY")}</span>
          {/* <Link href="/about">
            <a>{post._embedded.author["0"].name}</a>
          </Link> */}
        </p>
        {post.excerpt && renderHTML(post.excerpt.rendered)}
        <div className={styles.box__readmore}>
          <Link href="/posts/[slug]" as={`/posts/${post.slug}`}>
            <a>আরও পড়ুন</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Post;
