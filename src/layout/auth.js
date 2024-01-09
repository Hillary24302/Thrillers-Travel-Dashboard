import { Box } from '@mui/material';
import React from 'react';



const AuthLayout = ({children}) => {
    return(
        <Box>
            {children?? <h1>Auth Layout: Missing layout children</h1>}
        </Box>
    );
}

export default AuthLayout;