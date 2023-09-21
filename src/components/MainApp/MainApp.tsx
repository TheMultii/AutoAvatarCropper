import { Header } from "../Header";
import { Footer } from "../Footer";
import "./MainApp.scss";
import { Outlet } from "react-router-dom";

export const MainApp = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
};
