import { FaUser, FaPhoneAlt } from 'react-icons/fa';

import css from './Contact.module.css';

export default function Contact({ data: { name, number, id }, onDelete }) {
  return (
    <div className={css.contactContainer}>
      <div className={css.contacts}>
        <p className={css.contactsItem}>
          <FaUser className={css.myIcon} />
          {name}
        </p>
        <p className={css.contactsItem}>
          <FaPhoneAlt className={css.myIcon} />
          {number}
        </p>
      </div>
      <button className={css.contactBtn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
