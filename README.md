## QuizApp

# igorschetinkin

Task 1:

Приложение имеет следующие роуты:
  - /welcome
  - /question
  - /result?type=right
  - /result?type=wrong
  - /result?type=not-answered
На все, кроме последнего, можно попасть, используя интерфейс. Если на странице с вопросом ответить "Камерун", то попадёте на /result?type=right, а если выбрать любой другой ответ, то на /result?type=wrong

Debug 1:
поправил padding у компонента Answer (в макете указывалось значение border + padding)

Task 2:
Убрал из приложения react-router-dom, заменил его на контекстное состояние. Логика переключения между страницами осталась прежней.

Debug 2:
Сделал так, чтобы первый вопрос был СЛУЧАЙНО выбран из списка.
Также доработал компонент Counter, чтобы он производил валидацию значения после потери фокуса.

Task 3:
Для упрощения проверки работы сделал вывод списка всех стран в консоль через useEffect после каждого отвеченного вопроса (на случай если у кого-то из ревьюеров не поставлено расширение React DevTools).

Debug 3:
Добавил функцию-утилиту для склонения существительных в зависимости от их числа (необходимо для страницы с результатом).
