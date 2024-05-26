"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

interface IngredientData {
  name: string;
  quantity?: string;
}

interface FormData {
  name: string;
  description: string;
  cookingTime: string;
  image: string;
  instructions: string;
  ingredient: IngredientData[];
  quantity?: string;
}

const FormPage: React.FC = () => {
  const [formEntries, setFormEntries] = useState({
    name: "",
    description: "",
    cookingTime: "",
    image: "",
    instructions: "",
    ingredient: [{ name: "", quantity: "" }],
  });

  const [ingredientEntries, setingredientEntries] = useState({
    name: "",
    quantity: "",
  });

  const [data, setData] = useState([formEntries]);
  const [ingredientsData, setIngredientsData] = useState([
    { name: "", quantity: "" },
  ]);

  const [curItem, setCurItem] = useState(0);
  const [curIngrItem, setCurIngrItem] = useState(0);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number,
    i: any
  ) => {
    const { name, value } = e.target;
    console.log(value);

    setFormEntries((prevEntries) => {
      console.log(prevEntries);
      return {
        ...prevEntries,
        [name]: value,
      };
    });
  };

  const handleIngredientChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setingredientEntries((prevEntries) => {
      //
      return {
        ...prevEntries,
        [name]: value,
      };
    });
  };

  const handleAddEntry = () => {
    const prevData = data;
    const prevFormEntries = formEntries;
    ingredientsData.splice(-1, 1);
    prevFormEntries.ingredient = [...ingredientsData];

    prevData[curItem] = prevFormEntries;

    setingredientEntries({
      name: "",
      quantity: "",
    });

    setIngredientsData([
      {
        name: "",
        quantity: "",
      },
    ]);

    setFormEntries({
      name: "",
      description: "",
      cookingTime: "",
      image: "",
      instructions: "",
      ingredient: [{ name: "", quantity: "" }],
    });

    // console.log(data);

    if (data.length - 1 <= curItem) {
      setData([
        ...prevData,
        {
          name: "",
          description: "",
          cookingTime: "",
          image: "",
          instructions: "",
          ingredient: [{ name: "", quantity: "" }],
        },
      ]);
      setCurItem((prev) => prev + 1);
      setCurIngrItem(0);
    } else {
      setData([...prevData]);
      setCurItem((prev) => prev + 1);
      setCurIngrItem(0);
    }
  };

  const handleingredientAddEntry = (index: number) => {
    const prevData = ingredientsData;
    prevData[curIngrItem] = ingredientEntries;
    // console.log(prevData);
    let addItems = ingredientsData.length - 1 <= curIngrItem;
    if (addItems) {
      setIngredientsData([
        ...prevData,
        {
          name: "",
          quantity: "",
        },
      ]);
      setingredientEntries({
        name: "",
        quantity: "",
      });
      setCurIngrItem((prev) => prev + 1);
    } else {
      setIngredientsData([...prevData]);
      setingredientEntries({
        name: "",
        quantity: "",
      });
      setCurIngrItem((prev) => prev + 1);
    }
  };

  // console.log(ingredientsData);

  const viewPrevFormData = (index: number) => {
    setCurItem(index);
    setFormEntries(data[index]);
    setIngredientsData((prev) => [...formEntries.ingredient]);
    setCurIngrItem(0);
    setingredientEntries(formEntries.ingredient[0]);
  };

  const handleSubmit = () => {
    // Handle submission logic here

    const prevFormEntries = formEntries;
    ingredientsData.splice(-1, 1);
    prevFormEntries.ingredient = [...ingredientsData];
    const prevData = data;
    if (data.length - 1 <= curItem) {
      prevData[curItem] = prevFormEntries;
    }
    console.log(data);

    submitRecipes(data);
    console.log("Submitted Entries:", formEntries);
    // Reset form entries after submission
    setFormEntries({
      name: "",
      description: "",
      cookingTime: "",
      image: "",
      instructions: "",
      ingredient: [ingredientEntries],
    });
  };

  const submitRecipes = (recipeData: any) => {
    let data = JSON.stringify(recipeData);

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://3496-2c0f-2a80-11-c110-35b0-870b-beb0-72c7.ngrok-free.app",
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
    <div className="mt-[220px] flex flex-row bg-white">
      <div className="w-[20%]"></div>
      <div className="w-[80%] border-2 border-[#008000]">
        <div className="h-[200px] p-5">
          <h1 className="copperplate-text text-[60px] border-2 border-white  p-[15px] ml-[17%]  mt-[50px] text-[#008000] ">
            RECIPES FORM
          </h1>
        </div>
        <div className="w-[100%] p-[15%] pt-[5%] ">
          <div className="flex flex-row ">
            {/* <div className="flex flex-wrap w-[95%]">
              {data.map((entry: any, index: number) => (
                <h2
                  onClick={() => viewPrevFormData(index)}
                  key={index}
                  style={{
                    background: curItem == index ? "#008000" : "",
                    color: curItem != index ? "#008000" : "white",
                  }}
                  className="border-2 cursor-pointer border-[#008000]  p-[10px] bg-white text-[#008000] mb-[20px]"
                >
                  {index + 1}
                </h2>
              ))}
            </div> */}
            <button
              className="copperplate-text border-2 ml-[60px]  bg-[#008000] p-[10px] h-[50px] w-[200px] text-white"
              type="button"
              onClick={() => handleAddEntry()}
            >
              Add more recipes
            </button>
          </div>
          <div>
            {data.map((entry: any, i: number) => {
              return (
                <form>
                  <div className="flex flex-row">
                    <div className="flex flex-col mr-[20px]">
                      <label className="copperplate-text mt-[10px]">
                        Name:
                      </label>
                      <label className="copperplate-text mt-[43px]">
                        Description:
                      </label>
                      <label className="copperplate-text mt-[46px]">
                        Image url:
                      </label>
                      <label className="copperplate-text mt-[46px]">
                        CookingTime:
                      </label>
                      <label className="copperplate-text mt-[46px]">
                        Instructions:
                      </label>
                    </div>
                    <div className="flex flex-col w-[70%]">
                      <input
                        type="text"
                        name="name"
                        value={formEntries.name}
                        onChange={(e) => handleChange(e, 1, null)}
                        className="w-[full]  border-2 border-[#008000] h-[40px]"
                      />
                      <input
                        name="description"
                        value={formEntries.description}
                        onChange={(e) => handleChange(e, 1, null)}
                        className="w-[full] border-2 border-[#008000] h-[40px] mt-[30px]"
                      />
                      <input
                        name="image"
                        value={formEntries.image}
                        onChange={(e) => handleChange(e, 1, null)}
                        className="w-[full] border-2 border-[#008000] h-[40px] mt-[30px]"
                      />
                      <input
                        type="text"
                        name="cookingTime"
                        value={formEntries.cookingTime}
                        onChange={(e) => handleChange(e, 1, null)}
                        className="w-[full] border-2 border-[#008000] h-[40px] mt-[30px]"
                      />
                      <input
                        name="instructions"
                        value={formEntries.instructions}
                        onChange={(e) => handleChange(e, 1, null)}
                        className="w-[full] border-2 border-[#008000] h-[40px] mt-[30px]"
                      />
                    </div>
                  </div>
                  <div className="mt-[30px]">
                    <label className="copperplate-text mt-[37px]">
                      Ingredient:
                    </label>
                    <div className="flex flex-col mt-[20px]">
                      <div className="flex flex-row ">
                        {/* <div className="flex flex-wrap w-[95%]">
                      {ingredientsData.map((entry, index) => {
                        return (
                          <h2
                            onClick={() => {
                              setCurIngrItem(index);
                              setingredientEntries(ingredientsData[index]);
                            }}
                            key={index}
                            style={{
                              background: curIngrItem == index ? "#008000" : "",
                              color: curIngrItem != index ? "#008000" : "white",
                            }}
                            className="border-2 cursor-pointer border-[#008000]  p-[5px] px-[10px] bg-white text-[#008000] mb-[20px]"
                          >
                            {index + 1}
                          </h2>
                        );
                      })}
                    </div> */}
                        <button
                          className="copperplate-text border-2 ml-[60px]  bg-[#008000] p-[10px] h-[50px] w-[220px] text-white"
                          type="button"
                          onClick={() => handleingredientAddEntry(1)}
                        >
                          Add more ingredient
                        </button>
                      </div>

                      <div className="flex w-[100%] space-x-2 my-2">
                        <div className="flex mr-[10%] ml-[12%]">
                          <label className="copperplate-text">Name:</label>
                          <div className="ml-[5px]">
                            <input
                              type="text"
                              name="name"
                              value={ingredientEntries.name}
                              onChange={(e) => handleIngredientChange(e)}
                              className="w-full border-2 border-[#008000] "
                            />
                          </div>
                        </div>
                        <div className="flex">
                          <label className="copperplate-text">Quantity:</label>
                          <div className="ml-[5px]">
                            <input
                              type="text"
                              name="quantity"
                              value={ingredientEntries.quantity}
                              onChange={(e) => handleIngredientChange(e)}
                              className="w-full border-2 border-[#008000] "
                            />
                          </div>
                        </div>
                      </div>
                      <div className="w-full"></div>
                    </div>
                  </div>
                </form>
              );
            })}
          </div>
          {data.length > 0 && (
            <button
              className="copperplate-text mt-[50px] border-2   bg-black p-[10px] w-[100%] text-white text-[30px]"
              type="button"
              onClick={handleSubmit}
            >
              Submit
            </button>
          )}
        </div>
      </div>
      <div className="w-[20%]"></div>
    </div>
  );
};

export default FormPage;

// {
//   name: "Garri",
//   description: "A rich chocolate sponge cake",
//   cooking_time: "45 minutes",
//   instructions: "Mix ingredients, bake at 350 degrees for 35 minutes.",
//   img_url: "https://source.unsplash.com/1600x900/?chocolate-cake",
//   ingredients: [
//     {
//       name: "Flour",
//       quantity: "2 cups",
//     },
//     {
//       name: "Cocoa Powder",
//       quantity: "1 cup",
//     },
//   ],
// }
