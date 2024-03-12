import { useMemo, useState } from "react";
import useCurrentPage from "@/hooks/use-current-page";
import useQuiz from "@/hooks/use-quiz";
import useHotKey from "@/hooks/use-hot-key";
import Button from "@/components/button";
import Counter from "@/components/counter";
import Layout from "@/components/layout";
import Card from "@/components/card";
import data from "@/data/quizz_questions.json";
import { pages } from "@/constants";
// import styles from "./welcome.module.css";

const Welcome = () => {
  const { navigate } = useCurrentPage();
  const { questionsCount: initialQuestionsCount, setQuestionsCount: setCount } = useQuiz();
  const [questionsCount, setQuestionsCount] = useState(initialQuestionsCount);
  const [isLoading, setIsLoading] = useState(false);
  const { hint } = useHotKey("Enter", () => onSubmit());
  const min = 1;
  const max = data.questions.length;

  const onChange = (value) => {
    setQuestionsCount(value);
  }

  const onSubmit = () => {
    if (disabled) {
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate(pages.question);
      setCount(questionsCount);
    }, 1500);
  }

  const isInvalid = useMemo(() => questionsCount < min || questionsCount > max, [questionsCount, min, max]);
  const disabled = useMemo(() => isInvalid || isLoading, [isInvalid, isLoading]);

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
          hint={hint}
          fullWidth
          loading={isLoading}
          disabled={disabled}
          onClick={onSubmit}
        >
          Начать
        </Button>
      </Card>
    </Layout>
  );
}

export default Welcome;
