
import React from 'react';
import './fancy-icon.css';
import { SvgVerification, SvgVerificationBig } from '../svg-icon/index';

export const FancyIcon = ({ image, verified = false, width, height, bigSize= false }) => {

    return (
        <span className= 'fancy-icon' style={{width: width, height: height}}>
            {image}
            {verified && bigSize ? <SvgVerificationBig className='verification-icon' /> : (verified ? <SvgVerification className='verification-icon' /> : null)}
        </span>
    );
}



