import React from 'react';
import Contact from './Contact';

const Contacts = function ({ contacts }) {
    return (
        <div>
            {
                contacts.map((contact) => {
                    return <Contact firstName={contact.firstName} lastName={contact.lastName} phone={contact.phone} gender={contact.gender} />
                })}
        </div>
    )
};
export default Contacts
