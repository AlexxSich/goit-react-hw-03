import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

export default function ContactList({ contactsData, onDelete }) {
  return (
    <ul className={css.contactsList}>
      {contactsData.map(contact => (
        <li className={css.contactsItem} key={contact.id}>
          <Contact data={contact} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}
