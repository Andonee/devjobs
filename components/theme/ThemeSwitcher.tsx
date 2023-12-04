"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Switch } from "@/components";

const ThemeSwitcher = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  const onThemeChangeHandler = () => {
    return resolvedTheme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <Switch
      name="theme"
      onClick={onThemeChangeHandler}
      isChecked={resolvedTheme === "dark"}
    />
  );
};

export default ThemeSwitcher;
