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
                            <h1>Input</h1>
                            <div
                                className="img"
                                style={{
                                    backgroundImage:
                                        "url(" +
                                        import.meta.env.VITE_PLACEHOLDER_IMAGE +
                                        ")",
                                }}
                            ></div>
                            <input type="button" value="Upload" />
                        </div>
                        <div className="item-card">
                            <h1>Result</h1>
                            <div className="flex flex-grow flex-align-center">
                                <div
                                    className="img img-smaller"
                                    style={{
                                        backgroundImage:
                                            "url(" +
                                            import.meta.env
                                                .VITE_PLACEHOLDER_IMAGE_CROPPED +
                                            ")",
                                    }}
                                ></div>
                            </div>
                            <input type="button" value="Save to disk" />
                        </div>
                    </div>
                    <input
                        type="button"
                        className="button-smaller"
                        value="Example Image"
                    />
                </div>
            </main>
            <Footer />
        </>
    );
};
