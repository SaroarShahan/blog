import Link from "next/link";
import styles from "./styles/Header.module.scss";
import Container from "../common/Container";

const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerInner}>
          <div className={styles.logo}>
            <h1 className={styles.logoTitle}>
              <Link href="/">
                <a>শাহানের ডায়েরি</a>
              </Link>
            </h1>
          </div>
          <nav className={styles.mainNav}>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              {/* <li>
                <Link href="/about">
                  <a>সম্পর্কে</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a>যোগাযোগ</a>
                </Link>
              </li> */}
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
