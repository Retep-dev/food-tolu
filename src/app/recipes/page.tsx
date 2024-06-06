"use client";
import React, { useEffect, useState } from "react";
import "./Recipes.css";
import FavoriteBorderSharpIcon from "@mui/icons-material/FavoriteBorderSharp";
import StarOutlineSharpIcon from "@mui/icons-material/StarOutlineSharp";
import PrintSharpIcon from "@mui/icons-material/PrintSharp";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { useRouter } from "next/navigation";

function Recipes() {
  const [data, setData]: any = useState();
  const router = useRouter();
  useEffect(() => {
    let link = location.href.split("?data=")[1];

    if (!link) {
      router.push("/");
      return;
    }
    let d = window.atob(decodeURI(link.split("%3D").join("=")));
    setData(JSON.parse(d));
  }, []);
  console.log(data);
  return (
    <div className="main_container mt-[110px] xl:mt-[160px] bg-white flex flex-row ">
      <div className="xl:w-[20%]  w-[5%]"></div>
      <div className="w-[70%] xl:w-[50%] flex flex-col ">
        <div className="items-left">
          <h1 className="copperplate-text  mt-[50px]">{data?.name ?? ""}</h1>
          <div className="bethefirst">
            <p className="bethefirst_left">
              <a href="#" className="underline">
                Be the first to rate & review!
              </a>
            </p>
            <p className="bethefirst_right">
              <a href="/" className="underline">
                1 PHOTO
              </a>
            </p>
          </div>
          <p className="w-3/4 mt-[20px]">{data?.description ?? ""}</p>
          <div className="bethefirst mt-[20px]">
            <p className="bethefirst_left">Submitted by Toluwanimi </p>
            <p className="bethefirst_righty">Published on May, 2024</p>
          </div>
          <div className="share_section mt-[20px]">
            <div className="Save">
              <p>Save</p>
              <FavoriteBorderSharpIcon className="share_icon" />
            </div>
            <div className="Rate_share">
              <p>Rate</p>
              <StarOutlineSharpIcon className="share_icon" />
              <div className="Print">
                <p>Print</p>
                <PrintSharpIcon className="share_icon" />
                <p>Share</p>
                <ShareOutlinedIcon className="share_icon" />
              </div>
            </div>
          </div>
        </div>
        <div className="image_section">
          <img src={data?.img_url ?? ""} width={900} alt="Food"></img>
          <div></div>
        </div>
        <div className="addphotocontainer">
          <AddAPhotoIcon className="addphoto" />
          <p>Add Photo</p>
        </div>
        <div className="time_time">
          <div className="time_container mt-[20px]">
            {/* <h3>Prep Time:</h3> */}
            <h3>Cook Time:</h3>
            {/* <h3>Total Time:</h3> */}
          </div>
          <div className="time_container ">
            {/* <p>20 mins</p> */}
            <p>{data?.cooking_time ?? ""}</p>
            {/* <p>55 mins</p> */}
          </div>
          <div className="time_container mt-[20px]">
            {/* <h3>Servings:</h3> */}
          </div>
          <div className="time_container">{/* <p>8</p> */}</div>
        </div>
        <div className="ingredients">
          <h1 className="copperplate-text">Ingredients</h1>
        </div>
        <div className="">
          <ul className="list-with-colored-bullets">
            {/* <li className="list_text">{data?.ingredients ?? ""}</li> */}
            <li>4 tablespoons olive oil, divided</li>
            {/* <li>4 tablespoons olive oil, divided</li>
            <li>4 tablespoons olive oil, divided</li>
            <li>4 tablespoons olive oil, divided</li>
            <li>4 tablespoons olive oil, divided</li>
            <li>4 tablespoons olive oil, divided</li> */}
          </ul>
        </div>
        <div className="directions mt-[20px]">
          <h1 className="copperplate-text">Directions</h1>
          <h3>Steps</h3>
          <p>{data?.instructions ?? ""}</p>
          {/* <h3>Step 2</h3>
          <p>
            Heat remaining 2 tablespoons olive oil in the pot; add onions and
            cook until translucent, about 3 minutes. Stir in garlic; cook until
            fragrant, about 30 seconds. Add carrots and celery; cook for 5
            minutes, stirring occasionally.
          </p>
          <h3>Step 3</h3>
          <p>
            Reduce heat to medium-low; stir in chicken stock, diced tomatoes,
            cannellini beans, kidney beans, tomato paste, zucchini, green beans,
            Italian seasoning. Simmer, covered, for 15 minutes.
          </p>
          <h3>Step 4</h3>
          <p>
            Stir in chicken and ditalini pasta, and cook until pasta is tender
            yet firm to the bite, about 8 minutes. Season to taste with salt and
            black pepper. If soup is too thick, add a little water or stock.
            Garnish each bowl with Parmesan and parsley.
          </p>
          <h1 className="copperplate-text mt-[20px]">Cook's Note:</h1>
          <p>
            If you prefer, feel free to substitute beef stock for chicken stock.
          </p> */}
        </div>
        <div className="made_it_section h-[50px]">
          <div className="made_it pt-3">
            <h3>I MADE IT</h3>
          </div>
          <div className="made_it_print pt-3">
            <h3>
              PRINT
              <PrintSharpIcon className="share_icon_print" />
            </h3>
          </div>
        </div>
        {/* <div className="nutritional_fact">
          <h1 className="copperplate-text">Nutritional Facts</h1>
          <p className="mt-[0px]">(per serving)</p>
        </div>
        <div className="time_container_2">
          <h3>260</h3>
          <h3>8g</h3>
        </div>
        <div className="time_container">
          <p>Calories</p>
          <p>Fat</p>
        </div>
        <div className="time_container_2">
          <h3>33g</h3>
          <h3>15g</h3>
        </div>
        <div className="time_container">
          <p>Carbs</p>
          <p>Protein</p>
        </div>
        <div className="reviews">
          <h1 className="copperplate-text">Reviews</h1>
          <p>Check out our Community Guidelines about reviews.</p>
        </div> */}
      </div>
      <div className="w-[20%]"></div>
    </div>
  );
}

export default Recipes;
