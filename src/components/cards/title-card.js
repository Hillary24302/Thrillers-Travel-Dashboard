
import { Typography } from 'antd';
import React from 'react';

const TitleCard = ({title, subtitle}) => {


  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
    <Typography className=' fw-600 fz-16 tprimary'>{title}</Typography>
    <Typography className='fw-400 fz-12 tsecondary mt-5'>{subtitle}</Typography>
  </div>
  )
  };

export default TitleCard