import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { ButtonBase, Stack } from "@mui/material";
import { SvgEye, SvgStop } from "../../../../components/svg-icon";

const BalanceCard = () => {
  
  return (
    <Card sx={{ width: "100%", background: "#0C0B0B" }}>
      <CardContent sx={{ width: '100%', p: '16px 14px 0px 16px'}}>
        <Typography  className="tsecondary fw-400 fz-12" textAlign='start'>
          Available Balance
        </Typography>
        <Stack direction="row" className="tw mt-10" justifyContent= 'space-between'>
          <Typography className="tw fw-600 fz-18">$140,000.00</Typography>
          <ButtonBase>
            <SvgEye />
          </ButtonBase>
        </Stack>
      </CardContent>
      <CardActions sx={{ width: '100%', p: '0px 20px 20px 20px', mt: '6px'}}>
      <Stack direction="row" className="tw " justifyContent= 'space-between' textAlign='center' spacing='5px'>
          <Typography className="tsecondary fw-400 fz-12" >Payout Balance:</Typography>
          <Typography className="tw fw-600 fz-12">$139,900.99</Typography>
          <ButtonBase>
            <SvgStop />
          </ButtonBase>
        </Stack>
      </CardActions>
    </Card>
  );
};
export default BalanceCard;
