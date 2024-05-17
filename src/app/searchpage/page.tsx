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
    setData(JSON.parse(d).message.data);
  }, []);

  const fetchdata = async () => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://03d2-2c0f-2a80-11-c110-5199-362c-2303-7630.ngrok-free.app/recipes",
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
    <div className="w-full flex border-black border mx-auto mt-[220px]">
      <div className="flex mx-auto border-2  w-fit">
        {data &&
          data.map((d: any) => {
            return <Card data={d} />;
          })}
      </div>
    </div>
  );
};

export default Home;
