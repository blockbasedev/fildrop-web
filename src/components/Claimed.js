import React from 'react';

const Claimed = (props) => {
    return ( < div className = "claimed-name"
        style = {

            {
                all: 'inherit',
                whiteSpace: 'nowrap',
                float: 'left',
                fontFamily: "Poppins",
                fontSize: '40px',
                padding: "150px 70px",
                textAlign: "end",


            }
        } > You have claimed < span > { props.userid } < /span>

        <
        div className = 'add'
        style = {

            {
                all: 'inherit',
                whiteSpace: 'nowrap',
                float: 'left',
                textDecoration: 'underline',
                fontFamily: "Poppins",
                fontSize: '30px',
                padding: "70px 70px",
                textAlign: "end",


            }
        }


        >
        Add another ENS to this fid < /div> < /
        div > );
};
export default Claimed;