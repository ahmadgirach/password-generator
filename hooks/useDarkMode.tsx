import { useEffect, useState } from "react";

export const useDarkMode = () => {
  const windowAvailable = typeof window !== "undefined";

  const localTheme = windowAvailable ? localStorage.theme : "light";
  const [theme, setTheme] = useState(localTheme);
  const reverseTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(reverseTheme);
    root.classList.add(theme);

    if (windowAvailable) {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  return [theme, setTheme] as const;
};
