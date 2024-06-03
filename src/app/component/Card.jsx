import Link from "next/link";
import Star from "./Star";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Card = ({ data }) => {
  const [link, setlink] = useState();
  const router = useRouter();

  useEffect(() => {
    let d = window.btoa(JSON.stringify(data));
    setlink("/recipes?data=" + encodeURI(d));
  }, []);

  console.log(data.ID);

  return (
    <Link href={link ?? ""}>
      <div className=" border-[#ccc] border m-[10px]">
        <div className="m-[30px]  shadow-sm">
          <img src={data.img_url} width={500} alt="Food"></img>
          <p className="mt-[20px]">{data.name}</p>
        </div>
        {/* <Star className="ml-0 pl-0 border border-black" /> */}
      </div>
    </Link>
  );
};

export default Card;
