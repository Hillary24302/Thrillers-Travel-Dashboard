import { Box, IconButton } from "@mui/material";
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({backgroundColor, placeholder, color, border}) => {

  return (
    <Box display='flex' backgroundColor={backgroundColor} borderRadius='4px'  border= {border} width='100%'>
      <IconButton type="button"  sx={{pr: 1, color: {color}}}><SearchIcon /></IconButton>
    <InputBase size="small" sx={{ml: 1, flex: 1, width: '100%', color: {color}}} placeholder={placeholder} />
    </Box>
  )
}
export default SearchBar