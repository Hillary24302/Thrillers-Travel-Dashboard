import { Button } from "antd";
import * as React from "react";

const KButton = ({ background, border, startIcon, title, color }) => {
  return (
    <Button
      component="label"
      variant="contained"
      icon={startIcon}
      style={{
        background: background,
        border: border,
        textTransform: "none",
        // padding: "6px 18px",
        color: color,
        borderRadius: "14px",
        justifyContent: "center",
        textAlign: "center",
        fontSize: '10px',
        display: "flex", 
        alignItems: "center",
      }}
    >
      {title}
    </Button>
  );
};
export default KButton;
