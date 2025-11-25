"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FaHandHoldingHeart } from "react-icons/fa";
import { MdGroups, MdTipsAndUpdates } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";

const HeroBanner = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const handlePrimary = () => {
    if (session?.user) return router.push("/products");
    signIn();
  };

  const handleSecondary = () => {
    if (session?.user) return router.push("/add");
    router.push("/register");
  };

  const features = [
    {
      title: "Secure System",
      icon: <RiSecurePaymentLine className="text-4xl text-sky-600" />,
      fromColor: "from-sky-200",
      desc: "Safe payments & verified users",
    },
    {
      title: "Best Sellers",
      icon: <MdGroups className="text-4xl text-orange-700" />,
      fromColor: "from-orange-200",
      desc: "Top-selling trending games",
    },
    {
      title: "Latest Games",
      icon: <MdTipsAndUpdates className="text-4xl text-indigo-700" />,
      fromColor: "from-indigo-200",
      desc: "Fresh releases every week",
    },
    {
      title: "24/7 Support",
      icon: <FaHandHoldingHeart className="text-4xl text-green-600" />,
      fromColor: "from-green-200",
      desc: "Instant help anytime",
    },
  ];

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
              className="px-5 py-2 rounded-lg text-lg cursor-pointer shadow-md hover:shadow-lg hover:scale-[1.02] transition font-semibold bg-linear-to-br font-serif from-pink-700 to-cyan-700 text-white hover:to-purple-700"
            >
              {session?.user ? "Browse Games" : "Let's Start"}
            </button>

            <button
              onClick={handleSecondary}
              className="px-5 py-2 rounded-lg text-lg font-semibold cursor-pointer bg-linear-to-br hover:scale-[1.02] from-gray-100 to-white backdrop-blur font-serif border border-gray-300 hover:from-purple-300 hover:shadow-lg transition"
            >
              {session?.user ? "Add Game" : "Register"}
            </button>
          </div>
        </div>

        {/* Right — feature icons */}
        <div className="w-full lg:w-6/12 flex justify-center">
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {features.map((item, i) => (
              <div
                key={i}
                className={`md:p-6 p-2 rounded-2xl bg-linear-to-br ${item.fromColor} via-white to-white shadow-md hover:shadow-xl transition border border-gray-200 flex flex-col items-center text-center rounded-tl-none rounded-br-none`}
              >
                {item.icon}
                <h4 className="font-semibold text-gray-900 mt-2 md:text-lg sm:text-base text-sm">
                  {item.title}
                </h4>
                <p className="sm:text-sm text-xs text-gray-600 mt-1">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroBanner;
