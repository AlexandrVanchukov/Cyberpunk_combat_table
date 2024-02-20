import React from 'react';
import classes from './Button.module.css';

const Button = ({children, ...props}) => {
    let style

    switch(props.buttonStyle) {
        case 'stroke-red':
            if(props.dis === true){
                props.onClick = {};
                style = classes.disStrokeRedButton;
            }
            else{
                style = classes.strokeRedButton;
            }
            break;
        case 'red':
            if(props.dis === true){
                props.onClick = {};
                style = classes.disRedButton;
            }
            else{
                style = classes.redButton;
            }
            break;
    }


    return (
        <button {...props} className={style} type={"button"}>
            {children}
        </button>
    );

};

export default Button;