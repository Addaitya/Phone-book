/* eslint-disable react/prop-types */
import ContactCard from './ContactCard'

const ContactList = ({contacts}) =>{
  return(
    <div>
      <table >
        {contacts.length > 0 &&
        (<thead>
          <tr>
            <th style={{padding: '0.5rem 1.5rem',borderTop: '1px solid', borderBottom: '1px solid', textAlign: 'center'}}>Name</th>
            <th style={{padding: '0.5rem 1.5rem',borderTop: '1px solid', borderBottom: '1px solid', textAlign: 'center'}}>Number</th>
          </tr>
        </thead>)
        }
        <tbody>
          {contacts.map((contact) =>(
            <ContactCard key={contact.id} contact={contact} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ContactList