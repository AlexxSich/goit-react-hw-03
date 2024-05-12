import initialContacts from '../contacts.json';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import css from './App.module.css';

import { useState, useEffect } from 'react';

export default function App() {
  const [contacts, setContacts] = useState(() => {
    const contactsData = localStorage.getItem('savedContacts');
    return contactsData !== null ? JSON.parse(contactsData) : initialContacts;
  });
  const [findContact, setFindContact] = useState('');

  useEffect(() => {
    localStorage.setItem('savedContacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    setContacts(existingContacts => {
      return [...existingContacts, newContact];
    });
  };

  const deleteContact = contactId => {
    setContacts(existingContacts => {
      return existingContacts.filter(contact => contact.id !== contactId);
    });
  };

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(findContact.toLowerCase())
  );

  return (
    <div className={css.container}>
      <h1>PhoneBook (Vite + React)</h1>
      <ContactForm addContact={addContact} />
      <SearchBox value={findContact} onFindContact={setFindContact} />
      <ContactList contactsData={visibleContacts} onDelete={deleteContact} />
    </div>
  );
}
