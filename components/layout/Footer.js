import Link from "next/link";
import Container from "../common/Container";
import styles from "./styles/Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Container>
        {" "}
        &copy; {new Date().getFullYear()} All Rights Reserved by{" "}
        <Link href="/">
          <a>শাহানের ডায়েরি</a>
        </Link>
        .
      </Container>
    </div>
  );
};

export default Footer;
