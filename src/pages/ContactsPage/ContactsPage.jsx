import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactList from "../../components/ContactList/ContactList";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import { fetchContacts } from '../../redux/contacts/operations';
import { selectLoading, selectError, selectContacts } from '../../redux/contacts/selectors';
import Loader from "../../components/Loader/Loader"


export default function ContactsPage() {
    const dispatch = useDispatch();
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);
    const items = useSelector(selectContacts);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <>
            <ContactForm />
            <SearchBox />
            {loading && <Loader />}
            {error && <p>{error}</p>}
            {items.length > 0 && <ContactList />}
        </>
    );
}