"use client";
import React, { useState } from "react";
import "./Signin.css";

const Signin = () => {
  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);

  const handleLogin = (e: any) => {
    e.preventDefault();
    // Here you can implement your login logic
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Keep logged in:", keepLoggedIn);
  };

  return (
    <div className="flex h-[100vh] bg-white">
      <div className="w-[50%]">
        <img
          src="https://www.nairaland.com/attachments/5738702_fufuyt_jpeg4b65d1bfeadad4aa30cc4c95de9146f4"
          alt="Food"
          className="h-[608px]"
        />
      </div>
      <div className="p-[15%]">
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
            <div className="h-[35px] p-[10px] border-2 border-[#008000]">
              <input
                type="name"
                id="name"
                value={email}
                onChange={(e) => setName(e.target.value)}
                placeholder="username"
                className="w-[100%]"
                required
              />
            </div>

            <label htmlFor="email">Email Address</label>
            <div className="h-[35px] p-[10px] border-2 border-[#008000]">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="yourname@example.com"
                className="w-[100%]"
                required
              />
            </div>

            <label htmlFor="password">Create password</label>
            <div className="h-[35px] p-[10px] items-end border-2 border-[#008000]">
              <input
                type={showPassword ? "text" : "password"}
                id="password1"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
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
            <div className="h-[35px] p-[10px] items-end border-2 border-[#008000]">
              <input
                type={showPassword ? "text" : "password"}
                id="password2"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
              <span
                className="show-password2"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "HIDE" : "SHOW"}
              </span>
            </div>

            <button className="mt-[20px]" type="submit">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
