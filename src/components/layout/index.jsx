import clsx from '@/utils/clsx';
import Header from './header';
import styles from './layout.module.css';
import Footer from './footer';

const Layout = ({
  className,
  children,
  cancelBtn
}) => {
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <div className={clsx(styles.wrapper, className)}>
          <Header cancelBtn={cancelBtn} />
          <main>{children}</main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
