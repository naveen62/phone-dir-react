const addContact = (contact) => ({
    type:'ADD_CONTACT',
    contact
})
const RemoveContact = (id) => ({
    type:'REMOVE_CONTACT',
    id
})
const EditContact = (id, contact) => ({
    type:'EDIT_CONTACT',
    id,
    contact    
})
export {addContact, RemoveContact, EditContact};