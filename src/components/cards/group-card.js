import { Box } from '@mui/material';
import React from 'react';
import KDatePicker from '../input/date-picker';
import { Button } from 'antd';
import "./group-card.css"

const GroupCard = () => {


  return (
    <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderRadius: '6px'}}>
      <Button style={{borderRadius: '6px 0px 0px 6px', color: 'rgba(0, 0, 0, 0.25)'}}>90 days</Button>
      <Button style={{borderRadius: '0px', color: 'rgba(0, 0, 0, 0.25)'}}>30 days</Button>
      <KDatePicker />
      
    </Box>
  )
  };

export default GroupCard