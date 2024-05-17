import Link from "next/link";
import Star from "./Star";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Card = ({ data }) => {
  const [link, setlink] = useState();
  const router = useRouter();

  useEffect(() => {
    let d = window.btoa(JSON.stringify(data));
    setlink("/recipes?data=" + d);
  }, []);

  console.log(data.ID);

  return (
    <Link href={link ?? ""}>
      <div>
        <div className="m-[20px] shadow-sm">
          <img src={data.img_url} width={500} alt="Food"></img>
          <p className="mt-[20px]">{data.name}</p>
        </div>
        <Star className="ml-0 pl-0" />
      </div>
    </Link>
  );
};

export default Card;
