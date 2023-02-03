import React, { useState } from 'react';



const openMetamask = async() => {
    if (typeof window.ethereum !== 'undefined') {
        try {
            await window.ethereum.enable();
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            const username = accounts[0];
            return username;
        } catch (error) {
            console.error(error);
        }
    }
};

const Header = () => {
    const [username, setUsername] = useState("Connect");

    const handleClick = async() => {
        const user = await openMetamask();
        if (user) {
            setUsername(user[0] + user[1] + user[2] + user[3] + "...." + user[8] + user[9] + user[10] + user[11] + user[12] + user[13] + user[14] + user[15]);
        }
    };

    return ( <
        div className = "header" >
        <
        p > FIL Drop < /p> <
        button className = "connect"
        style = {
            {
                position: 'absolute',
                width: '150px',
                height: '50px',
                left: '1350px',
                bottom: '11px',
                backgroundColor: 'black',
                borderRadius: '60px',
                display: 'inline-block',
                fontSize: '17px',
                margin: '4px 4px',
                cursor: 'pointer',
                transition: 'transform 0.5s',
                color: 'white',
            }
        }
        onClick = { handleClick } > { username } <
        /button> <
        style jsx > { `
        .connect:hover {
          transform: scale(1.2);
        }
  
        .connect:active {
          transform: scale(1.1);
        }
        .connect:after {
          transform: scale(0.1);
        }
      ` } < /style> < /
        div >
    );
};

export default Header;