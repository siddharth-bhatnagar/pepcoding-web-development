import React from 'react';

const styles = {
    default: {
        backgroundColor: 'blue',
        color: "black",
        padding: "10px",
        margin: "10px",
        border: "1px solid black",
    },
    disable: {
        backgroundColor: 'red',
        color: "white",
    }
}

function StylesWrapperHOC(Component) {
    return function MiddleComponent(props){
        
        let _styles = {...styles.default};
        if(props.disable){
            _styles = {..._styles, ...styles.disable};
        }
        let obj = {...props, style: _styles};
        return (
            <Component {...obj} />
        )
    }
}

export default StylesWrapperHOC;
