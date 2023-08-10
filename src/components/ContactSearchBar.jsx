/* eslint-disable react/prop-types */
import { useState } from 'react';
import ContactList from './ContactList';

const ContactSearchBar = ({contacts}) => {
  const [searchInput, setSearchInput] = useState('');
  const [filteredContacts, setFilteredContacts] = useState([])

  const search = (searchTerm) =>{
    if(searchTerm === ""){
      return []
    }
    return contacts.filter((contact) => contact.name.toLowerCase().includes(searchTerm))
  }

  const handleSearchInput = (event) =>{
      setSearchInput(event.target.value)
      setFilteredContacts(search(event.target.value))
  }

  const handleClearButton = () =>{
      setSearchInput(''); 
      setFilteredContacts([]);
  }
  
  return(
    <div>
      <input type='text' value={searchInput} onChange={handleSearchInput} placeholder='Search...' />
      <button onClick={handleClearButton}>Clear</button>
      <ContactList contacts={filteredContacts} />
    </div>
  )
}

export default ContactSearchBar;