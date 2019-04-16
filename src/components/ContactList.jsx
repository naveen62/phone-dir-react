import React from 'react';
import {NavLink} from 'react-router-dom'

const ContactList = (props) => (
    <NavLink to={`/contact/${props.id}`}>
        <div className='contactlist-container'>
            <div>
            <h3>{props.name}</h3>
            </div>
            <div>
            <p>{props.number}</p>
            </div>
        </div>
    </NavLink>
)
export default ContactList