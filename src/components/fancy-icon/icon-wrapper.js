
import React from 'react';
import { SvgMenus } from '../svg-icon';
import { Button } from 'antd';

export const IconWrapper = ({onClick}) => {
    return (
        <Button onClick={onClick} sx={{display: 'flex', border: '1px solid #E4E7EC', height: '40px', width: '40px', borderRadius: '4px', justifyContent: 'center', alignItems: 'center'}}>
            <SvgMenus />
        </Button>
    );
}



