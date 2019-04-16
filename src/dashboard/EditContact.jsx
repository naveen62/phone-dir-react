import React from 'react';
import {connect} from 'react-redux'

import PageTitle from '../components/PageTitle';
import ContactForm from '../components/ContactForm';
import {EditContact as editContact} from '../actions/contacts'

class EditContact extends React.Component {

    handleEditContact = (contact) => {
        const id = this.props.match.params.id
        this.props.dispatch(editContact(id, contact));
        this.props.history.push('/');
    }
    render() {
        return(
            <div>
                <PageTitle title='Edit Contact'/>
                <ContactForm 
                edit={true} 
                contact={{...this.props.contact}}
                handleEditContact={this.handleEditContact}
                />
            </div>
        )
    }
}
const mapStateToProps = (state, props) => {
    return {
        contact: state.contacts.find((contact) => contact.id === props.match.params.id)
    }
}
export default connect(mapStateToProps)(EditContact);