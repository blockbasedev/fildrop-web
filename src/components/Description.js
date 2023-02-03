import React from 'react';
import image1 from './Vector01.png';
import image2 from './sharedata.png';
import image3 from './dropfiles.png';
import Username from './Username';
import { useState } from 'react';


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
        button className = "image-button" >
        <
        p > Claim space < /p>  < /button > < /
        div > <
        div className = "image-wrap" >
        <
        img src = { image2 }
        alt = "Image 2" / >
        <
        button className = "image-button" > < p > Drop files < /p> < /button > < /
        div > <
        div className = "image-wrap" >
        <
        img src = { image3 }
        alt = "Image 3" / >
        <
        button className = "image-button" > < p > Share Data < /p> < /button > < /
        div > <
        /div> Drop your files to a filecoin name service Or Make your data publicly accessible <
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