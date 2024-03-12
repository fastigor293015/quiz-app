import useCurrentPage from "@/hooks/use-current-page";
import useQuiz from "@/hooks/use-quiz";
import Logo from "@/components/logo";
import Error from "@/icons/error";
import { pages } from "@/constants";
import styles from "./header.module.css";

const Header = ({
  cancelBtn
}) => {
  const { navigate } = useCurrentPage();
  const { reset } = useQuiz();

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
