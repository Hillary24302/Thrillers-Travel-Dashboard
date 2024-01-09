import { Form, Typography } from "antd";
import KInput from "../../../../components/input/input";
import { useMediaQuery } from "@mui/material";

const PersonalInformation = () => {
  const isSmallScreen = useMediaQuery('(max-width:700px)');
  return (
    <div
      style={{
        border: "2px solid ed",
        display: "flex",
        flexDirection: isSmallScreen ? "column" : "row",
        justifyContent: "flex-start",
        paddingBottom: '60px'
      }}
    >
      <div style={{ paddingRight: "120px" }}>
        <Typography className="fw-600 fs-14 tprimary mt-20">
          Personal Information
        </Typography>
        <Typography className="fw-400 fs-12 tsecondary mt-5">
        Staff personal details here.
        </Typography>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: isSmallScreen ? "start" :  "center",
          alignItems: isSmallScreen ? "start" :  "center",
          marginTop: isSmallScreen ? "20px" : "none"
        }}
      >
        <Form>
          <div>
            <div>
              <KInput title="Role Name" placeholder="Account Manager" />
            </div>
          </div>
          <div className="mt-15">
          gjjj
          </div>
        </Form>
      </div>
    </div>
  );
};
export default PersonalInformation;
