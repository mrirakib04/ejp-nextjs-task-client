"use client";
import Link from "next/link";
import { FiLogIn } from "react-icons/fi";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { ClickAwayListener } from "@mui/material";

const Navbar = () => {
  const path = usePathname();
  const [navShow, setNavShow] = useState(false);
  const navShowHide = () => setNavShow((prev) => !prev);
  const [showProfile, setShowProfile] = useState(false);
  const profileShowHide = () => setShowProfile((prev) => !prev);
  return (
    <ClickAwayListener
      onClickAway={() => {
        setShowProfile(false);
        setNavShow(false);
      }}
    >
      <nav className="flex items-center justify-between gap-5 py-5 max-w-[1480px] mx-auto bg-white/90 w-full px-5 shadow-md fixed z-50">
        <div className="relative text-xl flex gap-3 font-bold items-center">
          <div className="flex">
            <button className="lg:hidden text-2xl" onClick={navShowHide}>
              <RiMenu2Fill></RiMenu2Fill>
            </button>
            {navShow && (
              <div className="absolute lg:hidden border-2 text-base rounded-lg top-14 font-bold bg-gray-100 text-gray-700 p-4">
                <ul className="flex flex-col gap-3 text-nowrap">
                  <Link
                    className={
                      path === "/"
                        ? "hover:text-purple-700 duration-300 text-sky-800 transition px-3 py-1 rounded-md shadow-md hover:shadow-lg bg-linear-to-br from-purple-300 to-white hover:from-purple-300 hover:to-cyan-100"
                        : "hover:text-purple-700 duration-300 transition px-3 py-1 rounded-md shadow-md hover:shadow-lg bg-linear-to-br from-white to-white hover:from-purple-300 hover:to-cyan-100"
                    }
                    href={"/"}
                  >
                    Home
                  </Link>
                  <Link
                    className={
                      path === "/games"
                        ? "hover:text-purple-700 duration-300 text-sky-800 transition px-3 py-1 rounded-md shadow-md hover:shadow-lg bg-linear-to-br from-purple-300 to-white hover:from-purple-300 hover:to-cyan-100"
                        : "hover:text-purple-700 duration-300 transition px-3 py-1 rounded-md shadow-md hover:shadow-lg bg-linear-to-br from-white to-white hover:from-purple-300 hover:to-cyan-100"
                    }
                    href={"/games"}
                  >
                    Games
                  </Link>
                </ul>
              </div>
            )}
          </div>
          <Link
            className="text-xl font-bold bg-linear-to-br from-purple-800 to-cyan-500 bg-clip-text text-transparent hover:from-purple-600 hover:to-cyan-400 duration-300 transition hover:scale-105"
            href={"/"}
          >
            GameHub
          </Link>
        </div>
        <ul className="lg:flex hidden items-center gap-3 text-lg font-medium text-black">
          <Link
            className={
              path === "/"
                ? "hover:text-purple-700 duration-300 text-sky-800 transition px-3 py-1 rounded-md shadow-md hover:shadow-lg bg-linear-to-br from-purple-300 to-white hover:from-purple-300 hover:to-cyan-100"
                : "hover:text-purple-700 duration-300 transition px-3 py-1 rounded-md shadow-md hover:shadow-lg bg-linear-to-br from-white to-white hover:from-purple-300 hover:to-cyan-100"
            }
            href={"/"}
          >
            Home
          </Link>
          <Link
            className={
              path === "/games"
                ? "hover:text-purple-700 duration-300 text-sky-800 transition px-3 py-1 rounded-md shadow-md hover:shadow-lg bg-linear-to-br from-purple-300 to-white hover:from-purple-300 hover:to-cyan-100"
                : "hover:text-purple-700 duration-300 transition px-3 py-1 rounded-md shadow-md hover:shadow-lg bg-linear-to-br from-white to-white hover:from-purple-300 hover:to-cyan-100"
            }
            href={"/games"}
          >
            Games
          </Link>
        </ul>
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className={
              path === "/login"
                ? "flex gap-2 items-center sm:px-3 p-1 bg-linear-to-br from-purple-700 to-cyan-800 hover:shadow-md transition shadow-gray-400 text-white rounded-full text-2xl border border-gray-500"
                : "flex gap-2 items-center sm:px-3 p-1 bg-linear-to-br from-purple-700 to-cyan-500 hover:shadow-md transition shadow-gray-400 text-white rounded-full text-2xl border border-gray-500"
            }
          >
            <p className="text-lg font-medium sm:block hidden">Login</p>
            <FiLogIn></FiLogIn>
          </Link>
          <Link
            href="/register"
            className={
              path === "/register"
                ? "flex gap-2 items-center sm:px-3 p-1 bg-linear-to-br from-purple-700 to-cyan-800 hover:shadow-md transition shadow-gray-400 text-white rounded-full text-2xl border border-gray-500"
                : "flex gap-2 items-center sm:px-3 p-1 bg-linear-to-br from-purple-700 to-cyan-500 hover:shadow-md transition shadow-gray-400 text-white rounded-full text-2xl border border-gray-500"
            }
          >
            <p className="text-lg font-medium sm:block hidden">Register</p>
            <FaArrowAltCircleUp></FaArrowAltCircleUp>
          </Link>
        </div>
      </nav>
    </ClickAwayListener>
  );
};

export default Navbar;
