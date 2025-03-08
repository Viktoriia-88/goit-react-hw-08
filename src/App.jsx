// import ContactForm from './components/ContactForm/ContactForm';
// import SearchBox from './components/SearchBox/SearchBox';
// import ContactList from './components/ContactList/ContactList';
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchContacts } from './redux/contactsOps';
// import { selectLoading, selectError, selectContacts } from './redux/contactsSlice';
// import './App.css'

// function App() {
//     const dispatch = useDispatch();
//     const loading = useSelector(selectLoading);
//     const error = useSelector(selectError);
//     const items = useSelector(selectContacts);

//     useEffect(() => {
//         dispatch(fetchContacts());
//     }, [dispatch]);

//     return (
//         <>
//             <h1>Phonebook</h1>
//             <ContactForm />
//             <SearchBox />
//             {loading && <b>Loading contacts...</b>}
//             {error && <p>{error}</p>}
//             {items.length > 0 && <ContactList />}
//         </>
//     );
// }

// export default App;


import { useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { PrivateRoute } from './components/PrivateRoute';
import { RestrictedRoute } from './components/RestrictedRoute';
import { refreshUser } from './redux/auth/operations';
import { selectIsRefreshing } from './redux/auth/selectors';
import Loader from './components/Loader/Loader';
import './App.css'

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('./pages/RegistrationPage/RegistrationPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));

export const App = () => {
    const dispatch = useDispatch();
    const isRefreshing = useSelector(selectIsRefreshing);

    useEffect(() => {
        dispatch(refreshUser());
    }, [dispatch]);

    return isRefreshing ? (
        <Loader />
    ) : (
        <Layout>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route
                    path="/register"
                    element={
                        <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
                    }
                />
                <Route
                    path="/login"
                    element={
                        <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
                    }
                />
                <Route
                    path="/contacts"
                    element={
                        <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
                    }
                />
            </Routes>
        </Layout>
    );
};

export default App;