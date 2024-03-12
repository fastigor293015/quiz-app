import useCurrentPage from "@/hooks/use-current-page";
import useQuiz from "@/hooks/use-quiz";
import useHotKey from "@/hooks/use-hot-key";
import Layout from "@/components/layout";
import Card from "@/components/card";
import Button from "@/components/button";
import morph from "@/utils/morph";
import { pages } from "@/constants";
import styles from "./result.module.css";

const Result = () => {
  const { navigate } = useCurrentPage();
  const { rightAnswers, wrongAnswers, reset } = useQuiz();
  const { hint } = useHotKey("Enter", () => onSubmit());

  const description = !rightAnswers
    ? "Ты не ответил ни на один вопрос. Попробуй еще!"
    : !wrongAnswers
      ? "Ты ответил правильно на все вопросы. Так держать!"
      : (<>Ты ответил правильно на <span className={styles.rightAnswers}>{rightAnswers}</span> {morph(rightAnswers, ["вопрос", "вопроса", "вопросов"])} и сделал <span className={styles.wrongAnswers}>{wrongAnswers}</span> {morph(wrongAnswers, ["ошибку", "ошибки", "ошибок"])}.</>);

  const onSubmit = () => {
    reset();
    navigate(pages.welcome);
  }

  return (
    <Layout>
      <Card
        title="Результат"
        titleClassName={styles.title}
        description={description}
        img="/images/illustration-result.svg"
        imgPosition="top-center"
      >
        <Button hint={hint} fullWidth onClick={onSubmit}>
          Попробовать еще
        </Button>
      </Card>
    </Layout>
  );
}

export default Result;
