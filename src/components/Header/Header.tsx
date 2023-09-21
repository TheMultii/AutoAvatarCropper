import { useMemo } from "react";
import { Nav } from "../Nav";
import "./Header.scss";

export const Header = () => {
    const avatar1 = useMemo(() => Math.round(Math.random() * 4) + 1, []);
    const avatar2 = useMemo(() => {
        let random = Math.round(Math.random() * 4) + 1;
        while (random === avatar1) {
            random = Math.round(Math.random() * 4) + 1;
        }
        return random;
    }, [avatar1]);

    return (
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
            <img
                src={`/avatars/avatar-${avatar1}.webp`}
                alt="avatar-example-1"
                className="avatar-example"
            />
            <img
                src={`/avatars/avatar-${avatar2}.webp`}
                alt="avatar-example-2"
                className="avatar-example"
            />
        </header>
    );
};
