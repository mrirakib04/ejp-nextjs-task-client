"use client";
import { RiSecurePaymentLine } from "react-icons/ri";
import { MdGroups, MdTipsAndUpdates } from "react-icons/md";
import { FaHandHoldingHeart } from "react-icons/fa";
// initialize aos
import AOS from "aos";
import { useEffect } from "react";

const OurSupports = () => {
  const supports = [
    {
      icon: <RiSecurePaymentLine className="text-5xl text-sky-700" />,
      title: "Secure System",
      desc: "Your safety is our top priority. GameHub protects every transaction and keeps your data secure.",
      bg: "from-sky-200",
      points: [
        "Encrypted payments",
        "Verified game developers",
        "Fraud protection system",
      ],
    },
    {
      icon: <MdGroups className="text-5xl text-orange-700" />,
      title: "Best Sellers Community",
      desc: "Join thousands of top creators and developers who trust GameHub to sell their games.",
      bg: "from-orange-200",
      points: [
        "Top-rated sellers",
        "Quality-checked games",
        "Fast-growing creator community",
      ],
    },
    {
      icon: <MdTipsAndUpdates className="text-5xl text-indigo-700" />,
      title: "Latest Game Updates",
      desc: "Always stay ahead with new releases, trending titles, and exclusive GameHub updates.",
      bg: "from-indigo-200",
      points: [
        "Weekly new releases",
        "Trending games section",
        "Early access titles",
      ],
    },
    {
      icon: <FaHandHoldingHeart className="text-5xl text-green-600" />,
      title: "24/7 Dedicated Support",
      desc: "Our support team is always available to help you with purchases, selling, or account issues.",
      bg: "from-green-200",
      points: [
        "Instant reply system",
        "Friendly support agents",
        "Help with buying & selling",
      ],
    },
  ];

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="w-full py-16 bg-linear-to-b from-sky-200 via-white to-teal-200">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900">
          Why{" "}
          <span className="bg-linear-to-br from-purple-800 to-cyan-500 bg-clip-text text-transparent font-serif">
            GameHub
          </span>{" "}
          is Trusted?
        </h2>
        <p className="text-center text-gray-600 mt-3 mb-12 text-base sm:text-lg max-w-2xl mx-auto">
          Trusted by industry-leading studios and creators for reliable
          performance.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {supports.map((item, idx) => (
            <div
              key={idx}
              data-aos="zoom-in"
              className={`p-6 rounded-2xl bg-linear-to-br ${item.bg} via-white to-white shadow-md hover:shadow-xl hover:scale-[1.02] transition border border-gray-200 flex flex-col`}
            >
              <div className="flex flex-col items-center text-center">
                {item.icon}
                <h3 className="text-xl font-semibold mt-3 text-gray-900 font-serif">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-sm mt-1">{item.desc}</p>
              </div>

              <ul className="mt-4 space-y-1 text-gray-600 text-sm">
                {item.points.map((p, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-gray-700 rounded-full"></span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurSupports;
