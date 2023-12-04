import React from "react";
import { Logo } from "./logo";
import ThemeSwitcher from "@/components/theme/ThemeSwitcher";

export const Navbar = () => {
  return (
    <nav className="flex h-[160px] w-full justify-center bg-transparent bg-[url('/images/navbar.svg')] bg-cover bg-center bg-no-repeat">
      <div className="mt-10 flex  h-10 w-[80%] flex-wrap content-center justify-between">
        <Logo />
        <ThemeSwitcher />
      </div>
    </nav>
  );
};
