import * as React from 'react';

const Link = props => {
    const title = props.children ? props.children : props.href;
    return (
        <a href={props.href} rel="noopener" target="_blank">
            {title}
        </a>
    );
};

export default Link;
