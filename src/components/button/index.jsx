import clsx from "@/utils/clsx";
import styles from "./button.module.css";

const Button = ({
  tip,
  fullWidth,
  children,
  onClick,
  disabled
}) => {
  return (
    <div className={clsx(styles.wrapper, fullWidth && styles.fullWidth)}>
      <button className={styles.btn} onClick={onClick} disabled={disabled}>
        {children}
      </button>
      {
        tip && (
          <p className={styles.tip}>
            или нажми <span>{tip}</span>
          </p>
        )
      }
    </div >
  );
}

export default Button;