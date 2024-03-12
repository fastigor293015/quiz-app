import clsx from "@/utils/clsx";
import styles from "./button.module.css";
import Loader from "../loader";

const Button = ({
  hint,
  loading,
  fullWidth,
  children,
  onClick,
  disabled
}) => {
  return (
    <div className={clsx(styles.wrapper, fullWidth && styles.fullWidth)}>
      <button className={styles.btn} onClick={onClick} disabled={disabled}>
        {loading ? <Loader /> : children}
      </button>
      {
        hint && (
          <p className={styles.hint}>
            или нажми <span>{hint}</span>
          </p>
        )
      }
    </div >
  );
}

export default Button;
