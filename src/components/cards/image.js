import React from 'react'


const ImageCard = ({image, alto}) => {

  return (
    <div sx={{height: '40px', width: '40px', borderRadius: '50%', background: "#FFECE5"}}>
      <img src={image} alt={alto}/>
    </div>
  );
}
export default ImageCard