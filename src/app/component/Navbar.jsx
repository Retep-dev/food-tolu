"use client";

import "dotenv/config";
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
import { useRouter } from "next/navigation";
import { BASE_URL } from "../Constants";
// import { useRouter } from "next/router";

function Navbar() {
  const [data, setdata] = useState();
  const [open1, setOpen1] = React.useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);
  const router = useRouter();

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
    let data = JSON.stringify({
      ingredients: [items[0]],
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: BASE_URL + "/recipes/search?page=1&page_size=10",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVtYWlsQGdtYWlsLmNvbSIsImV4cCI6MTcxMjI3MTAwMywidXNlcl9pZCI6ImNmNjhjODlkLThhYTEtNGRmZC04ZDI1LTQ3NmU4ODlkMDkwMiJ9.eCiaReR6OG_KnYiDZw1ZgAsEyNIK2nsfHA84cR0QD9s",
      },
      data: data,
    };
    console.log(data);
    axios
      .request(config)
      .then((response) => {
        // setdata(response.data);
        console.log(response);
        let d = window.btoa(JSON.stringify(response.data.message.data));

        location.href = location.origin + "/searchpage?data=" + d;
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="nav_bar z-10 h-[fit] w-full p-5">
      <div className="flex justify-between items-center">
        <div className="ml-[5%]">
          <h1 className="copperplate-text text-[3rem]">Tolzrecipes</h1>
        </div>
        <div className="w-[25%]">
          <div className="flex mr-0  bg-white rounded-lg pr-[10px]">
            <div className="bg-white overflow-hidden search-box flex flex-wrap items-center p-2  h-auto">
              {items &&
                items.map((item, i) => {
                  return (
                    <p
                      className="p-1 cursor-pointer rounded-lg bg-[#008000]  text-white mr-[5px] ml-[5px] "
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
                        className="bg-white text-[#008000] ml-[5px] mr-[5px] pl-[3px] pr-[3px] pt-0"
                      >
                        x
                      </span>
                    </p>
                  );
                })}

              <input
                type="text"
                className=" outline-none "
                value={searchTerm}
                placeholder="search recipe"
                onChange={(e) => handleInput(e)}
              />
            </div>

            <span className="cursor-pointer" onClick={(e) => handleSearch(e)}>
              <SearchRoundedIcon className="  mt-[10px] w-[45px] h-[43px] bg-white text-[#008000]" />
            </span>
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
        <div className="flex">
          <AccountCircleIcon className="myaccount text-[70px] pt-[0px] mt-[0px]" />
          <div className="flex mt-[15px]  h-[25px] pb-0">
            <p className="px-3 border-r-2">My Account</p>
            <p className="px-3 border-r-2">Magazine</p>
            <p className="px-3 border-r-2">Newsletter</p>
            <p className="px-3">Sweepstakes</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-end w-full">
        <div className="flex space-x-8">
          <Link href="/recipes">
            <p className="copperplate-text">DINNER</p>
          </Link>
          <Link href="/">
            <p className="copperplate-text">MEALS</p>
          </Link>
          <Link href="/allrecipes">
            <p className="copperplate-text">RECIPES</p>
          </Link>
          <Link href="/searchpage">
            <p className="copperplate-text">OCCASIONS</p>
          </Link>

          <p className="copperplate-text">CUISINES</p>
          <p className="copperplate-text">ABOUT US</p>
        </div>
        <div className="flex space-x-4">
          <div className="border-2 border-white">
            <Link href="/recipeform">
              <Button className="m-[5px] text-white">
                <p className="copperplate-text">ADD-RECIPES</p>
              </Button>
            </Link>
          </div>
          <div className="border-2 border-white">
            <Button className="m-[5px] text-white" onClick={handleOpen1}>
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
          <div className="border-2 border-white">
            <Button className="m-[5px] text-white" onClick={handleOpen2}>
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
