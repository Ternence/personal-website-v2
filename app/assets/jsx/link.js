import React from 'react';

const Link = props => {
    const title = props.children ? props.children : props.url;
    return (<a href={props.url} target="_blank">{title}</a>);
};

export default Link;
