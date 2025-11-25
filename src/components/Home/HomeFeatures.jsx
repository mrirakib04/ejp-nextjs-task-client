"use client";
import { FaGamepad, FaShoppingCart } from "react-icons/fa";
import { MdSecurity, MdReviews } from "react-icons/md";
// initialize aos
import AOS from "aos";
import { useEffect } from "react";

const HomeFeatures = () => {
  const data = [
    {
      title: "Top Rated Games",
      subtitle: "Discover trending and highly rated games verified by players.",
      icon: <FaGamepad className="text-4xl text-purple-600" />,
      fromColor: "from-purple-200",
    },
    {
      title: "Secure Transactions",
      subtitle: "Every purchase is safe with enhanced payment protection.",
      icon: <MdSecurity className="text-4xl text-blue-600" />,
      fromColor: "from-blue-200",
    },
    {
      title: "Easy Buying & Selling",
      subtitle: "Post your games and buy instantly with smooth checkout.",
      icon: <FaShoppingCart className="text-4xl text-green-600" />,
      fromColor: "from-green-200",
    },
    {
      title: "Real User Reviews",
      subtitle: "Read honest feedback before buying any game.",
      icon: <MdReviews className="text-4xl text-orange-600" />,
      fromColor: "from-orange-200",
    },
  ];

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="w-full py-16 bg-linear-to-b from-orange-100 via-white to-purple-200">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Why With{" "}
          <span className="bg-linear-to-br from-purple-800 to-cyan-500 bg-clip-text text-transparent font-serif">
            GameHub
          </span>
          ?
        </h2>
        <p className="text-center text-gray-600 mt-2 mb-10 text-base sm:text-lg max-w-2xl mx-auto">
          A trusted game publishing platform to buy, sell, and discover the best
          games.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((item, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              className={`p-6 rounded-xl border bg-linear-to-br ${item.fromColor} rounded-tl-none shadow-gray-400 via-white to-white hover:shadow-lg transition hover:scale-[1.02]`}
            >
              <div className="flex flex-col items-center text-center gap-3">
                {item.icon}
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeFeatures;
