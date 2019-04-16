import {REHYDRATE} from 'redux-persist'

const contactsListState = [];

const contactReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD_CONTACT':
        console.log(state);
            return [
                ...state,
                action.contact
            ]
        case 'REMOVE_CONTACT':
            return state.filter((contact) => contact.id !== action.id);
        case 'EDIT_CONTACT':
            return state.map((contact) => {
                if(contact.id !== action.id) {
                    return contact;
                } else {
                    return {
                        ...contact,
                        ...action.contact
                    }
                }
            })        
        default:
            return state;
    }
}
export default contactReducer;