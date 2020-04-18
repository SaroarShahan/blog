import { useContext } from "react";
import Link from "next/link";
import { CreateContext } from "../../provider/SiteProvider";
import Box from "../common/Box";
import styles from "./styles/RecentPosts.module.scss";

const RecentPosts = () => {
  const { recentPosts } = useContext(CreateContext);

  console.log("recentPosts ", recentPosts);
  return (
    <>
      {recentPosts.length > 0 && (
        <Box>
          <Box.Title>সাম্প্রতিক পোস্টসমূহ</Box.Title>
          <Box.Body>
            <ul className={styles.list}>
              {recentPosts.map((post) => (
                <li key={post.id} className={styles.boxList}>
                  <div>
                    {post.better_featured_image && (
                      <Link href="/posts/[slug]" as={`/posts/${post.slug}`}>
                        <a className={styles.boxList__featured}>
                          <img src={post.better_featured_image.source_url} />
                        </a>
                      </Link>
                    )}
                  </div>
                  <div>
                    <h2 className={styles.boxList__title}>
                      <Link href="/posts/[slug]" as={`/posts/${post.slug}`}>
                        <a className={styles.boxList__link}>
                          {post.title.rendered}
                        </a>
                      </Link>
                    </h2>
                  </div>
                </li>
              ))}
            </ul>
          </Box.Body>
        </Box>
      )}
    </>
  );
};

export default RecentPosts;
