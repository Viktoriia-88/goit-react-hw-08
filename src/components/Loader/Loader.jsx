import PuffLoader from "react-spinners/PuffLoader";
import s from "./Loader.module.css";

export default function Loader() {
    return (
        <div className={s.loader}>
            <PuffLoader color="rgb(122, 234, 47)" size={100} />
        </div>
    );
}