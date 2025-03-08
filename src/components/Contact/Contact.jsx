import { FaUser, FaPhoneAlt } from "react-icons/fa";
import s from './Contact.module.css'
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

export default function Contact({ contact }) {
    const dispatch = useDispatch();

    const onDelete = () => {
        dispatch(deleteContact(contact.id));
    };

    return (
        <div className={s.contact}>
            <div className={s.data}>
                <p className={s.dataValue}><FaUser className={s.icon} size="18" />{contact.name}</p>
                <p className={s.dataValue}><FaPhoneAlt className={s.icon} size="18" />{contact.number}</p>
            </div>
            <button className={s.btnDelete} onClick={() => onDelete(contact.id)}>Delete</button>
        </div>
    );
}