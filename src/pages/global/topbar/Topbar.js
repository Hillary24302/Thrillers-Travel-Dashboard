import { Box, IconButton } from "@mui/material";
import Profile from "../../../components/profile/profile";
import { SvgNotification } from "../../../components/svg-icon";

const Topbar = () => {
  return (
    <Box
      background="rgba(228, 231, 236, 1)"
      boxShadow="0px 2px 12px rgba(10, 2, 13, 0.04)"
      padding="10px"
      borderBottom='1px solid #E4E7EC'
    >
      {/* ICONS */}
      <Box display="flex" marginRight="10px">
        <Box width="100%" display="flex" justifyContent="end">
        </Box>
        <Box display="flex">
          <Box
            sx={{
              mt: "5px",
              mr: '5px',
              height: "24px",
              width: "1px",
              backgroundColor: "rgba(10, 2, 13, 0.06)",
              left: "14px",
            }}
          ></Box>
          <IconButton>
            <SvgNotification />
          </IconButton>
        </Box>
      <Box sx={{ height: 24, width: 24 }}>
        <Profile />
      </Box>
      </Box>
    </Box>
  );
};
export default Topbar;
