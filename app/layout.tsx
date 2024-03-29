import type { Metadata } from "next";
import { Kumbh_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components";
import Provider from "@/components/theme/Provider";
import { FilterPanel } from "@/features/FilterPanel";

const kumbhSans = Kumbh_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dev Jobs",
  description: "Here you can find your future job!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${kumbhSans.className} flex flex-col bg-lightGrey dark:bg-midnight`}
      >
        <Provider>
          <header>
            <Navbar>
              <FilterPanel />
            </Navbar>
          </header>
        </Provider>
        <div className="mx-auto w-[80%] flex-1 pb-10">{children}</div>
      </body>
    </html>
  );
}
