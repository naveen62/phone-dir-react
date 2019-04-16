import React from 'react';
import uniqid from 'uniqid';

class ContactForm extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            text:props.contact ? props.contact.name : '',
            number:props.contact ? props.contact.number : '',
            email:props.contact ? props.contact.email : '',
            edit:props.edit
        }
        console.log(props);
    }
    handleChangeEmail = (e) => {
        this.setState({email:e.target.value});
    }
    handleChangeNum =  e => {
        this.setState({number:e.target.value});
    }
    handleChangeText = e => {
        this.setState({text:e.target.value});
    }
    handleSubmit = e => {
        if(this.state.edit) {
            e.preventDefault();
            const editContact = {
                name:this.state.text,
                number:this.state.number,
                email:this.state.email,
            }
            this.setState({text:'',number:'',email:''});
            this.props.handleEditContact(editContact);
        } else {
            e.preventDefault();
            const contact = {
                name:this.state.text,
                number:this.state.number,
                email:this.state.email,
                id:uniqid()
            }
            this.setState({text:'',number:'',email:''});
            this.props.handleSaveContact(contact);
        }
    }
    render() {
        return(
            <form className='form-container' onSubmit={this.handleSubmit}>
                <div className='form_item'>
                <label>Name:</label>
                    <input required value={this.state.text} onChange={this.handleChangeText} type="text" placeholder='name'/>
                </div>
                <div className='form_item'>
                    <label>Number:</label>
                    <input required value={this.state.number} onChange={this.handleChangeNum} type="number" name="number" placeholder='number'/>
                </div>
                <div className='form_item'>
                    <label>Email:</label>
                    <input value={this.state.email} onChange={this.handleChangeEmail} type="email" name="email" placeholder='email'/>
                </div>
                <button className='form_btn' type='submit'>Save Contact</button>
            </form>
        )
    }
}
export default ContactForm;