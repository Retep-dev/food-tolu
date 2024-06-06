"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../component/Card";
import { useRouter } from "next/navigation";
import { BASE_URL } from "../Constants";

const Home = () => {
  const [data, setData]: any = useState();
  const router = useRouter();

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = () => {
    const axios = require("axios");
    let data = JSON.stringify({
      ingredients: [""],
    });

    console.log(process.env.BASE_URL);
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

    axios
      .request(config)
      .then((response: any) => {
        setData(response.data.message.data);
        console.log(response);
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  console.log(data);

  return (
    <div className="w-full flex border-black border mx-auto mt-[10px] xl:mt-[150px] xl:pt-[0px] pt-[100px] h-[fit] min-h-[100vh] bg-white">
      <div className="w-1/5"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 mx-auto mt-[30px] mb-[60px] m-[20px] h-fit w-[3/5]">
        {data &&
          data.map((d: any) => {
            return <Card data={d} key={d} />;
          })}
      </div>
      <div className="w-1/5"></div>
    </div>
  );
};

export default Home;
