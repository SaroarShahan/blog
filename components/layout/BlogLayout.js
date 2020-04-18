import styles from "./styles/BlogLayout.module.scss";
import Container from "../common/Container";
import Sidebar from "./../common/Sidebar";

const BlogLayout = ({ children }) => {
  return (
    <Container>
      <div className={styles.wrapper}>
        <main className={styles.wrapper__inner}>{children}</main>
        <Sidebar />
      </div>
    </Container>
  );
};

export default BlogLayout;
