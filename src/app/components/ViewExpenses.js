import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import {
  editBudget,
  remaining,
  selectBudget,
  selectRemaining ,
  selectSpentSoFar
} from "../features/expenses/expensesSlice.js";
import { useSelect } from "@mui/base";
const ViewExpenses = () => {
  const [isEditing, setEditing] = useState(false);

  const dispatchEvent = useDispatch();
  const netPay = useSelector(selectBudget);
  // const netRemaining = useSelect( selectRemaining );
  // const netSpent = useSelect( selectSpentSoFar );

  const onClickHandler = () => {
    setEditing(!isEditing);
  };

  return (
    <div className="container">
      <div>
        <h1 className="title">My Budget Planner</h1>
      </div>
      <div className="expenesViewContainer">
        {isEditing ? (
          <div>
            <TextField
              id="standard-basic"
              onChange={(event) =>
                dispatchEvent(editBudget(Number(event.target.value)))
              }
              label=" Budget:"
              variant="filled"
              sx={{
                width: 250,
                backgroundColor: "#dcdcdc",
                marginTop: "40px",
                type: "Number",
              }}
            />
          </div>
        ) : (
          <div className="box box-1">
            <h2 className="title-budget">Budget:${netPay}</h2>
          </div>
        )}
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={onClickHandler}
          sx={{
            width: 50,
            height: 50,
            marginLeft:.5,
         marginTop:5.5,
          }}
        >
          {isEditing ? "Accept" : "Edit"}
        </Button>

        <div className="box box-2">
          <h2>Remaining:${}</h2>
        </div>
        <div className="box box-3">
          <h2>Spent:${}</h2>
        </div>
      </div>
    </div>
  );
};

export default ViewExpenses;