import Success from "@/icons/success";
import Error from "@/icons/error";
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
      {success && <Success />}
      {error && <Error />}
    </button>
  );
}

export default RadioButton;
