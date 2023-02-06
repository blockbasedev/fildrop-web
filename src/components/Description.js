import React from 'react';
import image1 from './Vector01.png';
import image2 from './sharedata.png';
import image3 from './dropfiles.png';
import Username from './Username';
import { useState } from 'react';
import { Link } from "react-router-dom";


const Description = () => {
    return ( <
        div className = 'body-content' >
        <
        div className = "description" >
        <
        div className = "images-container" >
        <
        div className = "image-wrap" >
        <
        img src = { image1 }
        alt = "Image 1" / >
        <
        Link to = "/"
        style = {
            { textDecoration: 'none' }
        } >
        <
        button className = "image-button" >
        <
        p > Claim space < /p> < /
        button > <
        /Link> < /
        div > <
        div className = "image-wrap" >
        <
        img src = { image2 }
        alt = "Image 2" / >
        <
        Link to = "/sharedata"
        style = {
            { textDecoration: 'none' }
        } >
        <
        button className = "image-button" >
        <
        p > Drop files < /p> < /
        button > <
        /Link> < /
        div > <
        div className = "image-wrap" >
        <
        img src = { image3 }
        alt = "Image 3" / >
        <
        Link to = "/publicprofile"
        style = {
            { textDecoration: 'none' }
        } >
        <
        button className = "image-button" >
        <
        p > Share Data < /p> < /
        button > <
        /Link> < /
        div > <
        /div> <
        div style = {
            { textAlign: "center" }
        } >
        Drop your files to a filecoin name service Or Make your data publicly accessible <
        /div> <
        div className = 'userid' >
        <
        Username / >
        <
        /div> <
        div className = 'claim' / >
        <
        /div> < /
        div >
    );
};

export default Description;