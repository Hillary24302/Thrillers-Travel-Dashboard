import React, { useState } from 'react';
import { Box, useMediaQuery} from '@mui/material';
import { Button } from 'antd';
import './Button.css'

const ButtonGroup = () => {
  const [selectedButton, setSelectedButton] = useState('Profile');
  const isSmallScreen = useMediaQuery('(max-width:700px)');

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  return (
    <Box sx={{ display: 'flex', borderRadius: '6px', flexDirection: isSmallScreen ? "column" : "row" }}>
      <Button
        className={`ttetiary ${selectedButton === 'Profile' ? 'selected' : ''}`}
        style={{ borderRadius: '6px 0px 0px 6px' }}
        onClick={() => handleButtonClick('Profile')}
      >
        Profile
      </Button>
      <Button
        className={`ttetiary ${selectedButton === 'Security' ? 'selected' : ''}`}
        style={{ borderRadius: '0px' }}
        onClick={() => handleButtonClick('Security')}
      >
        Security
      </Button>
      <Button
        className={`ttetiary ${selectedButton === 'Business Configuration' ? 'selected' : ''}`}
        style={{ borderRadius: '0px' }}
        onClick={() => handleButtonClick('Business Configuration')}
      >
        Business Configuration
      </Button>
      <Button
        className={`ttetiary ${selectedButton === 'Preferences' ? 'selected' : ''}`}
        style={{ borderRadius: '0px' }}
        onClick={() => handleButtonClick('Preferences')}
      >
        Preferences
      </Button>
      <Button
        className={`ttetiary ${selectedButton === 'Settlement Accounts' ? 'selected' : ''}`}
        style={{ borderRadius: '0px 6px 6px 0px' }}
        onClick={() => handleButtonClick('Settlement Accounts')}
      >
        Settlement Accounts
      </Button>
    </Box>
  );
};

export default ButtonGroup;