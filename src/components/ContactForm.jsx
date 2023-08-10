/* eslint-disable react/prop-types */
import { useState } from 'react'

const ContactForm = ({addContact}) => {

  const [contactName, setContactName] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  const handleName = (event) =>{
    setContactName(event.target.value)
  }

  const handleNumber= (event) =>{
    setContactNumber(event.target.value)
  }
  
  const contactFieldEmpty = () =>{
    if(contactName.trim() === ""){
      alert("Name fieled is empty");
      return true;
    }

    if(contactNumber.trim() === ""){
      alert("Number field is empty");
      return true;
    }

    return false;
  }

  // request to add contact into contacts list
  const addRequest = (event) =>{
    event.preventDefault();

    if(contactFieldEmpty()){
      return ;
    }

    const contact = {
      name: contactName,
      number: contactNumber
    }

    if(addContact(contact)){
      setContactName('')
      setContactNumber('')
    }
  }


  return(
    <div>
      <form onSubmit={addRequest}>
        <input type='text' value={contactName} onChange={handleName} placeholder='Enter Name'/>
        <input type='text' value={contactNumber} onChange={handleNumber} placeholder='Enter phone No'/>
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default ContactForm;