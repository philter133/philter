import React, { useState } from "react";
import "../CSS/btn.css";

const STATES = ["btn-active", "btn-inactive"]

export const Button = ({
    children,
    type, 
    onClick,
    btnState, 
    btnSize = "mainSize"}) => {

        
        return (
            <button className={`btn ${btnSize} ${btnState}`} onClick={onClick} type={type}>
                {children}
            </button>
        )
    };