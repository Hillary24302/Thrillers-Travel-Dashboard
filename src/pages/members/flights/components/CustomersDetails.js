import * as React from "react";
import KButton from "../../../../components/button/kbutton";
import DropdownButton from "../../../../components/button/dropdownButton";
import RoadMap from "../../../../assets/images/map.jpg";
import { Typography } from "antd";
import { FancyImage } from "../../../../components/fancyImage/fancyImage";
import KSlider from "../../../../components/cards/KSlider";
const CustomersDetailsBoard = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "5px",
        }}
      >
        <KButton title="FILTER" />
        <DropdownButton />
      </div>
      <div
        style={{
          background: "#425C5A",
          height: "364px",
          borderRadius: "12px",
          marginTop: "15px",
          padding: "16px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography className="tprimary fz-12 fw-400">FROM</Typography>
          <Typography className="tprimary fz-12 fw-400">TO</Typography>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "10px",
          }}
        >
          <Typography className="tprimary fz-16 fw-500">JFK</Typography>
          <Typography className="tprimary fz-10 fw-400">NON-STOP</Typography>
          <Typography className="tprimary fz-16 fw-500">BOM</Typography>
        </div>
        <div style={{marginLeft: '40px'}}>
        <FancyImage width="60px" height="120px" image={<img src={RoadMap} />} />
        </div>
        <div style={{marginTop: '10px', background: '#3D5654', margin: "16px -16px 16px -16px", padding: '16px'}}>
          <div style={{display: 'flex', justifyContent: 'space-around'}}>
            <KButton title='NON STOP' background='#D6A217' border='none' color='#fff'/>
            <KButton title='ONE STOP' background='transparent' border='none' color='#fff'/>
            <KButton title='MORE STOP' background='transparent' border='none' color='#fff'/>
          </div>
          <div style={{marginTop: '10px'}}>
            <Typography className="tprimary fz-12 fw-400">PRICE</Typography>
           <KSlider />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CustomersDetailsBoard;
