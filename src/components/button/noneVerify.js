import { Button } from "antd";
import * as React from "react";
import { SvgVerify } from "../svg-icon";

const NoneVerify = () => {
  return (
    <Button
      component="label"
      variant="contained"
      style={{
        background: "#D0D5DD",
        textTransform: "none",
        color: "#fff",
        border: "none",
        borderRadius: "12px",
        justifyContent: "center",
        textAlign: "center",
        display: "flex", 
        alignItems: "center",
      }}
    >
      None Verified
    </Button>
  );
};
export default NoneVerify;
