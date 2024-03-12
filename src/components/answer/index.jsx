import RadioButton from "../radio-button";
import styles from "./answer.module.css";

const Answer = ({
  answers,
  selected,
  rightAnswer,
  isAnswered,
  isLoading,
  onChange
}) => {
  return (
    <ul className={styles.answersList}>
      {answers.map((item, i) => (
        <li key={item} className={styles.answerItem}>
          <RadioButton
            number={i + 1}
            value={item}
            onChange={onChange}
            isActive={selected === item}
            success={isAnswered && (rightAnswer === item)}
            error={isAnswered && (rightAnswer !== selected) && (selected === item)}
            disabled={isAnswered || isLoading}
          />
        </li>
      ))}
    </ul>
  );
}

export default Answer;
