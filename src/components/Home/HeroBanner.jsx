"use client";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import gamehub from "@/images/gamehub.jpeg";

const HeroBanner = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const handlePrimary = () => {
    if (session?.user) return router.push("/games");
    signIn();
  };

  const handleSecondary = () => {
    if (session?.user) return router.push("/add");
    router.push("/register");
  };

  return (
    <header className="w-full py-16 md:py-24 bg-linear-to-b from-indigo-200 via-white to-sky-200 text-gray-900 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 flex flex-col lg:flex-row items-center gap-10">
        {/* Left */}
        <div className="w-full lg:w-6/12 text-center lg:text-left">
          <h1 className="text-2xl xl:text-5xl lg:text-4xl sm:text-3xl font-bold leading-tight">
            <span className="bg-linear-to-br from-purple-800 to-cyan-500 bg-clip-text text-transparent font-extrabold font-serif">
              GameHub
            </span>
            <span className="text-gray-800">
              {" "}
              - Buy & Sell Games Seamlessly
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl">
            Find the best games deals, sell your developed games, and join a
            trusted games store.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 justify-center lg:justify-start">
            <button
              onClick={handlePrimary}
              className="px-5 py-2 rounded-lg text-lg cursor-pointer shadow-md hover:shadow-lg hover:scale-[1.02] transition font-semibold bg-linear-to-br font-serif from-pink-700 to-sky-700 rounded-br-none text-white hover:to-black"
            >
              {session?.user ? "Browse Games" : "Let's Start"}
            </button>

            <button
              onClick={handleSecondary}
              className="px-5 py-2 rounded-lg text-lg cursor-pointer shadow-md hover:shadow-lg hover:scale-[1.02] transition font-semibold bg-linear-to-br font-serif from-sky-700 to-black rounded-tl-none text-white hover:to-purple-700"
            >
              {session?.user ? "Add Game" : "Register"}
            </button>
          </div>
        </div>

        {/* Right — feature icons */}
        <div className="w-full lg:w-6/12 flex justify-center">
          <Image
            className="w-full rounded-xl max-w-2xl mx-auto object-cover"
            src={gamehub}
            alt="logo"
          />
        </div>
      </div>
    </header>
  );
};

export default HeroBanner;
