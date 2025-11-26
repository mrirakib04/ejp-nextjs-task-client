"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import {
  TextField,
  Button,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";
import { toast } from "react-toastify";

const AddGamePage = () => {
  const { data: session } = useSession();

  const [game, setGame] = useState({
    title: "",
    coverImage: "",
    description: "",
    rating: "",
    price: "",
    genre: "",
  });

  const handleChange = (e) => {
    setGame({ ...game, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !game.title ||
      !game.coverImage ||
      !game.description ||
      !game.rating ||
      !game.price ||
      !game.genre
    ) {
      toast.error("All fields are required", {
        position: "top-right",
        autoClose: 2000,
      });
      return;
    }

    const res = await fetch("http://localhost:6510/games", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...game,
        userEmail: session?.user?.email,
      }),
    });

    if (res.ok) {
      toast.success("Game added successfully!", {
        position: "top-right",
        autoClose: 2000,
      });
      setGame({
        title: "",
        coverImage: "",
        description: "",
        rating: "",
        price: "",
        genre: "",
      });
    } else {
      toast.error("Failed to add game", {
        position: "top-right",
        autoClose: 2000,
      });
    }
  };

  return (
    <div className="flex justify-center py-20 px-5 w-full bg-linear-to-b from-sky-100 via-white to-teal-100 items-center flex-col">
      <h2 className="font-bold text-center mb-6 md:text-4xl font-serif sm:text-3xl text-2xl bg-linear-to-br from-purple-700 to-sky-500 bg-clip-text text-transparent">
        Add Game
      </h2>

      <div className="sm:p-10 p-5 w-full max-w-4xl bg-white rounded-xl shadow-md shadow-gray-400">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center w-full gap-5"
        >
          <div className="w-full flex items-center gap-5 md:flex-row flex-col">
            <TextField
              label="Game Title"
              name="title"
              value={game.title}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="Cover Image URL"
              name="coverImage"
              value={game.coverImage}
              onChange={handleChange}
              fullWidth
            />
          </div>

          <TextField
            label="Game Description"
            name="description"
            multiline
            rows={4}
            value={game.description}
            onChange={handleChange}
            fullWidth
          />

          <div className="w-full flex items-center gap-5 md:flex-row flex-col">
            <TextField
              label="Rating (1-5)"
              type="number"
              name="rating"
              value={game.rating}
              onChange={handleChange}
              fullWidth
              inputProps={{ min: 1, max: 5 }}
            />

            <TextField
              label="Price ($)"
              type="number"
              name="price"
              value={game.price}
              onChange={handleChange}
              fullWidth
            />

            <FormControl fullWidth>
              <InputLabel>Genre</InputLabel>
              <Select
                name="genre"
                label="Genre"
                value={game.genre}
                onChange={handleChange}
              >
                <MenuItem value="Action">Action</MenuItem>
                <MenuItem value="Adventure">Adventure</MenuItem>
                <MenuItem value="Racing">Racing</MenuItem>
                <MenuItem value="Strategy">Strategy</MenuItem>
                <MenuItem value="FPS">FPS</MenuItem>
                <MenuItem value="Sports">Sports</MenuItem>
              </Select>
            </FormControl>
          </div>

          <TextField
            label="User Email"
            value={session?.user?.email || ""}
            InputProps={{ readOnly: true }}
            fullWidth
          />

          <Button
            type="submit"
            className="py-2! font-semibold!"
            variant="contained"
            fullWidth
          >
            Add Game
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddGamePage;
