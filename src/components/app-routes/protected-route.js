import React from 'react';
import { Navigate } from "react-router-dom";



const ProtectedRoute = ({isAuthenticated, redirectPath = "/login", component: Component, layout: Layout, ...rest}) => {
    if (!isAuthenticated) {
        return <Navigate to={redirectPath} replace />;
    }
    
    return (
        <Layout>
            <Component {...rest} />
        </Layout>
    );

}

export default ProtectedRoute;
