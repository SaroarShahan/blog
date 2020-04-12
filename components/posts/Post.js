import Link from "next/link";
import moment from "moment";
import styles from "./styles/Post.module.scss";

const Post = ({ post }) => {
  console.log("post", post);
  return (
    <div className={styles.box}>
      {post.better_featured_image.source_url && (
        <Link href="/posts/[slug]" as={`/posts/${post.slug}`}>
          <a>
            <img src={post.better_featured_image.source_url} />
          </a>
        </Link>
      )}
      <div className={styles.boxContent}>
        <h2>
          <Link href="/posts/[slug]" as={`/posts/${post.slug}`}>
            <a>{post.title.rendered}</a>
          </Link>
        </h2>
        <span>{moment(post.date).format("MMMM DD, YYYY")}</span>
        <Link href="/posts/[slug]" as={`/posts/${post.slug}`}>
          <a>আরও পড়ুন</a>
        </Link>
      </div>
    </div>
  );
};

export default Post;
