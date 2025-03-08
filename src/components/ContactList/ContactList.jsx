import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import s from './ContactList.module.css'
import {selectFilteredContacts} from "../../redux/filters/selectors"

export default function ContactList() {
    const filter = useSelector(selectFilteredContacts);

    return (
        <ul className={s.contactList}>
            {filter.length > 0 ? (
                filter.map((contact) => (
                    <li className={s.contactItem} key={contact.id}>
                        <Contact
                            contact={contact}
                        />
                    </li>
                ))
            ) : (
                <p className={s.noFound}>Contact not found</p>
            )}
        </ul>
    );
}