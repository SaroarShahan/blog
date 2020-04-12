import styles from "./styles/BlogLayout.module.scss";
import Container from "../common/Container";

const BlogLayout = ({ children }) => {
  return (
    <Container>
      <div className={styles.wrapper}>
        <main className={styles.main}>{children}</main>
      </div>
    </Container>
  );
};

export default BlogLayout;
