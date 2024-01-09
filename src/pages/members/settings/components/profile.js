import { Typography } from "antd";
import UploadButton from "../../../../components/button/upload";
import { FancyIcon } from "../../../../components/fancy-icon/fancy-icon";
import profileImage from "../../../../assets/images/image.svg";
import { useMediaQuery } from "@mui/material";

const Profile = () => {
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
        <FancyIcon
          image={<img src={profileImage} />}
          verified={true}
          width="120px"
          height="120px"
          bigSize={true}
        />
      </div>
    </div>
  );
};
export default Profile;
