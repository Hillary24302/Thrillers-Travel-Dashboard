import * as React from "react";
import { IconWrapper } from "../../../../components/fancyImage/icon-wrapper";
import { SvgCollapse, SvgStat, SvgStop } from "../../../../components/svg-icon";
import { Typography } from "antd";

const CustomCard = () => {
  return (
    <div
      style={{
        display: "flex",
        background: "#E1ECEB",
        borderRadius: "24px",
        justifyContent: "space-around",
        alignItems: "center",
        padding: '6px'
      }}
    >
      <div className="fz-16 fw-600" style={{display: 'flex', gap: '6px' }}>
        <IconWrapper icon={<SvgCollapse color="#3D5654"/>}/>
        <Typography>NEW YORK (JFK)</Typography>
      </div>
      <div>
        <IconWrapper type="circle"  icon={<SvgStat color="#fff"/>}/>
      </div>
      <div className="fz-16 fw-600" style={{display: 'flex', gap: '6px' }}>
        <IconWrapper icon={<SvgCollapse color="#3D5654"/>}/>
        <Typography>MUMBAI (BOM)</Typography>
      </div>
    </div>
  );
};
export default CustomCard;
