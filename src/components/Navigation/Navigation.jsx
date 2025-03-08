import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import clsx from 'clsx';
import s from './Navigation.module.css';

export const Navigation = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    const buildLinkClass = ({ isActive }) => {
        return clsx(s.link, isActive && s.active)
    };

    return (
        <nav className={s.nav}>
            <NavLink className={buildLinkClass} to="/">
                Home
            </NavLink>
            {isLoggedIn && (
                <NavLink className={buildLinkClass} to="/contacts">
                Contacts
                </NavLink>
            )}
        </nav>
    );
};