
import { Typography } from 'antd';
import React from 'react';

const SettingsTitleCard = ({title}) => {


  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
    <Typography className=' fw-600 fz-16 tprimary'>{title}</Typography>
    <Typography className='fw-400 fz-12 tsecondary mt-5'>Take a look at your policies and the new policy to see what is covered</Typography>
  </div>
  )
  };

export default SettingsTitleCard