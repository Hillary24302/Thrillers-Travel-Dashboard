import React from 'react'
import { Box } from "@mui/material";

const ImageCard = ({image, alto}) => {

  return (
    <Box sx={{height: '40px', width: '40px', borderRadius: '50%', background: "#FFECE5"}}>
      <img src={image} alt={alto}/>
    </Box>
  );
}
export default ImageCard