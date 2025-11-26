"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Rating } from "@mui/material";
import Loader from "@/components/Loader/Loader";

const GameDetailsPage = ({ id }) => {
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchGame = async () => {
      try {
        const res = await fetch(
          `https://mrirakib-ejp-nextjs-task-server.vercel.app/games/details?id=${id}`
        );
        const data = await res.json();
        setGame(data);
      } catch (error) {
        console.error("Failed to fetch game", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGame();
  }, [id]);

  if (loading) return <Loader />;

  if (!game)
    return <p className="text-center text-red-500 mt-10">Game not found</p>;

  return (
    <section className="w-full py-16 md:py-20 px-5 max-w-5xl mx-auto">
      <Button
        variant="contained"
        className="mb-5! font-semibold! px-5!"
        onClick={() => router.back()}
      >
        Back
      </Button>

      <div className="flex flex-col md:flex-row gap-8 bg-linear-to-br from-purple-100 via-white to-cyan-100 p-6 rounded-xl shadow-lg">
        {/* Game Image */}
        <div className="md:w-1/2 w-full">
          <img
            src={game.coverImage}
            alt={game.title}
            className="w-full h-auto rounded-lg object-cover shadow-md"
          />
        </div>

        {/* Game Details */}
        <div className="md:w-1/2 w-full flex flex-col gap-4">
          <h1 className="md:text-3xl lg:text-4xl sm:text-2xl text-xl font-bold bg-linear-to-r from-green-600 to-purple-600 bg-clip-text text-transparent">
            {game.title}
          </h1>

          <p className="text-gray-700 text-base md:text-lg">
            {game.description}
          </p>

          <div className="flex flex-col gap-2 mt-4">
            <p className="text-gray-900 font-semibold">Price: ${game.price}</p>
            <p className="text-gray-600">
              Uploaded On: {new Date(game.createdAt).toLocaleDateString()}
            </p>
            {game.genre && (
              <p className="text-gray-600 font-semibold">Genre: {game.genre}</p>
            )}
            {game.rating && (
              <div className="flex items-center gap-2">
                <Rating
                  value={Number(game.rating)}
                  precision={0.5}
                  readOnly
                  size="medium"
                />
                <span className="text-gray-600 text-sm">({game.rating})</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameDetailsPage;
