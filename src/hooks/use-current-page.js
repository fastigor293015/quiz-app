import { useContext } from "react";
import { CurrentPageContext } from "@/providers/current-page";

const useCurrentPage = () => {
  return useContext(CurrentPageContext);
}

export default useCurrentPage;
