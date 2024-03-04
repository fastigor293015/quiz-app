import { createContext, useState } from "react";
import { pages } from "@/constants";

export const CurrentPageContext = createContext({
  curPage: pages.welcome,
  navigate: () => { }
});

export const CurrentPageProvider = ({ children }) => {
  const [curPage, setCurPage] = useState(pages.welcome);

  const navigate = (pathname) => {
    setCurPage(pathname);
  }

  return (
    <CurrentPageContext.Provider value={{
      curPage,
      navigate
    }}>
      {children}
    </CurrentPageContext.Provider>
  )
}
