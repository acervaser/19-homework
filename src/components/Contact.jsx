import React from "react";

const Contact = ({ firstName, lastName, phone, gender}) => {
    return (<div className="contact">
        <h3>{firstName} {lastName}</h3>
        <p>{phone}</p>
        <p className="gender">{gender}</p>
    </div>)
};
export default Contact