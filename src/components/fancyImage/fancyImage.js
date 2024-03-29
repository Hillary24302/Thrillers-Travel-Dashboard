
import React from 'react';
import './fancyImage.css';

export const FancyImage = ({ image, width, height, border, padding }) => {

    return (
        <span className= 'fancy-icon' style={{width: width, height: height, border: border, padding: padding}}>
            {image}
        </span>
    );
}



