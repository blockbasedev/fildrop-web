import React, { useState } from "react";
import Plans from './Plans';

function Username() {
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
            div className = "username" >
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
            onClick = {
                () => toggleShow(true)
            }
            style = {
                {
                    position: 'absolute',
                    width: '170px',
                    height: '65px',
                    left: '690px',
                    bottom: '-126px',
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
            Claim <
            /button>  {
            show &&
            <
            Plans userid = { userid }
            style = {
                {
                    all: 'initial',
                    textDecoration: 'underline',
                    fontSize: '16px'
                }
            }
            />
        } <
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
            ` } < /style> < /
    div >
);
}

export default Username;