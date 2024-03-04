import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyrights}>
        Проект выполнен в рамках стажировки&nbsp;
        <a href="https://preax.ru" target="_blank" rel="noopener noreferrer">
          PREAX
        </a>
      </p>
    </footer>
  );
}

export default Footer;