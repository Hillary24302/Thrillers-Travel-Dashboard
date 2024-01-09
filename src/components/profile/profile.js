import React, { useState } from "react";
import {
  Menu,
  Box,
  Typography,
  IconButton,
  Divider,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import ProfileImage from "../../assets/images/profile.svg";
import { SvgCancel, SvgCopy, SvgDelete } from "../svg-icon";
import { FancyIcon } from "../fancy-icon/fancy-icon";
import KCard from "../cards/kcard";
import { translateStatus } from "../../utils/utils";
import KSwitch from "../input/switch";

const useStyles = makeStyles(() => ({
  cancelIcon: {
    position: "relative",
    top: "-8px",
    right: "-120px",
  },
  menuItemIcon: {
    marginRight: 1,
  },
  selectedItemIcon: {
    marginLeft: 1,
  },
  selectedItemIcon2: {
    marginLeft: 5,
  },
}));
const style = {
  margin: "20px",
  width: "280px",

};

const Profile = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedItem, setSelectedItem] = useState("logout");

  const classes = useStyles();

  const handleOpenDropdown = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseDropdown = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (item) => {
    const action = item.toLowerCase();

    setSelectedItem(item);
    handleCloseDropdown();

    // if (action === "logout") {
    //   dispatch(logoutAsync());
    // }
  };

  return (
    <Box>
      <Box
        sx={{
          justifyContent: "center",
          alignItems: "center",
          height: "36px",
        }}
      >
        <img
          alt="profile user"
          width="100%"
          height="100%"
          src={ProfileImage}
          style={{ cursor: "pointer" }}
          onClick={handleOpenDropdown}
        />
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseDropdown}
        style={{
          border: "1px solid rgba(0, 102, 255, 0.12)",
          borderRadius: "12px",
          marginRight: "50px",
          maxHeight: "calc(100% - 0px)",
        }}
      >
        <Box sx={style}>
          <Box>
            <IconButton
              sx={{ position: "absolute", top: "10px", right: "10px" }}
              onClick={handleCloseDropdown}
            >
              <SvgCancel />
            </IconButton>
          </Box>
          <Box
            style={{
              marginTop: "40px",
              display: "flex",
              alignItems: "center",
              background: "transparent",
            }}
          >
            <FancyIcon image={<img src={ProfileImage} />} />
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "initial",
                marginLeft: "5px",
              }}
            >
              <Typography className="fw-600 fz-14 tprimary">
                Ejike Hillary
              </Typography>
              <Typography
               className="fw-400 fz-12 tsecondary"
              >
                Added on Jul 11, 2023
              </Typography>
            </Box>
          </Box>
          <Divider sx={{ my: 2, background: "#0A020D", opacity: 0.08 }} />
          <Box>
            <Box>
              <KCard title="Airvend ID" subtitle="AV1085555879" copyIcon={<SvgCopy />}/>
            </Box>
            <Box>
              <KCard title="Email address" subtitle="a.smart@callphoneng.com" copyIcon={<SvgCopy />}/>
            </Box>
            <Box>
              <KCard title="Phone number" subtitle="(+234) 810 503 4259" copyIcon={<SvgCopy />}/>
            </Box>
            <Box>
              <KCard title="Staff address" subtitle="124, Oyediran Estate, Lagos, Nigeria, 5432" copyIcon={<SvgCopy />}/>
            </Box>
            <Box>
              <KCard title="Last visited" subtitle="Jul 11, 2023" />
            </Box>
          </Box>
          <Box>
          <KCard title="Status" subtitle={translateStatus('Active')} />
          </Box>
          <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: '30px'}}>
            <Box>
              <Typography className="tsecondary fw-400 fz-14">Blacklist this customer</Typography>
            </Box>
            <KSwitch />
          </Box>
          <Divider sx={{ my: 2, background: "#0A020D", opacity: 0.08 }} />
          <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', mt: '20px', pb: '30px'}}>
            <Box pr='10px'>
              <Typography sx={{color: '#E02020', fontFamily: 400, fontSize: '12px'}}>Delete account</Typography>
            </Box>
            <SvgDelete />
          </Box>
        </Box>
      </Menu>
    </Box>
  );
};

export default Profile;
