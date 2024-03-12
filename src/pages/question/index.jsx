import { useEffect, useMemo, useState } from "react";
import useQuiz from "@/hooks/use-quiz";
import useCurrentPage from "@/hooks/use-current-page";
import Answer from "@/components/answer";
import Card from "@/components/card";
import Layout from "@/components/layout";
import Button from "@/components/button";
import getAnswers from "@/utils/get-answers";
import shuffle from "@/utils/shuffle";
import { pages } from "@/constants";
import data from "@/data/quizz_questions.json";
import useHotKey from "@/hooks/use-hot-key";
import styles from "./question.module.css";

const Question = () => {
  const { navigate } = useCurrentPage();
  const { hint } = useHotKey("Enter", () => onSubmit());
  useHotKey("Backspace", () => onSelect(null));
  const { questionsCount, updateAnswers } = useQuiz();
  const [isLoading, setIsLoading] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);
  const [selected, setSelected] = useState(null);
  const [number, setNumber] = useState(0);
  const [countries, setCountries] = useState(data.countries);
  const quiz = useMemo(() => shuffle(data.questions).slice(0, questionsCount), [questionsCount]);
  const curQuestion = useMemo(() => quiz[number], [quiz, number]);
  const rightAnswer = useMemo(() => curQuestion.correctAnswer, [curQuestion]);
  const answers = useMemo(() => getAnswers(rightAnswer, countries), [rightAnswer, countries]);

  const isLastQuestion = useMemo(() => number + 1 === quiz.length, [number, quiz]);
  const btnText = useMemo(() => !isAnswered ? "Ответить" : isLastQuestion ? "Результат" : "Дальше", [isAnswered, isLastQuestion]);

  useEffect(() => {
    const onKeyDown = (e) => {
      const number = parseInt(e.key);
      if (number >= 1 && number <= answers.length) {
        onSelect(answers[number - 1]);
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isAnswered, answers, isLoading]);

  useEffect(() => {
    console.log(countries);
  }, [countries]);

  const onSelect = (value) => {
    if (isAnswered || isLoading) return;
    setSelected(value);
  }

  const onSubmit = () => {
    if (disabled) {
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      if (isAnswered) {
        updateAnswers(selected === rightAnswer);
        setCountries(prev => prev.filter(item => item !== rightAnswer));
        if (isLastQuestion) {
          navigate(pages.result);
        } else {
          setNumber(prev => prev + 1);
          setSelected(null);
        }
      }
      setIsAnswered(prev => !prev);
    }, 1500);
  }

  const disabled = useMemo(() => !selected || isLoading, [selected, isLoading]);

  return (
    <Layout cancelBtn>
      <Card
        title={<img src={curQuestion.flag} className={styles.img} />}
        description={curQuestion.question}
        textAlign="left"
      >
        <Answer
          answers={answers}
          selected={selected}
          rightAnswer={rightAnswer}
          isAnswered={isAnswered}
          isLoading={isLoading}
          onChange={onSelect}
        />
        <div className={styles.bottom}>
          <Button
            hint={hint}
            disabled={disabled}
            loading={isLoading}
            fullWidth
            onClick={onSubmit}
          >
            {btnText}
          </Button>
          <span className={styles.counter}>
            {number + 1} / {questionsCount}
          </span>
        </div>
      </Card>
    </Layout>
  );
}

export default Question;
