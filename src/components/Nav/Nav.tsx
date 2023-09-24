import { Link } from "react-router-dom";
import { Sling as Hamburger } from "hamburger-react";
import { useState } from "react";
import "./Nav.scss";
import classNames from "classnames";

export const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className={classNames({ navExtended: isOpen })}>
            <div className="innerNav">
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
                <Hamburger
                    size={20}
                    direction="right"
                    label="Show menu"
                    hideOutline={true}
                    toggled={isOpen}
                    toggle={setIsOpen}
                />
            </div>

            {isOpen && (
                <div className="navOpen">
                    <ul className="mobileVisible">
                        <li>
                            <Link
                                onClick={() =>
                                    setTimeout(() => setIsOpen(false), 75)
                                }
                                to="/faq"
                            >
                                FAQ
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};
