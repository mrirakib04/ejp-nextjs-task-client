"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; // use App Router hook
import { signIn } from "next-auth/react";
import { toast } from "react-toastify";
import { Button, Divider, TextField } from "@mui/material";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const validatePassword = (password) => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    return regex.test(password);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, imageURL } = e.target;
    const nameVal = name.value;
    const emailVal = email.value;
    const passwordVal = password.value;
    const imageVal = imageURL?.value?.trim();

    if (!validatePassword(passwordVal)) {
      toast.info(
        "Password must be at least 6 characters, include a number, uppercase, lowercase & special char.",
        { position: "top-right", autoClose: 3000 }
      );
      return;
    }

    try {
      const res = await fetch("http://localhost:6510/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: nameVal,
          email: emailVal,
          password: passwordVal,
          image: imageVal,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Registration failed");

      toast.success("Registration successful! Logging in...", {
        position: "top-right",
        autoClose: 2000,
      });

      await signIn("credentials", {
        email: emailVal,
        password: passwordVal,
        callbackUrl: "/",
      });
    } catch (err) {
      toast.error(`Registration Error: ${err.message}`, {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  const handleGoogleMethod = async () => {
    await signIn("google", { callbackUrl: "/callback" });
  };

  return (
    <div className="w-full flex flex-col items-center sm:gap-5 gap-2 px-5 py-10">
      <div className="flex flex-col gap-1 items-center md:mt-8 mt-4">
        <h3 className="md:text-4xl text-2xl italic font-semibold bg-linear-to-br from-blue-800 to-red-500 bg-clip-text text-transparent">
          Register
        </h3>
        <p className="text-base font-medium text-sky-500">
          Join us to buy and sale games seamlessly.
        </p>
      </div>

      <Divider orientation="horizontal" variant="middle" flexItem />

      <div className="flex flex-col gap-4 lg:w-3/5 md:w-8/12 sm:w-10/12">
        <form
          onSubmit={handleFormSubmit}
          className="flex flex-col justify-center items-center gap-4 mt-4 w-full"
        >
          <div className="flex md:flex-nowrap flex-wrap items-center gap-4 w-full">
            <TextField
              name="name"
              label="Name"
              variant="outlined"
              required
              className="w-full"
            />
            <TextField
              name="email"
              label="Email"
              variant="outlined"
              type="email"
              required
              className="w-full"
            />
          </div>
          <TextField
            name="imageURL"
            label="Please Add a Direct Image URL"
            variant="outlined"
            className="w-full"
          />
          <div className="w-full relative">
            <TextField
              name="password"
              type={showPassword ? "text" : "password"}
              label="Password"
              variant="outlined"
              required
              className="w-full"
            />
            {!showPassword ? (
              <MdVisibilityOff
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-4 right-3 text-2xl z-40 cursor-pointer"
              />
            ) : (
              <MdVisibility
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-4 right-3 text-2xl z-40 cursor-pointer"
              />
            )}
          </div>

          <div className="w-full flex items-center justify-center">
            <Button
              type="submit"
              className="w-full md:w-1/2 mx-auto py-2 rounded-md border-2 text-white! shadow-gray-400/90 bg-linear-to-tr from-purple-600 to-gray-500 transition-all duration-300 hover:to-cyan-600 hover:shadow-md"
            >
              <p className="text-lg font-semibold py-1">Register</p>
            </Button>
          </div>
        </form>

        <Divider orientation="horizontal" variant="middle" flexItem />

        <button
          onClick={handleGoogleMethod}
          className="w-full md:w-1/2 mx-auto border-2 border-teal-500 bg-white rounded-md text-xl font-semibold transition hover:shadow-md hover:scale-105 shadow-gray-400/90 hover:border-cyan-600 py-2 flex items-center justify-center gap-2 cursor-pointer"
        >
          <FcGoogle className="text-2xl" />
          <span className="bg-linear-to-r from-orange-700 via-sky-700 to-yellow-700 bg-clip-text text-transparent">
            Google
          </span>
        </button>

        <p className="font-medium text-lg flex items-center gap-1">
          Already have an account?
          <Link
            href="/login"
            className="text-sky-600 hover:text-emerald-700 duration-300 font-bold"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
