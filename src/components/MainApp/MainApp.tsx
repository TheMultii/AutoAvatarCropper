import { Nav } from "../Nav/Nav";
import "./MainApp.scss";

export const MainApp = () => {
    return (
        <main>
            <Nav />

            <div className="container">
                <h1>
                    Auto Avatar
                    <br />
                    Cropper
                </h1>
                <p>Powered by AI</p>
            </div>
        </main>
    );
};
