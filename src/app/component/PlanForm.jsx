import React, { useState } from "react";
import { TextField, IconButton } from "@mui/material";
import { Add, Close } from "@mui/icons-material";
import "./PlanForm.css"; // Assuming you have a separate CSS file

const PlanForm = () => {
  const [inputs, setInputs] = useState(["", "", ""]);

  const handleInputChange = (index, event) => {
    const newInputs = [...inputs];
    newInputs[index] = event.target.value;
    setInputs(newInputs);
  };

  const handleAddInput = () => {
    setInputs([...inputs, ""]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted!", inputs);
  };

  return (
    <div className="form-container">
      <h1 className="copperplate-text">Tolzrecipes</h1>
      <h2 className="copperplate-text">Would you like to cook?</h2>
      <p className="copperplate-text">
        Input the recipes you have, Let us suggest what you can make with it
      </p>
      <form onSubmit={handleSubmit}>
        {inputs.map((input, index) => (
          <div key={index} className="input-container">
            <TextField
              value={input}
              onChange={(event) => handleInputChange(index, event)}
              placeholder={`Recipe ${index + 1}`}
            />
            {index >= 2 && (
              <IconButton onClick={handleAddInput}>
                <Add />
              </IconButton>
            )}
            {index >= 2 && index === inputs.length - 1 && (
              <IconButton onClick={() => setInputs(inputs.slice(0, index))}>
                <Close />
              </IconButton>
            )}
          </div>
        ))}
        <button type="submit">Get possible meals</button>
      </form>
    </div>
  );
};

export default PlanForm;
