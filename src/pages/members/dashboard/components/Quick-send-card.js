import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Box, Typography } from "@mui/material";
import Button from '@mui/material/Button';
import { SvgRightArrow } from "../../../../components/svg-icon";
import { useNavigate } from "react-router-dom";
import { paths } from "../../../../routes/paths";
import { truncateText } from "../../../../utils/utils";
import { useMediaQuery } from '@mui/material';
import ImageCard from "../../../../components/cards/image";
import ProfileImage from "../../../../assets/images/profile.svg"


const QuickSendAvater = () => {
  const maxLength = 10;
  const isSmallScreen = useMediaQuery('(max-width: 700px)');

  const navigate = useNavigate();

  const handleSeeMoreClick = () => {
       navigate(paths.payroll);
  };
const renderItems = () => {
  const items = [];
  const totalItems = isSmallScreen ? 4 :7;

  for (let i = 0; i < totalItems; i++) {
    items.push(
      <Box key={i} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
        <ImageCard image={ProfileImage} alto="profile"/>
        <Typography className="fz-10 fw-600 tprimary mt-5">{truncateText(`Ariana Bushbaby`, maxLength)}</Typography>
        <Typography className="fz-10 fw-400 ttetiary">{truncateText(`AV108555666`, maxLength)}</Typography>
      </Box>
    );
  }

  return items;
};

  return (
    <Box>
      <Box sx={{display: 'flex', alignItems: 'center'}}>
        <Typography className="fz-12 fw-600 tprimary">Quick Send</Typography>
        <Button 
        onClick={handleSeeMoreClick}
        component="label" 
        className="fz-10 fw-400" 
        sx={{color: '#EB5017', textTransform: 'none'}}
        endIcon={ <SvgRightArrow />}>
          See more
        </Button>
      </Box>
      <Stack direction="row" sx={{borderRadius: '10px', width: '100%', p: '10px 8px', background: '#fff' }}>
        {renderItems()}
      </Stack>
    </Box>
  );
};
export default QuickSendAvater;
