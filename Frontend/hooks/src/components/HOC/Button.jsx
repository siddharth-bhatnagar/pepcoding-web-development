import React from 'react';
import StylesWrapper from './StylesWrapper';

function Button(props) {
    return (
        <div>
            <button style={props.styles}>This is a Button</button>
        </div>
    )
}

export default StylesWrapper(Button);
