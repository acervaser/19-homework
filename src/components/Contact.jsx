import React from "react";

const Contact= ({ firstName, lastName, phone, gender }) => {
    return (<div>
        <span>{firstName}</span>
        <span>{lastName}</span>
        <span>{phone}</span>
        <span>{gender}</span>
    </div>)   
};
export default Contact