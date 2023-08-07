import TextField from "@mui/material/TextField";

const SearchBar = () => {
  return (
        <div className="container">
        <div className="searchBarContainer">
            <div className="search ">
            <h1>Expenses:</h1>
            </div>
            <div  className="search ">
            <TextField
                id="standard-basic"
                label=" Search expenses"
                variant="outlined"
                sx={{
                    width: 500,
                    type: "text",
                }}
            />
            </div>
        </div>
        </div>
  );
};

export default SearchBar;
