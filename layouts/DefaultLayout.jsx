import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Loader from "../components/Loader";
import { useContext } from "react";
import GlobalContext from "../contexts/globalContext";

function DefaultLayout() {

    const { isLoading } = useContext(GlobalContext);

    return (
        <>
            <Header />
            <main className="container pt-3">
                <Outlet />
            </main>
            {isLoading && <Loader />}
        </>
    )
}

export default DefaultLayout;