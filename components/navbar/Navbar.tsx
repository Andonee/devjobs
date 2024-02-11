import React from "react";
import { Logo } from "./logo";
import ThemeSwitcher from "@/components/theme/ThemeSwitcher";
import { Navigation } from "./navigation";

type NavbarProps = {
  children?: React.ReactNode;
};

export const Navbar = (props: NavbarProps) => {
  const { children } = props;
  return (
    <div className="relative mb-20">
      <nav className="flex h-[160px] w-full justify-center bg-transparent bg-[url('/images/navbar.svg')] bg-cover bg-center bg-no-repeat">
        <div className="mt-10 flex  h-10 w-[80%] flex-wrap content-center justify-between">
          <span className="flex items-center gap-6">
            <Logo />
            <Navigation />
          </span>

          <ThemeSwitcher />
        </div>
      </nav>
      <div className="absolute left-0 right-0 top-[75%] m-auto w-[80%]">
        {children}
      </div>
    </div>
  );
};
