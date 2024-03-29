import { Slider } from "antd";
import React from "react";


const marks = {
  0: '$',
  26: '$500',
  60: '$2500',
  100: {
    style: {
      color: '#f50',
    },
    label: <strong>$5000</strong>,
  },
};
const KSlider = () => {


  return (
    <div style={{marginTop: '5px'}}>
      <Slider range marks={marks} defaultValue={[26, 60]} />
    </div>
  );
}

export default KSlider