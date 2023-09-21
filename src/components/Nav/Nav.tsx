import { Link } from "react-router-dom";
import "./Nav.scss";

export const Nav = () => {
    return (
        <nav>
            <Link to="/" className="flex-link">
                <div className="gradient-border">
                    <img
                        src="https://mganczarczyk.pl/assets/favicon.webp"
                        alt="logo"
                    />
                </div>
                <h1>Auto Avatar Cropper</h1>
            </Link>
            <ul>
                <li>
                    <Link to="/faq">FAQ</Link>
                </li>
            </ul>
        </nav>
    );
};
