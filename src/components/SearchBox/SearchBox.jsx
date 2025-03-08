import { useId } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";
import { MdPersonSearch } from "react-icons/md";
import s from './SearchBox.module.css'

export default function SearchBox() {
    const searchId = useId();
    const dispatch = useDispatch();
    const filter = useSelector(selectNameFilter);
    const handleFilterChange = (e) => dispatch(changeFilter(e.target.value));

    return (
        <div className={s.searchBox}>
            <label className={s.label} htmlFor={searchId}>
                Find contacts by name
            </label>
            <div className={s.wrap}>
                <MdPersonSearch size={20} className={s.searchIcon} />
                <input className={s.inputBox}
                    type="name"
                    id={searchId}
                    value={filter}
                    onChange={handleFilterChange}
                />
            </div>
        </div>
    );
}