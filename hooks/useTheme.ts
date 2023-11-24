import { useEffect, useState } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState<"dark" | "light">();

  useEffect(() => {
    const currentTheme = window.localStorage.getItem("theme");
    if (
      currentTheme === "light" ||
      (!("theme" in window.localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return theme;
};

export default useTheme;
