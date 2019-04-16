import React from 'react';
import {connect} from 'react-redux'

import ContactLists from '../components/ContactLists';
import PageTilte from '../components/PageTitle'

import '../styles/contacts.css';

class Contacts extends React.Component {

    render() {
        console.log('testing ',this.props);
        return(
            <div>
                <PageTilte title='Contacts' />
                <div className='contact-container'>
                    {this.props.contacts.length === 0 ? (
                        <h1>No Contacts</h1>
                    ) : (
                        <ContactLists contacts={this.props.contacts} />
                    ) }
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        contacts: state.contacts
    }
}
export default connect(mapStateToProps)(Contacts);