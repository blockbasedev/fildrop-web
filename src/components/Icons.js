import React from 'react';
import image1 from './sharedata.png';
import image2 from './sharedata.png';
import image3 from './dropfiles.png';

const Icons = () => {
    return ( <
        div className = "images-container" >
        <
        div className = "image-wrap" >
        <
        img src = { image1 }
        alt = "Image 1" / >
        <
        button className = "image-button" > Button 1 < /button> < /
        div > <
        div className = "image-wrap" >
        <
        img src = { image2 }
        alt = "Image 2" / >
        <
        button className = "image-button" > Button 2 < /button> < /
        div > <
        div className = "image-wrap" >
        <
        img src = { image3 }
        alt = "Image 3" / >
        <
        button className = "image-button" > Button 3 < /button> < /
        div > <
        /div>
    );
};

export default Icons;