import css from "./ContactsList.module.css";
import Contact from "../Contacts/Contacts";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactSlice";

export default function ContactList() {
  const visibleContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.contactList}>
      {visibleContacts.map((contact) => (
        <li key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
}