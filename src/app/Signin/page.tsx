"use client";
import React, { useState } from "react";
import "./Signin.css";
import { useRouter } from "next/navigation";

const Signin = () => {
  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);

  // const handleLogin = (e: any) => {
  //   e.preventDefault();
  //   // Here you can implement your login logic
  //   console.log("Firstname:", Name);
  //   console.log("Email:", email);
  //   console.log("Password:", password);
  //   console.log("ConfirmPassword:", confirmPassword);
  //   console.log("Keep logged in:", keepLoggedIn);

  // };
  const [errorMessage, setErrorMessage] = useState("");

  const router = useRouter();

  const handleLogin = async (e: any) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    const userData = {
      username: Name,
      email: email,
      password: password,
      confirm_password: confirmPassword,
      // keepLoggedIn: keepLoggedIn
    };

    try {
      const response = await fetch("https://tolzrecipe.onrender.com/users/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.errors || "Something went wrong");
      }

      // If successful, redirect to login page
      router.push("/Login");
    } catch (error: any) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-full md:h-screen bg-white">
      <div className="w-[50%] bg-white">
        <img
          src="https://www.nairaland.com/attachments/5738702_fufuyt_jpeg4b65d1bfeadad4aa30cc4c95de9146f4"
          alt="Food"
          className="h-[608px]"
        />
      </div>
      <div className="p-[15%] bg-white">
        <div>
          <div className="w-[300px]">
            <h1 className="copperplate-text text-[2rem] text-[#008000]">
              Tolzrecipes
            </h1>
            <h1 className="copperplate-text text-[1.8rem] text-black">
              Create an account
            </h1>
            <p className=" text-[1rem] text-black">
              Sign up to save and review your favorite recipes.
            </p>
          </div>

          <form onSubmit={handleLogin}>
            <label htmlFor="name">Username </label>
            <div className="">
              <input
                type="name"
                id="name"
                value={Name}
                onChange={(e) => setName(e.target.value)}
                placeholder="username"
                className="h-[35px] p-[10px] border-2 border-[#008000] w-[300px]"
                required
              />
            </div>

            <label htmlFor="email">Email Address</label>
            <div className="">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="yourname@example.com"
                className="h-[35px] p-[10px] border-2 border-[#008000] w-[300px]"
                required
              />
            </div>

            <label htmlFor="password">Create password</label>
            <div className="items-end">
              <input
                type={showPassword ? "text" : "password"}
                id="password1"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="h-[35px] p-[10px] border-2 border-[#008000] w-[300px]"
                required
              />
              <span
                className="show-password1"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "HIDE" : "SHOW"}
              </span>
            </div>

            <label htmlFor="password">Confirm Password</label>
            <div className="items-end">
              <input
                type={showPassword2 ? "text" : "password"}
                id="password2"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Enter your password"
                className="h-[35px] p-[10px] border-2 border-[#008000] w-[300px]"
                required
              />
              <span
                className="show-password2"
                onClick={() => setShowPassword2(!showPassword2)}
              >
                {showPassword2 ? "HIDE" : "SHOW"}
              </span>
            </div>

            <button className="mt-[20px]" type="submit">
              Sign In
            </button>

            {errorMessage && (
              <div className="error text-red-500 mt-2 text-center">
                {errorMessage}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
