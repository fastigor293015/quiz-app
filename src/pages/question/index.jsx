import { useContext, useEffect, useMemo, useState } from "react";
import Answer from "@/components/answer";
import Card from "@/components/card";
import Layout from "@/components/layout";
import Button from "@/components/button";
import { CurrentPageContext } from "@/providers/current-page";
import { QuizContext } from "@/providers/quiz";
import getAnswers from "@/utils/get-answers";
import shuffle from "@/utils/shuffle";
import { pages } from "@/constants";
import data from "@/data/quizz_questions.json";
import styles from "./question.module.css";

const Question = () => {
  const { navigate } = useContext(CurrentPageContext);
  const { questionsCount, updateAnswers } = useContext(QuizContext);
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
    console.log(countries);
  }, [countries]);

  const onSelect = (value) => {
    setSelected(value);
  }

  const onSubmit = () => {
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
  }

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
          isAnswered={isAnswered}
          rightAnswer={rightAnswer}
          onChange={onSelect}
        />
        <div className={styles.bottom}>
          <Button
            tip="Enter ↵"
            disabled={!selected}
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
