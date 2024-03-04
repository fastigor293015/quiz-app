import { createContext, useState } from "react";

export const QuizContext = createContext({
  questionsCount: 18,
  setQuestionsCount: () => { },
  rightAnswers: 0,
  wrongAnswers: 0,
  reset: () => { },
  updateAnswers: () => { }
});

export const QuizProvider = ({ children }) => {
  const [questionsCount, setQuestionsCount] = useState(18);
  const [rightAnswers, setRightAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);

  const reset = () => {
    setRightAnswers(0);
    setWrongAnswers(0);
  }

  const updateAnswers = (isRight) => {
    isRight ? setRightAnswers(prev => prev + 1) : setWrongAnswers(prev => prev + 1);
  }

  return (
    <QuizContext.Provider value={{
      questionsCount,
      setQuestionsCount,
      rightAnswers,
      wrongAnswers,
      reset,
      updateAnswers
    }}>
      {children}
    </QuizContext.Provider>
  )
}
