import { Typography } from "antd";
import React from "react";


const KCard = ({title, subtitle, copyIcon}) => {


  return (
    <div style={{marginTop: '15px'}}>
         <div  style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <div >
            <Typography className="fw-400 fz-10 tsecondary" >{title}</Typography>
            <Typography className="fw-600 fz-12 " >{subtitle}</Typography>
          </div>
          <div>{copyIcon}</div>
        </div>
    </div>
  );
}

export default KCard