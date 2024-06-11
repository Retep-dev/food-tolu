"use client";
import React, { useState } from "react";
import "./login.css";

const LoginEmail = () => {
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
              Log in with email
            </h1>
          </div>

          <form onSubmit={handleLogin}>
            <label htmlFor="email">Email Address</label>
            <div className="h-[40px] p-[10px] border-2 border-[#008000]">
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
            <label htmlFor="password">Password</label>
            <div className="h-[40px] p-[10px] items-end border-2 border-[#008000]">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
              <span
                className="show-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "HIDE" : "SHOW"}
              </span>
            </div>
            <div className="flex">
              <input
                type="checkbox"
                id="keepLoggedIn"
                checked={keepLoggedIn}
                onChange={(e) => setKeepLoggedIn(e.target.checked)}
              />

              <p>Keep me logged in</p>
            </div>

            <button type="submit">Log in with email</button>
          </form>
          <p className="forgot-password">Forgot password?</p>
        </div>
      </div>
    </div>
  );
};

export default LoginEmail;
