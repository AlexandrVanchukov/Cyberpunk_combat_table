import React from 'react';
import classes from './Button.module.css';

const Button = ({children, ...props}) => {
    let style = classes.myBtn;
    if(props.dis == true){
        props.onClick = {};
        style = classes.myBtnDis
    }
    return (
        <button {...props} className={style} type={"button"}>
            {children}
        </button>
    );

};

export default Button;