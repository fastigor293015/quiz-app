import Logo from "@/components/logo";
import Error from "@/icons/error";
import styles from "./header.module.css";
import { useContext } from "react";
import { CurrentPageContext } from "@/providers/current-page";
import { pages } from "@/constants";
import { QuizContext } from "@/providers/quiz";

const Header = ({
  cancelBtn
}) => {
  const { navigate } = useContext(CurrentPageContext);
  const { reset } = useContext(QuizContext);

  return (
    <header className={styles.header}>
      <Logo className={styles.logo} />
      {cancelBtn && (
        <button className={styles.cancelBtn} onClick={() => {
          reset();
          navigate(pages.welcome);
        }}>
          <Error />
        </button>
      )}
    </header>
  );
}

export default Header;
