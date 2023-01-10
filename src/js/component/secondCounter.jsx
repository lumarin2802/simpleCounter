import React from "react";
import { ReactDOM } from "react";



const SecondCounter = (props) => {
	return (
		<div className="counter">
            <div className="calendar">
            <i className="far fa-clock"></i>
            </div>
            <div className="six">{props.six}</div>
            <div className="five">{props.five}</div>
            <div className="four">{props.four}</div>
            <div className="three">{props.three}</div>
            <div className="two">{props.two}</div>
            <div className="one">{props.one}</div>
        </div>
	);
};
//let counter = 0;



export default SecondCounter;
