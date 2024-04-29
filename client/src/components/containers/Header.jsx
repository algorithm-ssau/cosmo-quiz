import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../store/slices/authSlice";

export default function Header() {
    const dispatch = useDispatch();

    const handleClick = useCallback(() => {
        dispatch(logout());
    }, [dispatch]);

    return (
        <header className="bg-background p-4 flex justify-between items-center">
            <Link to="/">
                <h1 className="text-xl text-accent font-bold">
                    Космическая одиссея
                </h1>
            </Link>
            <button
                className="bg-accent hover:bg-secondary text-white font-bold py-2 px-4 rounded"
                onClick={handleClick}
            >
                Выйти
            </button>
        </header>
    );
}
