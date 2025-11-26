"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
  Rating,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Button,
} from "@mui/material";
import Loader from "@/components/Loader/Loader";
import AOS from "aos";
import { MdNearbyError } from "react-icons/md";

const GamesPage = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("");

  const router = useRouter();
  const { data: session } = useSession();

  // Fetch all games
  useEffect(() => {
    const fetchGames = async () => {
      try {
        const res = await fetch(
          `https://mrirakib-ejp-nextjs-task-server.vercel.app/games`
        );
        const data = await res.json();
        setGames(data);
      } catch (error) {
        console.error("Failed to fetch games", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  // Filter based on Search + Genre
  const filteredGames = games.filter(
    (game) =>
      game.title.toLowerCase().includes(search.toLowerCase()) &&
      (genre ? game.genre === genre : true)
  );

  return (
    <section className="w-full py-16 md:py-20 bg-linear-to-br from-green-100 via-white to-sky-100">
      <div className="px-5 max-w-[1200px] mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center bg-linear-to-b from-emerald-600 to-red-600 bg-clip-text text-transparent">
          All Games
        </h2>
        <p className="text-center text-gray-700 mt-1 mb-10 text-base sm:text-lg max-w-2xl mx-auto">
          Browse all available games on GameHub.
        </p>

        {/* Search + Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10 md:justify-between justify-center items-center max-w-5xl mx-auto w-full">
          <TextField
            label="Search Games"
            variant="filled"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full lg:w-1/4 md:w-1/3 sm:w-1/2"
          />
          <FormControl className="w-full lg:w-1/4 md:w-1/3 sm:w-1/2">
            <InputLabel>Genre</InputLabel>
            <Select
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              label="Genre"
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="Action">Action</MenuItem>
              <MenuItem value="Adventure">Adventure</MenuItem>
              <MenuItem value="Racing">Racing</MenuItem>
              <MenuItem value="Strategy">Strategy</MenuItem>
              <MenuItem value="FPS">FPS</MenuItem>
              <MenuItem value="Sports">Sports</MenuItem>
            </Select>
          </FormControl>
        </div>

        {/* Games Grid */}
        {loading ? (
          <Loader />
        ) : filteredGames.length === 0 ? (
          <div className="text-center text-orange-500 font-medium flex flex-col items-center gap-3">
            <MdNearbyError className="text-4xl" />
            <p>No games found!</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 max-w-5xl mx-auto">
            {filteredGames.map((game) => (
              <div
                data-aos="zoom-in"
                key={game._id}
                className="shadow hover:shadow-lg hover:scale-[1.02] transition rounded-xl shadow-gray-400 duration-300 border border-emerald-600 overflow-hidden bg-linear-to-b from-purple-200 via-white to-sky-200 flex flex-col justify-between"
              >
                <img
                  src={game.coverImage}
                  alt={game.title}
                  className="object-cover h-40 w-full"
                />

                <div className="px-4 py-3">
                  <h3 className="font-semibold text-lg xl:text-xl">
                    {game.title}
                  </h3>
                  <p className="text-gray-700 mt-1 text-sm line-clamp-2">
                    {game.description}
                  </p>
                  <p className="text-gray-800 font-semibold mt-2">
                    Price: ${game.price}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <Rating
                      value={Number(game.rating)}
                      precision={0.5}
                      readOnly
                      size="small"
                    />
                    <span className="text-gray-600 font-medium text-sm">
                      ({game.rating})
                    </span>
                  </div>
                  <Button
                    variant="contained"
                    className="bg-teal-600! hover:bg-emerald-500! text-white font-semibold! mt-4! w-full"
                    onClick={() => router.push(`/game/${game._id}`)}
                  >
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default GamesPage;
