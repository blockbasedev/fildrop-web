import React from 'react';
import image1 from './../components/Vector01.png';
import image2 from './../components/sharedata.png';
import image3 from './../components/dropfiles.png';
import { useState } from "react";
import { Link } from "react-router-dom";

const Contents = () => {
    const planStorage = 1;
    const usedStorage = 688;
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

    const containers = [];

    for (let i = 0; i < 10; i++) {
        containers.push( <
            div className = "inner-container"
            style = {
                { width: '110px', height: '160px', border: '1px solid black', borderRadius: '10px', margin: '17px' }
            }
            key = { i }
            />
        );
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
        p > Upload your data which needs to be publically available < /p> < /
        div > <
        div className = "container" > {
            containers.map((container, index) => {
                if (index % 6 === 0) {
                    return ( <
                        div key = { index }
                        className = "row" > { containers.slice(index, index + 6) } <
                        /div>
                    );
                }
                return null;
            })
        } <
        div className = "storage-occupied" > < p > { usedStorage + " " }
        MB used of { planStorage + " " }
        GB < /p> < /div > < button className = 'select-btn' >
        Choose file < /button>







        <

        /

        div > < /

        div >

    );

};



export default Contents;