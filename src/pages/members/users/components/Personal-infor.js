import { Typography } from "antd";
import UploadButton from "../../../../components/button/upload";
import { FancyIcon } from "../../../../components/fancy-icon/fancy-icon";
import profileImage from "../../../../assets/images/image.svg";
import { useMediaQuery } from "@mui/material";

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
      <div style={{ paddingRight: "120px" }}>
        <Typography className="fw-600 fs-14 tprimary mt-20">
          Profile photo
        </Typography>
        <Typography
          className="fw-400 fs-12 tsecondary mt-5"
          style={{ width: "200px" }}
        >
          This image will be displayed on your profile
        </Typography>
        <div className="mt-20">
          <UploadButton />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: isSmallScreen ? "start" :  "center",
          alignItems: isSmallScreen ? "start" :  "center",
          marginTop: isSmallScreen ? "10px" : "none"
        }}
      >
                <Form>Staff personal details here.
          <div style={{ display: "flex", gap: 10 }}>
            <div>
              <KInput title="Full name" placeholder="Eyam Smart Ayang" />
            </div>
            <div>
              <KInput title="Phone number" placeholder="08128774639" />
            </div>
          </div>
          <div className="mt-15">
            <KInput
              title="Email address"
              placeholder="e.hillary@callphoneng.com"
              disabled
            />
            <div className="mt-5">
              <Verify />
            </div>
          </div>
          <div className="mt-15">
            <KInput
              title="Role"
              placeholder="Account manager"
              disabled
            />
          </div>
        </Form>
      </div>
    </div>
  );
};
export default PersonalInformation;
