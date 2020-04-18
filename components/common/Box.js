import styles from "./styles/Box.module.scss";

const Box = ({ children }) => {
  return <div className={styles.box}>{children}</div>;
};

Box.Title = ({ children }) => {
  return <h2 className={styles.box__title}>{children}</h2>;
};

Box.Body = ({ children }) => {
  return <div className={styles.box__body}>{children}</div>;
};

export default Box;
