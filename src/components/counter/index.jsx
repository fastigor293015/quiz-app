import Minus from "@/icons/minus";
import Plus from "@/icons/plus";
import styles from "./counter.module.css";

const Counter = ({
  value,
  onChange,
  description,
  min = 1,
  max = 100
}) => {
  const onUpdate = (newValue) => {
    if (newValue === "") {
      return onChange(newValue);
    }
    newValue = parseInt(newValue);
    onChange(newValue >= min ? newValue : min);
  }

  const onBlur = () => {
    if (value < min) {
      onChange(min);
    } else if (value > max) {
      onChange(max);
    }
  }

  return (
    <div className={styles.wrapper}>
      {description && (
        <p className={styles.description}>
          {description}
        </p>
      )}
      <div className={styles.counter}>
        <button className={styles.counterBtn} onClick={() => onUpdate(value - 1)} disabled={value <= min}>
          <Minus />
        </button>
        <input className={styles.counterField} type="number" min={min} max={max} value={value} onChange={(e) => onUpdate(e.target.value)} onBlur={onBlur} />
        <button className={styles.counterBtn} onClick={() => onUpdate(value + 1)} disabled={value >= max}>
          <Plus />
        </button>
      </div>
    </div>
  );
}

export default Counter;
