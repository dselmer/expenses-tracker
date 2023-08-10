import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

import { add } from "../features/expenses/expensesSlice.js";



const AddItem = () => {
  const [isItemName, setItemName] = useState("");
  const [isItemCost, setItemCost] = useState("");

  const handleChangeName = (e) => {
    setItemName(e.target.value);
  };

  const handleChangeCost = (e) => {
    setItemCost(e.target.value);
  };


  const onClikedHandler=()=>{
    dispatchEvents(add(isItemName.name,isItemCost.cost))
  }

  const dispatchEvents = useDispatch(); 

  return (
    <div className="container">
      <div className="searchBarContainer">
        <div className="search "></div>
        <div className="addItem-container ">
          <TextField
            id="standard-basic"
            label=" Add expenses"
            variant="outlined"
            onChange={(event) => handleChangeName(event)}
            sx={{
              width: 500,
              type: "text",
            }}
          />
           <TextField
            id="standard-basic"
            label=" Add cost"
            variant="outlined"
            onChange={(event) => handleChangeCost(event)}
            sx={{
              width: 200,
              type: "text",
            }}
          />
            <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={onClikedHandler}
          sx={{
            width: 50,
            height: 50,
            type:"number",
            marginTop:.5,
          }}
        >
          Add
        </Button>
        </div>
      </div>
      
    </div>
  );
};

export default AddItem;
