"use client";
import React, { useState } from "react";
import "./Home.css";
import Star from "./Star";
import { TextField } from "@mui/material";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="bg-white">
      <div className="home-body mx-auto flex flex-col items-center justify-center w-screen ">
        <div className="hero_section mt-[20px]">
          <img
            src="https://www.nairaland.com/attachments/5738702_fufuyt_jpeg4b65d1bfeadad4aa30cc4c95de9146f4"
            width={900}
            alt="Food"
          ></img>
          <p>Name</p>
          <h1>Recipe class</h1>
          <p>mmm-mmm-mmmm-mmmm-mmmm-mmmm-mmmm</p>
        </div>
      </div>
      <div className="grid-section">
        <h1>xxxx-xxxx-xxxx-xxx</h1>
        <div className="grid-first-line">
          <div>
            <img
              src="https://www.nairaland.com/attachments/5738702_fufuyt_jpeg4b65d1bfeadad4aa30cc4c95de9146f4"
              width={500}
              alt="Food"
            ></img>
            <p>Name</p>
            <h1>Recipe class</h1>
            <Star />
          </div>
          <div>
            <img
              src="https://www.nairaland.com/attachments/5738702_fufuyt_jpeg4b65d1bfeadad4aa30cc4c95de9146f4"
              width={500}
              alt="Food"
            ></img>
            <p>Name</p>
            <h1>Recipe class</h1>
            <Star />
          </div>
          <div>
            <img
              src="https://www.nairaland.com/attachments/5738702_fufuyt_jpeg4b65d1bfeadad4aa30cc4c95de9146f4"
              width={500}
              alt="Food"
            ></img>
            <p>Name</p>
            <h1>Recipe class</h1>
            <Star />
          </div>
        </div>
        <div className="grid-first-line">
          <div>
            <img
              src="https://www.nairaland.com/attachments/5738702_fufuyt_jpeg4b65d1bfeadad4aa30cc4c95de9146f4"
              width={500}
              alt="Food"
            ></img>
            <p>Name</p>
            <h1>Recipe class</h1>
            <Star />
          </div>
          <div>
            <img
              src="https://www.nairaland.com/attachments/5738702_fufuyt_jpeg4b65d1bfeadad4aa30cc4c95de9146f4"
              width={500}
              alt="Food"
            ></img>
            <p>Name</p>
            <h1>Recipe class</h1>
            <Star />
          </div>
          <div>
            <img
              src="https://www.nairaland.com/attachments/5738702_fufuyt_jpeg4b65d1bfeadad4aa30cc4c95de9146f4"
              width={500}
              alt="Food"
            ></img>
            <p>Name</p>
            <h1>Recipe class</h1>
            <Star />
          </div>
        </div>
        <div className="grid-first-line">
          <div>
            <img
              src="https://www.nairaland.com/attachments/5738702_fufuyt_jpeg4b65d1bfeadad4aa30cc4c95de9146f4"
              width={500}
              alt="Food"
            ></img>
            <p>Name</p>
            <h1>Recipe class</h1>
            <Star />
          </div>
          <div>
            <img
              src="https://www.nairaland.com/attachments/5738702_fufuyt_jpeg4b65d1bfeadad4aa30cc4c95de9146f4"
              width={500}
              alt="Food"
            ></img>
            <p>Name</p>
            <h1>Recipe class</h1>
            <Star />
          </div>
          <div>
            <img
              src="https://www.nairaland.com/attachments/5738702_fufuyt_jpeg4b65d1bfeadad4aa30cc4c95de9146f4"
              width={500}
              alt="Food"
            ></img>
            <p>Name</p>
            <h1>Recipe class</h1>
            <Star />
          </div>
        </div>
        <div className="grid-first-line">
          <div>
            <img
              src="https://www.nairaland.com/attachments/5738702_fufuyt_jpeg4b65d1bfeadad4aa30cc4c95de9146f4"
              width={500}
              alt="Food"
            ></img>
            <p>Name</p>
            <h1>Recipe class</h1>
            <Star />
          </div>
          <div>
            <img
              src="https://www.nairaland.com/attachments/5738702_fufuyt_jpeg4b65d1bfeadad4aa30cc4c95de9146f4"
              width={500}
              alt="Food"
            ></img>
            <p>Name</p>
            <h1>Recipe class</h1>
            <Star />
          </div>
          <div>
            <img
              src="https://www.nairaland.com/attachments/5738702_fufuyt_jpeg4b65d1bfeadad4aa30cc4c95de9146f4"
              width={500}
              alt="Food"
            ></img>
            <p>Name</p>
            <h1>Recipe class</h1>
            <Star />
          </div>
        </div>
      </div>
      <div className="lower_search mr-[5%] ml-[5%] items-center mt-[50px] mb-[50px]">
        <div className="lower_search_left mt-[20px] ml-[40px]">
          <h1 className="copperplate-text">What would you like to cook?</h1>
          <TextField
            type="text"
            label="Find a recipe"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            variant="outlined"
            className="search-box"
          />
        </div>
        <div className="lower_search_righty mt-[20px] ">
          <p>Popular searches</p>
          <div className="lower_search_right mt-[20px]">
            <h2>Chicken</h2>
            <h2>Smoothies</h2>
            <h2>Banana Bread</h2>
            <h2>Lasagna</h2>
          </div>
          <div className="lower_search_right mt-[20px] mb-[20px]">
            <h2>Meatloaf</h2>
            <h2>Cookies</h2>
            <h2>Asparagus</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
