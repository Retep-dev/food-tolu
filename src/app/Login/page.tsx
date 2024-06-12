"use client";
import React, { useEffect, useState } from "react";
import "./login.css";
import { useRouter } from "next/navigation";
import Link from "next/link";

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
      router.push("/allrecipes");
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
    <div className="flex flex-col md:flex-row h-[450px]  bg-white">
      <div className="w-fit md:w-[50%]">
        <img
          src="https://img.freepik.com/free-photo/rustic-winter-corn-stew-food-arrangement_23-2148717376.jpg?t=st=1718156769~exp=1718157369~hmac=da45934dd94b402d9731e470f973000660c5c0510c0504333bcf62f86ec89e53"
          alt="Food"
          className="h-[700px]"
          width="800"
        />
      </div>
      <div className="p-[15%]  h-[700px] bg-white w-screen md:w-[50%]">
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
                className="h-[40px] pl-[10px]  border-2 border-[#008000] w-[300px]"
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
                className="h-[40px] p-[10px] pl-[20px]  border-2 border-[#008000] w-[300px]"
                required
              />
              <span
                className="show-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "HIDE" : "SHOW"}
              </span>
            </div>
            <div className="flex flex-row align-start gap-[-30px] w-[250px]">
              <input
                type="checkbox"
                id="keepLoggedIn"
                checked={keepLoggedIn}
                onChange={(e) => setKeepLoggedIn(e.target.checked)}
                className="w-[20%]"
              />

              <p className="text-black w-[70%]">Keep me logged in</p>
            </div>

            <button type="submit" className="w-[300px]">
              Log in with email
            </button>
          </form>
          <Link href="/Signin">
            <p className="forgot-password copperplate-text text-[0.8rem] ">
              Need an account? Join now
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginEmail;
