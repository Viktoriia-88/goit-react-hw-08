import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import s from './AuthNav.module.css';

export const AuthNav = () => {
    const buildLinkClass = ({ isActive }) => {
        return clsx(s.link, isActive && s.active);
    };

    return (
        <div>
            <NavLink className={buildLinkClass} to="/register">
                Register
            </NavLink>
            <NavLink className={buildLinkClass} to="/login">
                Log In
            </NavLink>
        </div>
    );
};