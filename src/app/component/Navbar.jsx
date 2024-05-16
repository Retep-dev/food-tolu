"use client";

import axios from "axios";
import { TextField } from "@mui/material";
import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
import "./Navbar.css";
import PlanForm from "./PlanForm";
import CookForm from "./CookForm";
import Link from "next/link";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

function Navbar() {
  const [open1, setOpen1] = React.useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);

  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);

  const handleInput = (e) => {
    console.log(e);

    setSearchTerm(e.target.value);
    const v = e.target.value.split(",");
    const vv = e.target.value.split("");

    if (vv[vv.length - 1] != ",") return;

    setitems((prev) => {
      return [...prev, v[0]];
    });

    setSearchTerm("");
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [items, setitems] = useState([]);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const handleSearch = (e) => {
    const data = JSON.stringify({
      ingredients: ["Flour"],
    });

    const config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://72b6-102-88-84-26.ngrok-free.app/recipes",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVtYWlsQGdtYWlsLmNvbSIsImV4cCI6MTcxMjI3MTAwMywidXNlcl9pZCI6ImNmNjhjODlkLThhYTEtNGRmZC04ZDI1LTQ3NmU4ODlkMDkwMiJ9.eCiaReR6OG_KnYiDZw1ZgAsEyNIK2nsfHA84cR0QD9s",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="nav_bar z-10 h-[220px] w-screen">
      <div className="nav_bar_top">
        <div className="nav_left">
          <h1 className="copperplate-text text-[60px] mt-[25px]">
            Tolzrecipes
          </h1>
        </div>
        <div className="nav_middle">
          <div className="bg-white overflow-hidden search-box flex flex-wrap items-center p-2  h-auto">
            {items &&
              items.map((item, i) => {
                return (
                  <p
                    className="p-2 cursor-pointer rounded-lg bg-[#008000]  text-white m-1"
                    key={i}
                  >
                    {item}{" "}
                    <span
                      onClick={() => {
                        setitems((prev) => {
                          prev.splice(i, 1);
                          return [...prev];
                        });
                      }}
                      className="bg-white text-[#008000] ml-[5px] pl-[3px] pr-[3px] pt-[0px]"
                    >
                      x
                    </span>
                  </p>
                );
              })}
            <input
              type="text"
              className=" outline-none"
              value={searchTerm}
              placeholder="search recipe"
              onChange={(e) => handleInput(e)}
            />
            <SearchRoundedIcon
              className="ml-[60px]"
              onClick={(e) => handleSearch(e)}
            />
          </div>
          {/* <TextField
            type="text"
            label="Find a recipe"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            variant="outlined"
            className="search-box"
          /> */}
        </div>
        <div className="nav_right mt-[45px]">
          <AccountCircleIcon className="myaccount text-[70px] pt-[0px] mt-[0px]" />
          <div className="flex mt-[15px]  h-[25px] pb-0">
            <p className="pr-5">My Account</p>
            <p className="pr-5">Magazine</p>
            <p className="pr-5">Newsletter</p>
            <h4>Sweepstakes</h4>
          </div>
        </div>
      </div>
      <div className="bottom_button">
        <div className="nav_bottom">
          <Link href="/recipes">
            <p className="copperplate-text">DINNER</p>
          </Link>
          <Link href="/">
            <p className="copperplate-text">MEALS</p>
          </Link>
          <Link href="/recipeform">
            <p className="copperplate-text">RECIPES</p>
          </Link>

          <p className="copperplate-text">OCCASIONS</p>
          <p className="copperplate-text">CUISINES</p>
          <p className="copperplate-text">ABOUT US</p>
        </div>
        <div className="right_plan">
          <div className="plan_meal">
            <Button
              style={{ marginTop: "0px", marginLeft: "30px", color: "white" }}
              onClick={handleOpen1}
            >
              <p className="copperplate-text">MEAL SUGGESTION</p>
            </Button>
            <Modal
              keepMounted
              open={open1}
              onClose={handleClose1}
              aria-labelledby="keep-mounted-modal-title"
              aria-describedby="keep-mounted-modal-description"
            >
              <Box maxWidth="md" sx={style}>
                <PlanForm />
              </Box>
            </Modal>
          </div>
          <div className="plan_meal">
            <Button
              style={{ marginTop: "0px", marginLeft: "30px", color: "white" }}
              onClick={handleOpen2}
            >
              <p className="copperplate-text">PLAN MY MEAL</p>
            </Button>
            <Modal
              keepMounted
              open={open2}
              onClose={handleClose2}
              aria-labelledby="keep-mounted-modal-title"
              aria-describedby="keep-mounted-modal-description"
            >
              <Box sx={style}>
                <CookForm />
              </Box>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;