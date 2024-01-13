import * as React from "react";
import Stack from "@mui/material/Stack";
import { Box, Typography, useMediaQuery } from "@mui/material";
import Button from "@mui/material/Button";
import { SvgRightArrow } from "../../../../components/svg-icon";
import { useNavigate } from "react-router-dom";
import { paths } from "../../../../routes/paths";
import ImageCard from "../../../../components/cards/image";
import ProfileImage from "../../../../assets/images/profile.svg"
import { truncateText } from "../../../../utils/utils";

const UsersAvaterCard = () => {
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery('(max-width:900px)');
  const maxLength = 15;

  const handleSeeMoreClick = () => {
    navigate(paths.users);
  };
  const renderItems = () => {
    const items = [];
    const totalItems = 7;

    for (let i = 0; i < totalItems; i++) {
      items.push(
        <Box
        key={i}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <ImageCard image={ProfileImage} alto="profile"/>
            <Box sx={{ display: "flex", ml: "10px", flexDirection: "column" }}>
              <Typography className="fz-10 fw-600 tprimary mt-5">
                { isSmallScreen ? "Ejike Hillary" : truncateText(` Ejike Hillary`, maxLength)}
              </Typography>
              <Typography className="fz-10 fw-400 ttetiary">
              {isSmallScreen ? "e.hillary@callphoneng.com" : truncateText(`e.hillary@callphoneng.com`, maxLength)}
              </Typography>
            </Box>
          </Box>
          <Box>
            <Typography
              className="fz-10 fw-600 tsecondary"
              sx={{
                "@media screen and (max-width: 1150px)": {
                  mt: '-5px',
                  ml: '-10px'
                },
              }}
            >
              Admin block
            </Typography>
          </Box>
        </Box>
      );
    }

    return items;
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography className="fz-12 fw-600 tprimary">Users</Typography>
        <Button
          onClick={handleSeeMoreClick}
          component="label"
          className="fz-10 fw-500"
          sx={{
            color: '#EB5017',
            textTransform: 'none',
            marginRight: '2px',
            "& .MuiButton-endIcon": {
              marginLeft: '2px',
              marginBottom: '2px'
            }
          }}
          endIcon={<SvgRightArrow />}
        >
          See more
        </Button>
      </Box>
      <Stack
        direction="column"
        spacing={1}
        sx={{ width: "100%", p: "16px 10px", background: "#fff" }}
      >
        {renderItems()}
      </Stack>
    </Box>
  );
};
export default UsersAvaterCard;
