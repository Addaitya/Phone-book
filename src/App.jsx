import { useState } from 'react';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import ContactSearchBar from './components/ContactSearchBar';
import './css/App.css'

const App = () =>{
  const [contacts, setContacts] = useState([]);

  const contactRepeated = (newContact) => {
    // check contact name in contact for repetation
    if(!contacts.every((contact) => contact.name.toLowerCase() !== newContact.name.toLowerCase())){
      alert(`Contact with name ${newContact.name} already exist.`);
      return true;
    }

    // check contact number in contact for repetation
    else if(!contacts.every((contact) => contact.number !== newContact.number)){
      const [contactInContacts] = (contacts.filter((contact) => contact.number === newContact.number));
      alert(`Contact with ${newContact.number} already exist with name: ${contactInContacts.name}`);
      return true
    }

    return false
  }

  const addContact = (contact) => {
    if(contactRepeated(contact)){
      return false;
    }

    const newContact ={...contact, id: contacts.length}

    setContacts((contacts) => contacts.concat(newContact))
    return true;
  }

  return(
    <div className='container'>
      <ContactSearchBar contacts={contacts} />
      <ContactForm addContact={addContact}/>
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;