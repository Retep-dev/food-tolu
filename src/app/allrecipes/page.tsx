"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../component/Card";
import { useRouter } from "next/navigation";
import { BASE_URL } from "../Constants";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const Home = () => {
  const [data, setData]: any = useState();
  const router = useRouter();
  const [page, setPage] = React.useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    fetchdata();
  }, [page]);

  const fetchdata = () => {
    const axios = require("axios");
    let data = JSON.stringify({
      ingredients: [""],
    });

    console.log(process.env.BASE_URL);
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: BASE_URL + "/recipes/search?page=+page+&page_size=10",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVtYWlsQGdtYWlsLmNvbSIsImV4cCI6MTcxODI2ODA1NSwidXNlcl9pZCI6Ijk0ZGFiM2EyLTAwMWMtNGIzYi04YmUxLTFiODAyNjVkMjhjMyJ9.VqTSiZlRsYuqWF-nwExHNvOu6HinsfMgSXP6ep3j1V8",
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
    <div className="w-full flex border-black border mx-auto mt-[10px] xl:mt-[136px] xl:pt-[0px] pt-[100px] h-[fit] min-h-[100vh] bg-white">
      <div className="w-1/5"></div>
      <div className="flex flex-col w-[3/5]">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 mx-auto mt-[30px] mb-[60px] m-[20px] h-fit">
          {data &&
            data.map((d: any) => {
              return <Card data={d} key={d} />;
            })}
        </div>
        <div className="mx-auto mb-[40px]">
          <Stack spacing={2}>
            <Typography>Page: {page}</Typography>
            <Pagination count={10} page={page} onChange={handleChange} />
          </Stack>
        </div>
      </div>
      <div className="w-1/5"></div>
    </div>
  );
};

export default Home;
