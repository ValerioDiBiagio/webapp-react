import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function DefaultLayout() {
    return (
        <>
            <Header />
            <main className="container pt-3">
                <Outlet />
            </main>
            <footer>Footer</footer>
        </>
    )
}

export default DefaultLayout;