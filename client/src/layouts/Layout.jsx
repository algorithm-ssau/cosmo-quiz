import { Outlet } from "react-router-dom";
import NewHeader from "../components/containers/NewHeader";

export default function Layout() {
    return (
        <>
            <NewHeader />
            <main className="container pl-0 pr-0 md:pr-1 md:pl-1">
                <Outlet />
            </main>
        </>
    );
}
