import React from 'react';

import ContactList from './ContactList';
import Desc from './Desc';

const ContactLists = props => (
    <div style={{width:'70%'}}>
        <Desc />
        {   Array.isArray(props.contacts) &&
            props.contacts.map((contact) => <ContactList key={contact.id} {...contact}/>)
        }
    </div>
)
export default ContactLists;