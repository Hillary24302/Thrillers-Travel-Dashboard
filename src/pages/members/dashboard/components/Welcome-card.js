import { Box, Typography } from '@mui/material';
import React from 'react';
import KButton from '../../../../components/button/kbutton';
import { SvgAdd } from '../../../../components/svg-icon';


const WelcomeCard = () => {
  const gradient = `linear-gradient(95.38deg, #A193FF -15.39%, #6046FE 110.23%)`;
  const baseColor = `#101928`;

  const textGradientStyle = {
    position: 'relative',
    background: `${gradient}, ${baseColor}`,
    WebkitBackgroundClip: 'text',
    color: 'transparent',
  };

  return (
    <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
    <Typography className=' fw-600 fz-24'  style={textGradientStyle}>Welcome, Eyam</Typography>
    <Box className='tprimary'>
      <KButton background='#3259DA' border='#3259DA' startIcon={<SvgAdd />} title='Top Up' color='#fff'/>
    </Box>

  </Box>
  )
  };

export default WelcomeCard