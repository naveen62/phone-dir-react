import React from 'react';
import {connect} from 'react-redux'

import PageTitle from '../components/PageTitle';
import ContactForm from '../components/ContactForm';
import {addContact} from '../actions/contacts'

import '../styles/AddContact.css';

class AddContact extends React.Component {
    
    handleSaveContact = (contact) => {
        this.props.dispatch(addContact(contact));
        this.props.history.push('/');
    }
    render() {
        return(
            <div>
                <PageTitle title='Add Contact' />
                <ContactForm edit={false} handleSaveContact={this.handleSaveContact} />
            </div>
        )
    }
}

export default connect()(AddContact);