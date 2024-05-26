"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../component/Card";
import { useRouter } from "next/navigation";

const Home = () => {
  const [data, setData]: any = useState();
  const router = useRouter();
  useEffect(() => {
    let link = location.href.split("?data=")[1];

    if (!link) {
      router.push("/");
      return;
    }
    let d = window.atob(link);
    setData(JSON.parse(d));
  }, []);

  const fetchdata = async () => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://b19f-2c0f-2a80-11-c110-41d2-c4f8-db0a-bba.ngrok-free.app/recipes",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVtYWlsQGdtYWlsLmNvbSIsImV4cCI6MTcxMjI3MTAwMywidXNlcl9pZCI6ImNmNjhjODlkLThhYTEtNGRmZC04ZDI1LTQ3NmU4ODlkMDkwMiJ9.eCiaReR6OG_KnYiDZw1ZgAsEyNIK2nsfHA84cR0QD9s",
      },
    };

    axios
      .request(config)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log(data);

  return (
    <div className="w-full flex border-black border mx-auto mt-[220px] h-[1000px] bg-white">
      <div className="w-1/5"></div>
      <div className="grid grid-cols-5 mx-auto border-2  w-[3/5]">
        {data &&
          data.map((d: any) => {
            return <Card data={d} />;
          })}
      </div>
      <div className="w-1/5"></div>
    </div>
  );
};

export default Home;
