import './style.css'
import TextField from "@mui/material/TextField";

const SearchBar = () => {
  return (
      <div className="search">
        <TextField
          id="outlined-basic"
          variant="outlined"
          label="Search"
        />
      </div>
  );
};
export default SearchBar;
