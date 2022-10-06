import './style.css'
import TextField from "@mui/material/TextField";
import Search  from '@mui/icons-material/Search';


const SearchBar = () => {
  return (
      <div className="search-Bar">
        <TextField
          id="outlined-basic"
          variant="standard"
          label="Search"
          color='info'
        />
          <Search  sx={{fontSize: 45 ,color: 'black' }}/>
        
        
      </div>
  );
};
export default SearchBar;
