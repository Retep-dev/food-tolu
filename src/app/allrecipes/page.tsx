"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../component/Card";
import { useRouter } from "next/navigation";
import { BASE_URL } from "../Constants";

const Home = () => {
  const [data, setData]: any = useState();
  const router = useRouter();

  // useEffect(() => {
  //   let d = window.atob(
  //     "eyJtZXNzYWdlIjp7ImRhdGEiOlt7IklEIjoiMGYyNTllOTItMzljNy00ZDQxLWIzNjctYjdlMjc0MzA1YzVhIiwibmFtZSI6IkdhcnJpIiwiZGVzY3JpcHRpb24iOiJBIHJpY2ggY2hvY29sYXRlIHNwb25nZSBjYWtlIiwiY29va2luZ190aW1lIjoiNDUgbWludXRlcyIsImluc3RydWN0aW9ucyI6Ik1peCBpbmdyZWRpZW50cywgYmFrZSBhdCAzNTAgZGVncmVlcyBmb3IgMzUgbWludXRlcy4iLCJpbWdfdXJsIjoiaHR0cHM6Ly9zb3VyY2UudW5zcGxhc2guY29tLzE2MDB4OTAwLz9jaG9jb2xhdGUtY2FrZSIsImluZ3JlZGllbnRzIjpbeyJJRCI6ImE4ODE0NTZkLTQyOTQtNDZkZC1hMDIwLWQ3N2ExMzM4NGY4YyIsIm5hbWUiOiJGbG91ciIsInF1YW50aXR5IjoiMiBjdXBzIn1dfSx7IklEIjoiOGJiMWYzMzctN2FiNi00YWYxLWJjY2MtODA5YmI4YWE2OGY5IiwibmFtZSI6IkJhbmFuYSBCcmVhZCIsImRlc2NyaXB0aW9uIjoiTW9pc3QgYW5kIGhlYXJ0eSBiYW5hbmEgYnJlYWQiLCJjb29raW5nX3RpbWUiOiI2MCBtaW51dGVzIiwiaW5zdHJ1Y3Rpb25zIjoiTWl4IGFsbCBpbmdyZWRpZW50cyBhbmQgYmFrZSBhdCAzNzUgZGVncmVlcyBmb3IgNTAgbWludXRlcy4iLCJpbWdfdXJsIjoiaHR0cHM6Ly9zb3VyY2UudW5zcGxhc2guY29tLzE2MDB4OTAwLz9iYW5hbmEtYnJlYWQiLCJpbmdyZWRpZW50cyI6W3siSUQiOiJhODgxNDU2ZC00Mjk0LTQ2ZGQtYTAyMC1kNzdhMTMzODRmOGMiLCJuYW1lIjoiRmxvdXIiLCJxdWFudGl0eSI6IjIgY3VwcyJ9XX0seyJJRCI6ImIyNTg4ZGU3LWNiNmUtNDYyYi1hZTQ0LTY3NGJkN2I0NTNmZSIsIm5hbWUiOiJDaG9jb2xhdGUgQ2FrZSBEZWx1eGUiLCJkZXNjcmlwdGlvbiI6IkEgbHV4dXJpb3VzIGNob2NvbGF0ZSBzcG9uZ2UgY2FrZSB3aXRoIGV4dHJhIGNvY29hIiwiY29va2luZ190aW1lIjoiNTAgbWludXRlcyIsImluc3RydWN0aW9ucyI6Ik1peCBpbmdyZWRpZW50cyB0aG9yb3VnaGx5LCBiYWtlIGF0IDM1MCBkZWdyZWVzIGZvciA0MCBtaW51dGVzLiIsImltZ191cmwiOiJodHRwczovL3NvdXJjZS51bnNwbGFzaC5jb20vMTYwMHg5MDAvP2Nob2NvbGF0ZS1jYWtlLWRlbHV4ZSIsImluZ3JlZGllbnRzIjpbeyJJRCI6ImE4ODE0NTZkLTQyOTQtNDZkZC1hMDIwLWQ3N2ExMzM4NGY4YyIsIm5hbWUiOiJGbG91ciIsInF1YW50aXR5IjoiMiBjdXBzIn1dfSx7IklEIjoiZWRmMjA3ZTQtYzM5NS00OWI0LTk2NzEtZDkyMGE2Y2MwNDlmIiwibmFtZSI6IlJlZCBDYWtlIiwiZGVzY3JpcHRpb24iOiJBIHJpY2ggY2hvY29sYXRlIHNwb25nZSBjYWtlIiwiY29va2luZ190aW1lIjoiNDUgbWludXRlcyIsImluc3RydWN0aW9ucyI6Ik1peCBpbmdyZWRpZW50cywgYmFrZSBhdCAzNTAgZGVncmVlcyBmb3IgMzUgbWludXRlcy4iLCJpbWdfdXJsIjoiaHR0cHM6Ly9zb3VyY2UudW5zcGxhc2guY29tLzE2MDB4OTAwLz9jaG9jb2xhdGUtY2FrZSIsImluZ3JlZGllbnRzIjpbeyJJRCI6ImE4ODE0NTZkLTQyOTQtNDZkZC1hMDIwLWQ3N2ExMzM4NGY4YyIsIm5hbWUiOiJGbG91ciIsInF1YW50aXR5IjoiMiBjdXBzIn1dfSx7IklEIjoiZjA3ZTk0YjUtYzAxMS00OTdmLTgxYzctMmQ4ZWIyMjc3MDcwIiwibmFtZSI6IkFwcGxlIFBpZSIsImRlc2NyaXB0aW9uIjoiQ2xhc3NpYyBhcHBsZSBwaWUgd2l0aCBhIGZsYWt5IGNydXN0IiwiY29va2luZ190aW1lIjoiMSBob3VyIDIwIG1pbnV0ZXMiLCJpbnN0cnVjdGlvbnMiOiJQcmVwYXJlIGNydXN0LCBmaWxsIHdpdGggYXBwbGVzIGFuZCBzcGljZXMsIGFuZCBiYWtlLiIsImltZ191cmwiOiJodHRwczovL3NvdXJjZS51bnNwbGFzaC5jb20vMTYwMHg5MDAvP2FwcGxlLXBpZSIsImluZ3JlZGllbnRzIjpbeyJJRCI6ImE4ODE0NTZkLTQyOTQtNDZkZC1hMDIwLWQ3N2ExMzM4NGY4YyIsIm5hbWUiOiJGbG91ciIsInF1YW50aXR5IjoiMyBjdXBzIn1dfV0sIm1lc3NhZ2UiOiJSZWNpcGVzIHJldHJpZXZlZCBzdWNjZXNzZnVsbHkiLCJjb2RlIjoyMDB9LCJlcnJvcnMiOiIifQ=="
  //   );
  //   console.log(d);

  //   setData(JSON.parse(d).message.data);
  // }, []);

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
    <div className="w-full flex border-black border mx-auto mt-[220px] h-[1000px] bg-white">
      <div className="w-1/5"></div>
      <div className="flex mx-auto border-2  w-[3/5]">
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

{
  /* <html class="h-full" lang="en-US" dir="ltr">
  <head>
    <link rel="preload" href="https://cdn.ngrok.com/static/fonts/euclid-square/EuclidSquare-Regular-WebS.woff" as="font" type="font/woff" crossorigin="anonymous" />
    <link rel="preload" href="https://cdn.ngrok.com/static/fonts/euclid-square/EuclidSquare-RegularItalic-WebS.woff" as="font" type="font/woff" crossorigin="anonymous" />
    <link rel="preload" href="https://cdn.ngrok.com/static/fonts/euclid-square/EuclidSquare-Medium-WebS.woff" as="font" type="font/woff" crossorigin="anonymous" />
    <link rel="preload" href="https://cdn.ngrok.com/static/fonts/euclid-square/EuclidSquare-Semibold-WebS.woff" as="font" type="font/woff" crossorigin="anonymous" />
    <link rel="preload" href="https://cdn.ngrok.com/static/fonts/euclid-square/EuclidSquare-MediumItalic-WebS.woff" as="font" type="font/woff" crossorigin="anonymous" />
    <link rel="preload" href="https://cdn.ngrok.com/static/fonts/ibm-plex-mono/IBMPlexMono-Text.woff" as="font" type="font/woff" crossorigin="anonymous" />
    <link rel="preload" href="https://cdn.ngrok.com/static/fonts/ibm-plex-mono/IBMPlexMono-TextItalic.woff" as="font" type="font/woff" crossorigin="anonymous" />
    <link rel="preload" href="https://cdn.ngrok.com/static/fonts/ibm-plex-mono/IBMPlexMono-SemiBold.woff" as="font" type="font/woff" crossorigin="anonymous" />
    <link rel="preload" href="https://cdn.ngrok.com/static/fonts/ibm-plex-mono/IBMPlexMono-SemiBoldItalic.woff" as="font" type="font/woff" crossorigin="anonymous" />
    <meta charset="utf-8">
    <meta name="author" content="ngrok">
    <meta name="description" content="ngrok is the fastest way to put anything on the internet with a single command.">
    <meta name="robots" content="noindex, nofollow">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link id="style" rel="stylesheet" href="https://cdn.ngrok.com/static/css/error.css">
    <noscript>You are about to visit b19f-2c0f-2a80-11-c110-41d2-c4f8-db0a-bba.ngrok-free.app, served by 2c0f:2a80:11:c110:41d2:c4f8:db0a:bba. This website is served for free through ngrok.com. You should only visit this website if you trust whoever sent the link to you. (ERR_NGROK_6024)</noscript>
    <script id="script" src="https://cdn.ngrok.com/static/js/error.js" type="text/javascript"></script>
  </head>
  <body class="h-full" id="ngrok">
    <div id="root" data-payload="eyJjZG5CYXNlIjoiaHR0cHM6Ly9jZG4ubmdyb2suY29tLyIsImNvZGUiOiI2MDI0IiwiaG9zdHBvcnQiOiJiMTlmLTJjMGYtMmE4MC0xMS1jMTEwLTQxZDItYzRmOC1kYjBhLWJiYS5uZ3Jvay1mcmVlLmFwcCIsIm1lc3NhZ2UiOiJZb3UgYXJlIGFib3V0IHRvIHZpc2l0IGIxOWYtMmMwZi0yYTgwLTExLWMxMTAtNDFkMi1jNGY4LWRiMGEtYmJhLm5ncm9rLWZyZWUuYXBwLCBzZXJ2ZWQgYnkgMmMwZjoyYTgwOjExOmMxMTA6NDFkMjpjNGY4OmRiMGE6YmJhLiBUaGlzIHdlYnNpdGUgaXMgc2VydmVkIGZvciBmcmVlIHRocm91Z2ggbmdyb2suY29tLiBZb3Ugc2hvdWxkIG9ubHkgdmlzaXQgdGhpcyB3ZWJzaXRlIGlmIHlvdSB0cnVzdCB3aG9ldmVyIHNlbnQgdGhlIGxpbmsgdG8geW91LiIsInNlcnZpbmdJUCI6IjJjMGY6MmE4MDoxMTpjMTEwOjQxZDI6YzRmODpkYjBhOmJiYSIsInRpdGxlIjoiT0sifQ=="></div>
  </body>
</html> */
}
