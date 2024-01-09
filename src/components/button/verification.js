import { Button } from "antd";
import * as React from "react";
import { SvgVerify } from "../svg-icon";

const Verify = () => {
  return (
    <Button
      component="label"
      variant="contained"
      icon={<SvgVerify />}
      style={{
        background: "#E7F6EC",
        textTransform: "none",
        color: "#0F973D",
        border: "none",
        borderRadius: "12px",
        justifyContent: "center",
        textAlign: "center",
        display: "flex", 
        alignItems: "center",
      }}
    >
      Verified
    </Button>
  );
};
export default Verify;
