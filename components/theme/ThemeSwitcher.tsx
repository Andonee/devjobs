"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { Switch } from "@/components";
import moon from "@/public/icons/moon.svg";
import sun from "@/public/icons/sun.svg";

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
    <div className="flex gap-4">
      <Image src={sun} alt="light theme" />
      <Switch
        name="theme"
        onClick={onThemeChangeHandler}
        isChecked={resolvedTheme === "dark"}
      />
      <Image src={moon} alt="dark theme" />
    </div>
  );
};

export default ThemeSwitcher;
