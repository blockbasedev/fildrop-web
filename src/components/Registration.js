import React from 'react';
import { useState } from "react";
import Username from './Username';
import Verified from './verified.png';
import Claimed from './Claimed';


const Registration = (props) => {
    const [show, toggleShow] = useState(false);
    const annum = 0.003;
    const gasfee = 0.005;
    const tot = annum + gasfee;
    const price = tot * 220;
    return ( <
        div className = "register-text" >
        Complete the Registration <
        div className = "container01" >
        <
        div className = "userid-text" > { props.userid } < img src = { Verified }
        /> < /div > <
        br / >
        <
        br / >
        <
        div style = {
            { display: "inline-block", width: "30%", textAlign: "center" }
        } >
        Registration period <
        /div> <
        div style = {
            { display: "inline-block", width: "30%", textAlign: "center" }
        } >
        Storage plan <
        /div> <
        div style = {
            { display: "inline-block", width: "30%", textAlign: "center" }
        } >
        Registration plan <
        /div>  <br/ > < br / > <
        div className = "con-text"
        style = {
            { display: "inline-block", width: "30%", textAlign: "center" }
        } > 1 Year < /div> <
        div className = "con-text"
        style = {
            { display: "inline-block", width: "30%", textAlign: "center" }
        } > 1 GB < /div> <
        div className = "con-text"
        style = {
            { display: "inline-block", width: "30%", textAlign: "center" }
        } > 1 Free < /div> <
        div className = 'terms'
        style = {
            {
                float: 'left',
                padding: "0px 43px",
                textAlign: "center"
            }
        } > * You can change the above structure however you want later < /div> <br/ > < br / > < br / >
        <
        div className = "gas-fee"
        style = {
            {
                float: 'left',
                fontFamily: "Poppins",
                fontSize: '30px',
                padding: "0px 65px",
                textAlign: "center"
            }
        } > { annum + " " }
        FIL + { gasfee + " " }
        gas fee = at most { tot + " " }
        FIL <
        /div>

        <
        div className = "fee-des"
        style = {
            {
                float: 'left',
                padding: "0px 43px",
                textAlign: "center"
            }
        } >
        Estimated Total(Price + Gas).The gas price is based at 16 Gwei

        <
        /div> <
        br / > < br / > < br / >

        <
        div className = "price"
        style = {
            {
                position: "absolute",
                float: 'left',
                fontFamily: "Poppins",
                fontSize: '30px',
                padding: "40px 65px",
                textAlign: "center"


            }
        } >
        $ { price + " " }
        USD <
        div className = 'terms'
        style = {
            {
                float: 'right',
                padding: "0px 43px",
                textAlign: "center"
            }
        } > Free < /div> <br/ > <
        button onClick = {
            () => toggleShow(true)
        }
        className = "registration-button"
        style = {
            {
                position: 'relative',
                width: '170px',
                height: '65px',
                left: '-65px',
                top: '40px',
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
        }

        >
        Register <
        /button> { show && < Claimed userid={props.userid} / >
    }





    <
    /
    div >






        <
        /
    div > <
        /div>
);
};

export default Registration;