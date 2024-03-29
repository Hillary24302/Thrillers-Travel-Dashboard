import * as React from "react";
import { IconWrapper } from "../../../../components/fancyImage/icon-wrapper";
import { Typography } from "antd";

const MiniCustomCard = ({icon, title, background}) => {
  const backgroundColor = background || "#E1ECEB";
  return (
    <div
      style={{
        display: 'flex',
        gap: '10px',
        background: backgroundColor,
        borderRadius: "24px",
        justifyContent: "center",
        alignItems: "center",
        padding: "9px",
      }}
    >
      <div>
        <IconWrapper icon={icon} />
      </div>
        <Typography className="fw-500 fz-12">{title}</Typography>
    </div>
  );
};
export default MiniCustomCard;
