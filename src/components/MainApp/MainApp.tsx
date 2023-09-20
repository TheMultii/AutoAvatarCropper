import { Footer } from "../Footer";
import { Nav } from "../Nav";
import "./MainApp.scss";

export const MainApp = () => {
    return (
        <>
            <header>
                <Nav />
                <div className="container">
                    <h1>
                        Auto Avatar
                        <br />
                        Cropper
                    </h1>
                    <p>Powered by AI</p>
                </div>
            </header>

            <main>
                <div className="container">
                    <div className="grid grid-6 grid-6-gap">
                        <div className="item-card">
                            <input type="button" value="Upload" />
                        </div>
                        <div className="item-card"></div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};
