import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";

const Star = () => {
  const [value, setValue] = useState(0);

  return (
    <div>
      <Box
        sx={{ display: "flex", alignItems: "center", marginLeft: "30px" }}
        component="fieldset"
        mb={3}
        borderColor="transparent"
      >
        <Rating
          style={{ fontSize: 40, alignItems: "left" }}
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </Box>
    </div>
  );
};

export default Star;
