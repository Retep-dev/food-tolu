"use client";
import axios from "axios";
import React, { useState } from "react";

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

  // const data: any = [formEntries];
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

  console.log(formEntries);
  const handleIngredientChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number,
    i: number
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
  // console.log(formEntries);
  const handleAddEntry = () => {
    const prevData = data;
    const prevFormEntries = formEntries;
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
    console.log(data);
    setData([...prevData, formEntries]);
    setCurItem(data.length);
  };
  const handleingredientAddEntry = (index: number) => {
    const prevData = ingredientsData;
    prevData?.push(ingredientEntries);
    setIngredientsData(prevData);
    setingredientEntries({
      name: "",
      quantity: "",
    });

    // const prevFormData = data;
    // prevFormData[index].ingredient = ingredientsData;
    // setData(prevFormData);
    console.log(data);
  };

  console.log(data[curItem]);

  const handleSubmit = () => {
    // Handle submission logic here

    const prevFormEntries = formEntries;
    prevFormEntries.ingredient = [ingredientEntries];
    console.log(prevFormEntries);
    return;
    submitRecipes();
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
  const submitRecipes = () => {
    let data = JSON.stringify([
      {
        name: "Garri",
        description: "A rich chocolate sponge cake",
        cooking_time: "45 minutes",
        instructions: "Mix ingredients, bake at 350 degrees for 35 minutes.",
        img_url: "https://source.unsplash.com/1600x900/?chocolate-cake",
        ingredients: [
          {
            name: "Flour",
            quantity: "2 cups",
          },
          {
            name: "Cocoa Powder",
            quantity: "1 cup",
          },
        ],
      },
      {
        name: "Vegetable Soup",
        description: "A hearty vegetable soup",
        cooking_time: "30 minutes",
        instructions: "Boil vegetables in stock until tender.",
        img_url: "https://source.unsplash.com/1600x900/?vegetable-soup",
        ingredients: [
          {
            name: "Carrot",
            quantity: "2 cups",
          },
          {
            name: "Potato",
            quantity: "3 cups",
          },
        ],
      },
      {
        name: "Chocolate Cake Deluxe",
        description: "A luxurious chocolate sponge cake with extra cocoa",
        cooking_time: "50 minutes",
        instructions:
          "Mix ingredients thoroughly, bake at 350 degrees for 40 minutes.",
        img_url: "https://source.unsplash.com/1600x900/?chocolate-cake-deluxe",
        ingredients: [
          {
            name: "Flour",
            quantity: "2 cups",
          },
          {
            name: "Cocoa Powder",
            quantity: "1.5 cups",
          },
          {
            name: "Chocolate Chips",
            quantity: "1 cup",
          },
        ],
      },
      {
        name: "Quick Vegetable Soup",
        description: "A simple and quick vegetable soup",
        cooking_time: "25 minutes",
        instructions: "Simmer all vegetables until fully cooked.",
        img_url: "https://source.unsplash.com/1600x900/?quick-vegetable-soup",
        ingredients: [
          {
            name: "Carrot",
            quantity: "2 cups",
          },
          {
            name: "Peas",
            quantity: "1 cup",
          },
        ],
      },
      {
        name: "Banana Bread",
        description: "Moist and hearty banana bread",
        cooking_time: "60 minutes",
        instructions:
          "Mix all ingredients and bake at 375 degrees for 50 minutes.",
        img_url: "https://source.unsplash.com/1600x900/?banana-bread",
        ingredients: [
          {
            name: "Banana",
            quantity: "3 large",
          },
          {
            name: "Flour",
            quantity: "2 cups",
          },
        ],
      },
      {
        name: "Apple Pie",
        description: "Classic apple pie with a flaky crust",
        cooking_time: "1 hour 20 minutes",
        instructions: "Prepare crust, fill with apples and spices, and bake.",
        img_url: "https://source.unsplash.com/1600x900/?apple-pie",
        ingredients: [
          {
            name: "Apple",
            quantity: "6 medium",
          },
          {
            name: "Flour",
            quantity: "3 cups",
          },
          {
            name: "Butter",
            quantity: "1 cup",
          },
        ],
      },
      {
        name: "Caesar Salad",
        description:
          "Crisp lettuce and croutons dressed with parmesan cheese and Caesar dressing",
        cooking_time: "15 minutes",
        instructions: "Toss lettuce with dressing, cheese, and croutons.",
        img_url: "https://source.unsplash.com/1600x900/?caesar-salad",
        ingredients: [
          {
            name: "Romaine Lettuce",
            quantity: "3 heads",
          },
          {
            name: "Parmesan Cheese",
            quantity: "1/2 cup",
          },
          {
            name: "Croutons",
            quantity: "2 cups",
          },
        ],
      },
    ]);

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://da5d-102-89-22-194.ngrok-free.app/recipes",
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
      <div className="w-1/5"></div>
      <div className="w-3/5 p-[10%] pt-[5%] border-2 border-[#008000]">
        <h1 className="border-2 border-white w-[160px] p-[15px] mb-[30px] mt-[20px] bg-[#008000]  text-white">
          RECIPE FORM
        </h1>
        <div className="flex flex-wrap">
          {data.map((entry: any, index: number) => (
            <h2
              onClick={() => setCurItem(index)}
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
        </div>
        <div>
          <form>
            <div>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={formEntries.name}
                onChange={(e) => handleChange(e, 1, null)}
                className="w-[500px] ml-[62px] border-2 border-[#008000] h-[40px]"
              />
            </div>
            <div className="flex flex-row">
              <label className="mt-[37px]">Description:</label>
              <div>
                <textarea
                  name="description"
                  value={formEntries.description}
                  onChange={(e) => handleChange(e, 1, null)}
                  className="w-[500px] ml-[22px] border-2 border-[#008000] h-[40px] mt-[30px]"
                />
              </div>
            </div>
            <div className="flex flex-row">
              <label className="mt-[37px]">image url:</label>
              <div>
                <textarea
                  name="image"
                  value={formEntries.image}
                  onChange={(e) => handleChange(e, 1, null)}
                  className="w-[500px] ml-[22px] border-2 border-[#008000] h-[40px] mt-[30px]"
                />
              </div>
            </div>
            <div className="flex flex-row">
              <label className="mt-[37px]">CookingTime:</label>
              <div>
                <input
                  type="text"
                  name="cookingTime"
                  value={formEntries.cookingTime}
                  onChange={(e) => handleChange(e, 1, null)}
                  className="w-[500px] ml-[8px] border-2 border-[#008000] h-[40px] mt-[30px]"
                />
              </div>
            </div>
            <div className="flex flex-row">
              <label className="mt-[37px]">Instructions:</label>
              <div>
                <textarea
                  name="instructions"
                  value={formEntries.instructions}
                  onChange={(e) => handleChange(e, 1, null)}
                  className="w-[500px] ml-[20px] border-2 border-[#008000] h-[40px] mt-[30px]"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label className="mt-[37px]">Ingredient:</label>
              <div className="flex flex-wrap items-center">
                {ingredientsData.map((entry, index) => (
                  <h2
                    onClick={() => setCurIngrItem(index)}
                    key={index}
                    style={{
                      background: curIngrItem == index ? "#008000" : "",
                      color: curIngrItem != index ? "#008000" : "white",
                    }}
                    className="border-2 cursor-pointer border-[#008000]  p-[5px] px-[10px] bg-white text-[#008000] mb-[20px]"
                  >
                    {index + 1}
                  </h2>
                ))}
              </div>

              <div className="flex w-[100%] space-x-2 my-2">
                <label className="mt-[37px]">name:</label>
                <div>
                  <input
                    type="text"
                    name="name"
                    // value={ingredientEntry.name}
                    onChange={(e) => handleChange(e, 1, null)}
                    className=" border-2 border-[#008000] "
                  />
                </div>
                <div>
                  <label className="mt-[37px]">quantity:</label>
                  <input
                    type="text"
                    name="quantity"
                    // value={ingredientEntry.quantity}
                    onChange={(e) => handleChange(e, 1, null)}
                    className=" border-2 border-[#008000] "
                  />
                </div>
              </div>
              <div className="w-full">
                <button
                  className=" border-2 w-fit ml-auto mr-[20px] bg-[#008000] p-[10px] text-white"
                  type="button"
                  onClick={() => handleingredientAddEntry(1)}
                >
                  Add more
                </button>
              </div>
            </div>
          </form>
        </div>
        <button
          className=" border-2  mr-[20px] bg-[#008000] p-[10px] text-white"
          type="button"
          onClick={() => handleAddEntry()}
        >
          Add more
        </button>
        {data.length > 0 && (
          <button
            className=" border-2  mr-[20px] bg-black p-[10px] w-[500px] text-white"
            type="button"
            onClick={handleSubmit}
          >
            Submit
          </button>
        )}
      </div>
      <div className="w-1/5"></div>
    </div>
  );
};

export default FormPage;
