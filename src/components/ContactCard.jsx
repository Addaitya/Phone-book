/* eslint-disable react/prop-types */
const ContactCard = ({contact}) =>{
  return(
      <tr>
        <td style={{padding: '0.5rem 1.5rem', borderBottom: '1px solid', textAlign: 'center'}}>{contact.name}</td> 
        <td style={{padding: '0.5rem 1.5rem', borderBottom: '1px solid', textAlign: 'center'}}>{contact.number}</td>
      </tr>
  );
}

export default ContactCard;