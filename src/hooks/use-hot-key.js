import { useEffect } from "react";

const useHotKey = (key, callback) => {
  const keys = {
    "Enter": "Enter ↵",
  }

  const hint = (keys[key]);

  useEffect(() => {
    const onKeyDown = (e) => {
      console.log(e.key);
      if (e.key === key) callback();
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [callback, hint, key]);

  return { hint };
}

export default useHotKey;
