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

  const [data, setData]: any = useState([formEntries]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number,
    ingredientIndex: any
  ) => {
    const { name, value } = e.target;

    if (ingredientIndex != null) {
      const updatedFormData = [...data];
      updatedFormData[index].ingredient[ingredientIndex][`${name}`] = value;
      setData(updatedFormData);
      return;
    }
    const updatedFormData = [...data];
    updatedFormData[index][`${name}`] = value;
    setData(updatedFormData);
  };

  const handleAddEntry = () => {
    const updatedFormData = [...data];
    updatedFormData.push({
      name: "",
      description: "",
      cookingTime: "",
      image: "",
      instructions: "",
      ingredient: [{ name: "", quantity: "" }],
    });
    setData(updatedFormData);
  };

  const handleingredientAddEntry = (index: number) => {
    const updatedFormData = [...data];
    updatedFormData[index].ingredient.push({ name: "", quantity: "" });
    setData(updatedFormData);
  };

  const handleSubmit = () => {
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
    <div className="mt-[160px] flex flex-row bg-white">
      {/* <div className="w-[20%]"></div>/// */}
      <div className="w-[80%] bg-[#ccc] max-w-[800px] mx-auto border-2 border-[#008000]">
        <div className="h-[fit] items-center w-[fit]">
          <h1 className="copperplate-text text-[60px]  p-[15px] ml-[13%]  mt-[50px] text-[#008000] ">
            ADD RECIPES
          </h1>
        </div>
        <div className="w-[100%] p-[15%] pt-[5%] ">
          <div>
            {data.map((entry: any, index: number) => {
              return (
                <form
                  className=""
                  style={{ borderTop: "2px solid #008000" }}
                  key={index}
                >
                  <div className="flex flex-row ">
                    <div className="copperplate-text border-2    bg-[#008000] m-[40px] p-[10px] ml-0 h-[50px] w-fit text-white">
                      Entry {index + 1}
                    </div>
                  </div>
                  <div className="flex  flex-row">
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
                    <div className="flex flex-col w-[80%]">
                      <input
                        type="text"
                        name="name"
                        value={entry.name}
                        onChange={(e) => handleChange(e, index, null)}
                        className="w-[full]  border-2 border-[#008000] h-[40px]"
                      />
                      <input
                        name="description"
                        value={entry.description}
                        onChange={(e) => handleChange(e, index, null)}
                        className="w-[full] border-2 border-[#008000] h-[40px] mt-[30px]"
                      />
                      <input
                        name="image"
                        value={entry.image}
                        onChange={(e) => handleChange(e, index, null)}
                        className="w-[full] border-2 border-[#008000] h-[40px] mt-[30px]"
                      />
                      <input
                        type="text"
                        name="cookingTime"
                        value={entry.cookingTime}
                        onChange={(e) => handleChange(e, index, null)}
                        className="w-[full] border-2 border-[#008000] h-[40px] mt-[30px]"
                      />
                      <input
                        name="instructions"
                        value={entry.instructions}
                        onChange={(e) => handleChange(e, index, null)}
                        className="w-[full] border-2 border-[#008000] h-[40px] mt-[30px]"
                      />
                    </div>
                  </div>
                  <div className="mt-[30px]">
                    <label className="copperplate-text mt-[37px]">
                      Ingredient:
                    </label>
                    <div className="flex flex-col mt-[20px] mb-[70px]">
                      <div className="flex flex-row ">
                        <button
                          className="copperplate-text border-2 ml-[60px]  bg-[#008000] p-2 h-[fit] w-[fit] text-white"
                          type="button"
                          onClick={() => handleingredientAddEntry(index)}
                        >
                          +
                        </button>
                      </div>

                      {entry.ingredient.map(
                        (ingrdt: any, ingrdtIndex: number) => {
                          return (
                            <div
                              key={ingrdt}
                              className="flex w-[100%] space-x-2 my-2"
                            >
                              <div className="flex mr-[10%] ml-[12%]">
                                <label className="copperplate-text">
                                  Name:
                                </label>
                                <div className="ml-[5px]">
                                  <input
                                    type="text"
                                    name="name"
                                    value={ingrdt.name}
                                    onChange={(e) =>
                                      handleChange(e, index, ingrdtIndex)
                                    }
                                    className="w-full border-2 border-[#008000] "
                                  />
                                </div>
                              </div>
                              <div className="flex">
                                <label className="copperplate-text">
                                  Quantity:
                                </label>
                                <div className="ml-[5px]">
                                  <input
                                    type="text"
                                    name="quantity"
                                    value={ingrdt.quantity}
                                    onChange={(e) =>
                                      handleChange(e, index, ingrdtIndex)
                                    }
                                    className="w-full border-2 border-[rgb(0,128,0)] "
                                  />
                                </div>
                              </div>
                            </div>
                          );
                        }
                      )}

                      <div className="w-full"></div>
                    </div>
                  </div>
                </form>
              );
            })}
            <div className="flex flex-row ">
              <button
                className="copperplate-text border-2  mx-auto items-center bg-black p-[10px] h-[50px] w-[fit] text-white"
                type="button"
                onClick={() => handleAddEntry()}
              >
                Add more entry
              </button>
            </div>
          </div>
          {data.length > 0 && (
            <button
              className="copperplate-text mt-[50px] border-2   bg-[#008000] p-[10px] w-[100%] text-white text-[30px]"
              type="button"
              onClick={handleSubmit}
            >
              Submit
            </button>
          )}
        </div>
      </div>
      {/* <div className="w-[20%]"></div> */}
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
