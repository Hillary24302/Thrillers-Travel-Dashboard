import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Divider, Stack } from "@mui/material";

const EnquiriesCard = () => {
  return (
    <Card sx={{ width: "100%", background: "#F0F2F5", border: '2px solid #F2BCBA' }}>
      <CardContent sx={{ width: '100%', p: '12px 12px 0px 12px'}}>
        <Typography  className="tprimary fw-400 fz-14" textAlign='start'>
        Name Enquiries
        </Typography>
        <Typography  className="fw-400 fz-12 ttetiary" mt='3px' textAlign='start'>
        Please update/verify your information before
        </Typography>
      </CardContent>
      <CardActions sx={{ width: '100%', p: '0px 14px 11px 14px'}}>
      <Stack direction="row" className="tw mt-5" justifyContent= 'space-between' spacing='16px'>
         <Box>
          <Typography className="tsecondary fz-12" sx={{color: '#475367'}}>Successful</Typography>
          <Typography sx={{background: '#E7F6EC', borderRadius: '24px', color: '#0F973D', p: '2px 20px 2px 20px'}}>60</Typography>
         </Box>
         <Divider orientation="vertical" flexItem />
         <Box>
         <Typography className="tsecondary fz-12" sx={{color: '#475367'}}>Pending</Typography>
          <Typography sx={{background: '#FEF6E7', borderRadius: '24px', color: '#F3A218', p: '2px 20px 2px 20px'}}>24</Typography>
         </Box>
         <Divider orientation="vertical" flexItem />
         <Box>
         <Typography className="tsecondary fz-12" sx={{color: '#475367'}}>Failed</Typography>
          <Typography sx={{background: '#FFECE5', borderRadius: '24px', color: '#EB5017', p: '2px 20px 2px 20px'}}>24</Typography>
         </Box>
        </Stack>
      </CardActions>
    </Card>
  );
};
export default EnquiriesCard;
