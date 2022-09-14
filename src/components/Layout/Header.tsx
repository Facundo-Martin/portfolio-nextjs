import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import ThemeChanger from "./ThemeChanger";

const navMenu = ["Home", "Tools", "Courses", "About"];
function Header() {
  const router = useRouter();
  return (
    <div className="global-style">
      <div className="wrapper flex items-center justify-between py-10">
        <ThemeChanger />
        <div className="flex items-center gap-x-2">
          {navMenu.map((navItem) => {
            const navLink =
              navItem == "Home" ? "/" : `/${navItem.toLowerCase()}`;
            const isCurrentPage = router.asPath == navLink;
            return (
              <Link href={navLink}>
                <a
                  className={`cursor-pointer rounded-lg px-4 py-2 text-sm transition-colors delay-150 hover:bg-slate-100 hover:delay-[0ms] ${
                    isCurrentPage && " font-bold"
                  }`}
                >
                  {navItem}
                </a>
              </Link>
            );
          })}
        </div>
        <div>user </div>
      </div>
    </div>
  );
}

export default Header;
