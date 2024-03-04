import { useContext } from "react";
import Layout from "@/components/layout";
import Card from "@/components/card";
import Button from "@/components/button";
import { CurrentPageContext } from "@/providers/current-page";
import { pages } from "@/constants";
import { QuizContext } from "@/providers/quiz";
import styles from "./result.module.css";

const Result = () => {
  const { navigate } = useContext(CurrentPageContext);
  const { rightAnswers, wrongAnswers, reset } = useContext(QuizContext);
  const description = !wrongAnswers
    ? "Ты ответил правильно на все вопросы. Так держать!"
    : (<>Ты ответил правильно на <span className={styles.rightAnswers}>{rightAnswers}</span> вопросов и сделал <span className={styles.wrongAnswers}>{wrongAnswers}</span> ошибок.</>);

  return (
    <Layout>
      <Card
        title="Результат"
        titleClassName={styles.title}
        description={description}
        img="/images/illustration-result.svg"
        imgPosition="top-center"
      >
        <Button tip="Enter ↵" fullWidth onClick={() => {
          reset();
          navigate(pages.welcome);
        }}>
          Попробовать еще
        </Button>
      </Card>
    </Layout>
  );
}

export default Result;
