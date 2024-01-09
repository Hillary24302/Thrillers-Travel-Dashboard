import React from 'react';

import './container.css'

const Container = ({className, children, fluid= false, ...rest}) => {
    const containerClassName = `container ${fluid ? 'fluid' : ''} ${className || ''}`;
    
    return(
        <section className={containerClassName} {...rest}>
            {
                children
            }
        </section>
    );
}

export default Container;