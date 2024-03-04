import clsx from "@/utils/clsx";
import styles from "./radio-button.module.css";

const RadioButton = ({
  number,
  value,
  isActive,
  onChange,
  success,
  error,
  disabled
}) => {
  return (
    <button className={clsx(styles.radioBtn, success && styles.success, error && styles.error, isActive && styles.active)} onClick={() => onChange(value)} disabled={disabled}>
      {number}
      <span>
        {value}
      </span>
    </button>
  );
}

export default RadioButton;
