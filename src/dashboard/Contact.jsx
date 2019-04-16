import React from 'react';
import {connect} from 'react-redux'

import PageTitle from '../components/PageTitle';
import {RemoveContact} from '../actions/contacts'

import '../styles/contact.css';

class Contact extends React.Component {

    handleDelete = () => {
        const id = this.props.match.params.id;
        this.props.dispatch(RemoveContact(id));
        this.props.history.push('/');
    }
    handleEdit = () => {
        const id = this.props.match.params.id;
        this.props.history.push(`/contact/${id}/edit`);
    }
    render() {
        return(
            <div>
                <PageTitle title={this.props.contact.name} />
                <div className='contacts-container'>
                    <div>
                        <h1>Number</h1>
                        <h3>{this.props.contact.number}</h3>
                    </div>
                    <div>
                        <h1>Email</h1>
                        <h3>{this.props.contact.email}</h3>
                    </div>
                    <button className='conatacts-btn1' onClick={this.handleEdit} type='button'>Edit</button>
                    <button className='conatcts-btn2' onClick={this.handleDelete} type='button'>Delete</button>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state, props) => {
    return {
        contact: state.contacts.find((contact) => contact.id == props.match.params.id)
    }
}
export default connect(mapStateToProps)(Contact);