import React from "react";


const iconTypes = [
    'default', 'circle', 'square'
  ];
export const IconWrapper = ({ icon, type = 'default' }) => {

    const iconType = iconTypes.includes(type)? type : iconTypes[0];
    const getIconStyle = () => {
        switch (iconType) {
          case 'circle':
            return {
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              background: '#3D5654',
            };
          case 'square':
            return {
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '50px',
              height: '50px',
              background: 'green',
            };
          default:
            return {
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              background: "transparent"
            };
        }
      };
    

  return (
    <div style={getIconStyle()}>
    {icon}
  </div>
  );
};
