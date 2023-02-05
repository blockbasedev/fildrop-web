import React from 'react';
import image1 from './../components/Vector01.png';
import image2 from './../components/sharedata.png';
import image3 from './../components/dropfiles.png';
import { useState } from "react";
import Plans from './../components/Plans';


import { Link } from "react-router-dom";


const Reciever = () => {
    const [userid, setUserid] = useState("");
    const [show, toggleShow] = useState(false);

    function handleChange(event) {
        setUserid(event.target.value);
    }

    function handleKeyDown(event) {
        if (event.key === "Enter") {
            toggleShow(true);
        }
    }

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
        alt = "Image 1" / > < Link to = "/"
        style = {
            { textDecoration: 'none' }
        } >
        <
        button className = "image-button" >
        <
        p > Claim space < /p>  < /button > < /Link>< /
        div > <
        div className = "image-wrap" >
        <
        img src = { image2 }
        alt = "Image 2" / > < Link to = "/sharedata"
        style = {
            { textDecoration: 'none' }
        } >
        <
        button className = "image-button" > < p > Drop files < /p> < /button > < /Link>< /
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
        button className = "image-button" > < p > Share Data < /p> < /button > < /Link> < /
        div > <
        /div> Enter the receiver <span style={{color: 'grey'}}>FID</span > <
        div className = 'userid' >

        <
        /div> <
        div className = 'claim' / >
        <
        input type = "text"
        value = { userid }
        onChange = { handleChange }
        onKeyDown = { handleKeyDown }
        placeholder = "chaalpritam.fid"
        className = "no-border" /
        >
        <
        button className = "claim"


        style = {
            {
                position: 'absolute',
                width: '170px',
                height: '65px',
                left: '690px',
                bottom: '-66px',
                backgroundColor: 'black',
                borderRadius: '60px',
                fontFamily: 'poppins',
                display: 'inline-block',
                fontSize: '18px',
                margin: '4px 4px',
                cursor: 'pointer',
                transition: 'transform 0.9s',
                color: 'white'
            }
        } >
        Choose File <
        /button> 

        <
        button className = "claim"


        style = {
            {
                position: 'absolute',
                width: '247px',
                height: '81px',
                left: '320px',
                bottom: '-196px',
                backgroundColor: 'black',
                borderRadius: '60px',
                fontFamily: 'poppins',
                display: 'inline-block',
                fontSize: '30px',
                margin: '4px 4px',
                cursor: 'pointer',
                transition: 'transform 0.9s',
                color: 'white'
            }
        } >
        Send File <
        /button> 




        <
        style jsx > { `
                .claim:hover {
                  transform: scale(1.2);
                }
                
                .claim:active {
                  transform: scale(1.1);
                }
                
                .claim:after {
                  transform: scale(0.9);
                }
            ` } < /style> 


        <
        /
        div > < /
        div >
    );
};

export default Reciever;