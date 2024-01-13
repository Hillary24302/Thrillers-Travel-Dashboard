import { Form, Typography } from "antd";
import KInput from "../../../../components/input/input";
import { useMediaQuery } from "@mui/material";
import KTextArea from "../../../../components/input/textArea";

const PersonalInformation = () => {
  const isSmallScreen = useMediaQuery('(max-width:700px)');
  return (
    <div
      style={{
        display: "flex",
        flexDirection: isSmallScreen ? "column" : "row",
        justifyContent: "flex-start",
      }}
    >
      <div style={{ paddingRight: "120px"}}>
        <Typography className="fw-600 fs-14 tprimary" style={{width: '170px'}}>
          Personal Information
        </Typography>
        <Typography className="fw-400 fs-12 tsecondary mt-5">
        Staff personal details here.
        </Typography>
      </div>
      <div
        style={{
          display: "flex",
          marginTop: isSmallScreen ? "20px" : "none",
          width: '100%',
        }}
      >
        <Form style={{width: '100%'}}>
            <div>
              <KInput title="Role Name" placeholder="Account Manager" />
            </div>
            <div style={{marginTop: '10px'}}>
              <KTextArea title="Role Description" placeholder="a.smart@callphoneng.com" />
            </div>
        </Form>
      </div>
    </div>
  );
};
export default PersonalInformation;
