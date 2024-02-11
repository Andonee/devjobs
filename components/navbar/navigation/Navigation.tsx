"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const pages = [
  {
    url: "/create",
    label: "create",
  },
];

export const Navigation = () => {
  const currentPath = usePathname();
  return (
    <nav className="uppercase text-snowy">
      {pages.map((page, idx) => (
        <Link
          key={`${page.label}_${idx}`}
          href={page.url}
          className={`${
            currentPath === page.url ? "underline underline-offset-4" : ""
          }`}
        >
          {page.label}
        </Link>
      ))}
    </nav>
  );
};
