import shuffle from "./shuffle";

const getAnswers = (correctAnswer, countries) => {
  // Удаляем правильный ответ из массива стран
  const incorrectAnswers = [...countries];
  incorrectAnswers.splice(incorrectAnswers.findIndex(item => item === correctAnswer), 1);
  const answersList = [];

  for (let i = 0; i < 3; i++) {
    const index = Math.round(Math.random() * (incorrectAnswers.length - 1));
    answersList.push(incorrectAnswers.splice(index, 1));
  }

  answersList.push(correctAnswer);

  return shuffle(answersList);
}

export default getAnswers;
