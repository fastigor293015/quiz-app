import clsx from '@/utils/clsx';
import styles from './loader.module.css';

const Loader = ({ className }) => {
  return (
    <div className={clsx(styles.container, className)}>
      <span className={styles.dot} />
    </div>
  );
};

export default Loader;
