import React from 'react';

const Link = props => {
    const title = props.children ? props.children : props.url;
    return (<a href={props.url} rel="noopener" target="_blank">{title}</a>);
};

export default Link;
