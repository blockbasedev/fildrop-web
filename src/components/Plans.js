import React from 'react';
import { useState } from "react";
import Registration from './Registration';

import free from './free.png';
import essential from './15GB.png';
import pro from './1TB.png';

const Plans = (props) => {
    const [show, toggleShow] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);

    const handleButtonClick = (plan, size) => {
        toggleShow(true);
        setSelectedPlan(plan);
        setSelectedSize(size);
    };

    return ( <
            div className = "Plans" >
            Choose type of Storage <
            div className = "storage" >
            <
            button onClick = {
                () => handleButtonClick("Basic", "1 GB")
            }
            type = "button"
            className = { `btn btn-dark btn-square-md ${selectedPlan === "Basic" ? "selected" : "btn-selected"}` } >
            <
            img src = { free }
            alt = "free" / >
            <
            div className = "size" > 1 GB < /div> <
            div className = "name" > Basic(Free) < /div> < /
            button >

            <
            button onClick = {
                () => handleButtonClick("Essential", "15 GB")
            }
            type = "button"
            className = { `btn btn-dark btn-square-md ${selectedPlan === "Essential" ? "selected" : "btn-selected"}` } >
            <
            img src = { essential }
            alt = "free" / >
            <
            div className = "size" > 15 GB < /div> <
            div className = "name" > Essential(Paid) < /div> < /
            button >

            <
            button onClick = {
                () => handleButtonClick("Pro", "1 TB")
            }
            id = "button"
            type = "button"
            className = { `btn btn-dark btn-square-md ${selectedPlan === "Pro" ? "selected" : "btn-selected"}` } >
            <
            img src = { pro }
            alt = "free" / >
            <
            div className = "size" > 1 TB < /div> <
            div className = "name" > Pro(Paid) < /div> < /
            button > <
            /div> <
            div style = { props.style } > { props.userid } < /div> {
            show && ( <
                div >
                <
                Registration userid = { props.userid }
                plan = { selectedPlan }
                size = { selectedSize }
                /> < /
                div >
            )
        } <
        /div>
);
};

export default Plans;