"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import Link from "next/link";
import Loader from "@/components/Loader/Loader";
import { MdNearbyError } from "react-icons/md";

const LatestGames = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init();

    const fetchLatest = async () => {
      try {
        const res = await fetch(
          "https://mrirakib-ejp-nextjs-task-server.vercel.app/latest/games"
        );
        const data = await res.json();
        setGames(data);
      } catch (error) {
        console.error("Failed to fetch latest games", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLatest();
  }, []);

  return (
    <section className="w-full py-16 bg-linear-to-b from-sky-200 via-white to-orange-100">
      <div className="max-w-[1200px] mx-auto px-5 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Latest{" "}
          <span className="bg-linear-to-br from-purple-800 to-cyan-500 bg-clip-text text-transparent font-serif">
            Games
          </span>
        </h2>

        <p className="text-center text-gray-600 mt-2 mb-10 text-base sm:text-lg max-w-2xl mx-auto">
          Explore newly added and trending games uploaded by creators.
        </p>

        {/* Games Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            <div className="md:col-span-3 sm:col-span-2 text-center">
              <Loader></Loader>
            </div>
          ) : games.length === 0 ? (
            <div className="text-center md:col-span-3 sm:col-span-2 text-orange-500 font-medium flex flex-col items-center gap-3">
              <MdNearbyError className="text-4xl" />
              <p>No games found!</p>
            </div>
          ) : (
            games.map((game) => (
              <div
                key={game._id}
                data-aos="zoom-in"
                className="rounded-xl border bg-linear-to-br from-purple-200 via-white to-sky-200 overflow-hidden shadow-md hover:shadow-lg transition hover:scale-[1.02]"
              >
                <img
                  src={game.coverImage}
                  alt={game.title}
                  className="w-full h-40 object-cover"
                />

                <div className="p-4 flex flex-col gap-2">
                  <h3 className="font-semibold text-lg">{game.title}</h3>

                  <p className="text-sm text-gray-700 line-clamp-2">
                    {game.description}
                  </p>

                  <p className="font-semibold text-gray-900 mt-1">
                    Price: ${game.price}
                  </p>

                  <Link
                    href={`/game/${game._id}`}
                    className="mt-3 w-full bg-teal-600 text-white font-semibold text-center py-2 rounded-md hover:bg-teal-500 transition"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default LatestGames;
