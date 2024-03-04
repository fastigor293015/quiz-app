import { useContext, useMemo, useState } from "react";
import Button from "@/components/button";
import Counter from "@/components/counter";
import Layout from "@/components/layout";
import Card from "@/components/card";
import { CurrentPageContext } from "@/providers/current-page";
import data from "@/data/quizz_questions.json";
import { pages } from "@/constants";
import { QuizContext } from "@/providers/quiz";
// import styles from "./welcome.module.css";

const Welcome = () => {
  const { navigate } = useContext(CurrentPageContext);
  const { questionsCount: initialQuestionsCount, setQuestionsCount: setCount } = useContext(QuizContext);
  const [questionsCount, setQuestionsCount] = useState(initialQuestionsCount);
  const min = 1;
  const max = data.questions.length;

  const onChange = (value) => {
    setQuestionsCount(value);
  }

  const onSubmit = () => {
    navigate(pages.question);
    setCount(questionsCount);
  }

  const isInvalid = useMemo(() => questionsCount < min || questionsCount > max, [questionsCount, min, max]);

  return (
    <Layout>
      <Card
        title="Добро пожаловать"
        description="на викторину по странам и столицам!"
        img="/images/illustration-question.svg"
      >
        <Counter
          value={questionsCount}
          min={min}
          max={max}
          onChange={onChange}
          description="Выбери количество вопросов:"
        />
        <Button
          tip="Enter ↵"
          fullWidth
          disabled={isInvalid}
          onClick={onSubmit}
        >
          Начать
        </Button>
      </Card>
    </Layout>
  );
}

export default Welcome;
