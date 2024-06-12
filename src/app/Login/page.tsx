"use client";
import React, { useState } from "react";
import "./login.css";
import { useRouter } from "next/navigation";

const LoginEmail = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // State for error messages

  const router = useRouter(); // Initialize useRouter

  const handleLogin = async (e: any) => {
    e.preventDefault();
    setErrorMessage(""); // Clear any previous error messages

    try {
      const response = await fetch(
        "https://tolzrecipe.onrender.com/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        setErrorMessage(errorData.errors || "An error occurred during login.");
        return;
      }

      const data = await response.json();
      // Handle successful login, e.g., store token, redirect, etc.
      console.log("Login successful:", data);

      // Redirect to home page
      router.push("/");
    } catch (error) {
      console.error("Login error:", error);
      setErrorMessage("An error occurred during login.");
    }
  };

  // const handleLogin = (e: any) => {
  //   e.preventDefault();
  //   // Here you can implement your login logic
  //   console.log("Email:", email);
  //   console.log("Password:", password);
  //   console.log("Keep logged in:", keepLoggedIn);
  // };

  return (
    <div className="flex flex-col md:flex-row h-[100vh] bg-white">
      <div className="w-fit md:w-[50%]">
        <img
          src="https://www.nairaland.com/attachments/5738702_fufuyt_jpeg4b65d1bfeadad4aa30cc4c95de9146f4"
          alt="Food"
          className="h-[608px]"
        />
      </div>
      <div className="p-[15%] bg-white w-screen md:w-[50%]">
        <div>
          <div className="w-[300px]">
            <h1 className="copperplate-text text-[2rem] text-[#008000]">
              Tolzrecipes
            </h1>
            <h1 className="copperplate-text text-[1.8rem] text-black">
              Log in with email
            </h1>
          </div>

          {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
          <form onSubmit={handleLogin}>
            <label htmlFor="email">Email Address</label>
            <div className="">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="yourname@example.com"
                className="h-[40px] p-[10px]  border-2 border-[#008000] w-[300px]"
                required
              />
            </div>
            <label htmlFor="password">Password</label>
            <div className="items-end">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="h-[40px] p-[10px]  border-2 border-[#008000] w-[300px]"
                required
              />
              <span
                className="show-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "HIDE" : "SHOW"}
              </span>
            </div>
            <div className="flex flex-row align-start gap-[-30px] w-[200px]">
              <input
                type="checkbox"
                id="keepLoggedIn"
                checked={keepLoggedIn}
                onChange={(e) => setKeepLoggedIn(e.target.checked)}
              />

              <p className="text-black">Keep me logged in</p>
            </div>

            <button type="submit" className="w-[300px]">
              Log in with email
            </button>
          </form>
          <p className="forgot-password">Forgot password?</p>
        </div>
      </div>
    </div>
  );
};

export default LoginEmail;
