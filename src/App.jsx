import { useContext } from "react";
import Welcome from "./pages/welcome";
import Question from "./pages/question";
import Result from "./pages/result";
import { CurrentPageContext } from "./providers/current-page";
import { pages } from "./constants";

function App() {
  const { curPage } = useContext(CurrentPageContext);

  return (
    <>
      {curPage === pages.welcome ? (
        <Welcome />
      ) : curPage === pages.question ? (
        <Question />
      ) : (
        <Result />
      )}
    </>
  )
}

export default App;
