"use client";
import Link from "next/link";
import { FiLogIn } from "react-icons/fi";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { ClickAwayListener } from "@mui/material";
import { signOut, useSession } from "next-auth/react";
import { toast } from "react-toastify";
import logo from "@/images/mrir_with_bg.jpg";
import Image from "next/image";

const Navbar = () => {
  const path = usePathname();
  const [navShow, setNavShow] = useState(false);
  const navShowHide = () => setNavShow((prev) => !prev);
  const [showProfile, setShowProfile] = useState(false);
  const profileShowHide = () => setShowProfile((prev) => !prev);

  const { data: session, status } = useSession();
  console.log("user:", session, status);

  const handleLogout = async () => {
    await signOut();
    toast.success(`Logout Successful`, {
      position: "top-center",
      autoClose: 2000,
      closeButton: true,
      pauseOnHover: true,
      draggable: true,
    });
  };
  return (
    <nav className="flex items-center justify-between gap-5 py-5 max-w-[1480px] mx-auto bg-white/90 w-full px-5 shadow-md fixed z-50">
      <div className="relative text-xl flex gap-3 font-bold items-center">
        <ClickAwayListener
          onClickAway={() => {
            setNavShow(false);
          }}
        >
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
                        ? "hover:text-purple-700 duration-300 text-sky-800 transition px-3 py-1 rounded-md shadow-md hover:shadow-lg bg-linear-to-t from-purple-200 to-white hover:from-purple-200 hover:to-orange-100"
                        : "hover:text-purple-700 duration-300 transition px-3 py-1 rounded-md shadow-md hover:shadow-lg bg-linear-to-t from-white to-white hover:from-purple-200 hover:to-orange-100"
                    }
                    href={"/"}
                  >
                    Home
                  </Link>
                  <Link
                    className={
                      path === "/games"
                        ? "hover:text-purple-700 duration-300 text-sky-800 transition px-3 py-1 rounded-md shadow-md hover:shadow-lg bg-linear-to-t from-purple-200 to-white hover:from-purple-200 hover:to-orange-100"
                        : "hover:text-purple-700 duration-300 transition px-3 py-1 rounded-md shadow-md hover:shadow-lg bg-linear-to-t from-white to-white hover:from-purple-200 hover:to-orange-100"
                    }
                    href={"/games"}
                  >
                    Games
                  </Link>
                  {session?.user && (
                    <>
                      <Link
                        className={
                          path === "/add"
                            ? "hover:text-purple-700 duration-300 text-sky-800 transition px-3 py-1 rounded-md shadow-md hover:shadow-lg bg-linear-to-t from-purple-200 to-white hover:from-purple-200 hover:to-orange-100"
                            : "hover:text-purple-700 duration-300 transition px-3 py-1 rounded-md shadow-md hover:shadow-lg bg-linear-to-t from-white to-white hover:from-purple-200 hover:to-orange-100"
                        }
                        href={"/add"}
                      >
                        Add Game
                      </Link>
                      <Link
                        className={
                          path === "/manage"
                            ? "hover:text-purple-700 duration-300 text-sky-800 transition px-3 py-1 rounded-md shadow-md hover:shadow-lg bg-linear-to-t from-purple-200 to-white hover:from-purple-200 hover:to-orange-100"
                            : "hover:text-purple-700 duration-300 transition px-3 py-1 rounded-md shadow-md hover:shadow-lg bg-linear-to-t from-white to-white hover:from-purple-200 hover:to-orange-100"
                        }
                        href={"/manage"}
                      >
                        My Games
                      </Link>
                    </>
                  )}
                </ul>
              </div>
            )}
          </div>
        </ClickAwayListener>
        <Link
          className="duration-300 transition hover:scale-105 flex items-center gap-2 group"
          href={"/"}
        >
          <Image
            className="sm:w-10 w-8 border-b-2 border-l-2 border-black rounded-tl-lg rounded-br-lg group-hover:border-purple-700 duration-300 group-hover:scale-105"
            src={logo}
            alt="logo"
          />
          <h1 className="sm:block hidden text-xl font-bold bg-linear-to-br from-purple-800 to-cyan-500 bg-clip-text text-transparent group-hover:from-purple-600 hover:to-cyan-400 ">
            GameHub
          </h1>
        </Link>
      </div>
      <ul className="lg:flex hidden items-center gap-3 text-lg font-medium text-black">
        <Link
          className={
            path === "/"
              ? "hover:text-purple-700 duration-300 text-sky-800 transition px-3 py-1 rounded-md shadow-md hover:shadow-lg bg-linear-to-t from-purple-200 to-white hover:from-purple-200 hover:to-orange-100"
              : "hover:text-purple-700 duration-300 transition px-3 py-1 rounded-md shadow-md hover:shadow-lg bg-linear-to-t from-white to-white hover:from-purple-200 hover:to-orange-100"
          }
          href={"/"}
        >
          Home
        </Link>
        <Link
          className={
            path === "/games"
              ? "hover:text-purple-700 duration-300 text-sky-800 transition px-3 py-1 rounded-md shadow-md hover:shadow-lg bg-linear-to-t from-purple-200 to-white hover:from-purple-200 hover:to-orange-100"
              : "hover:text-purple-700 duration-300 transition px-3 py-1 rounded-md shadow-md hover:shadow-lg bg-linear-to-t from-white to-white hover:from-purple-200 hover:to-orange-100"
          }
          href={"/games"}
        >
          Games
        </Link>
        {session?.user && (
          <>
            <Link
              className={
                path === "/add"
                  ? "hover:text-purple-700 duration-300 text-sky-800 transition px-3 py-1 rounded-md shadow-md hover:shadow-lg bg-linear-to-t from-purple-200 to-white hover:from-purple-200 hover:to-orange-100"
                  : "hover:text-purple-700 duration-300 transition px-3 py-1 rounded-md shadow-md hover:shadow-lg bg-linear-to-t from-white to-white hover:from-purple-200 hover:to-orange-100"
              }
              href={"/add"}
            >
              Add Game
            </Link>
            <Link
              className={
                path === "/manage"
                  ? "hover:text-purple-700 duration-300 text-sky-800 transition px-3 py-1 rounded-md shadow-md hover:shadow-lg bg-linear-to-t from-purple-200 to-white hover:from-purple-200 hover:to-orange-100"
                  : "hover:text-purple-700 duration-300 transition px-3 py-1 rounded-md shadow-md hover:shadow-lg bg-linear-to-t from-white to-white hover:from-purple-200 hover:to-orange-100"
              }
              href={"/manage"}
            >
              My Games
            </Link>
          </>
        )}
      </ul>

      {session?.user ? (
        <ClickAwayListener
          onClickAway={() => {
            setShowProfile(false);
          }}
        >
          <div className="relative">
            <button onClick={profileShowHide}>
              <img
                className="h-12 w-12 object-cover rounded-full border-2 border-green-700 cursor-pointer hover:scale-105 duration-300 transition"
                src={session?.user.image}
                alt="User-Photo"
              />
            </button>
            {showProfile && (
              <div className="absolute top-16 right-2 flex flex-col gap-2 py-5 px-3 bg-gray-50 rounded-lg border-2">
                <h3 className="text-lg text-green-700 font-bold">
                  {session?.user.name}
                </h3>
                <p className="text-lg text-gray-600 font-medium">
                  {session?.user.email}
                </p>
                <div>
                  <Link
                    className="text-xl font-semibold hover:text-gray-600 duration-300 hover:scale-105 transition"
                    href="/profile"
                  >
                    Profile
                  </Link>
                </div>
                <div>
                  <button
                    onClick={handleLogout}
                    className="mt-3 text-xl text-left font-bold text-red-600 cursor-pointer hover:text-red-800 duration-300 transition hover:scale-105"
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </ClickAwayListener>
      ) : (
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
      )}
    </nav>
  );
};

export default Navbar;
