import React from 'react';


const DefaultRoute = ({component: Component, layout: Layout, ...rest}) => {
    return (
        <Layout>
            <Component {...rest} />
        </Layout>
    );

}

export default DefaultRoute;
