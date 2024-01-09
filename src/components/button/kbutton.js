import { Button } from "antd";
import * as React from "react";

const KButton = ({ background, border, startIcon, title }) => {
  return (
    <Button
      component="label"
      variant="contained"
      icon={startIcon}
      style={{
        background: background,
        border: border,
        textTransform: "none",
        color: "#fff",
        borderRadius: "6px",
        justifyContent: "center",
        textAlign: "center",
        display: "flex", 
        alignItems: "center",
      }}
    >
      {title}
    </Button>
  );
};
export default KButton;
