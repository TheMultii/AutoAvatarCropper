import { useEffect, useMemo, useRef } from "react";
import "./Footer.scss";
import { generateRandomString, generateCopyrightDateRange } from "../../core";

export const Footer = () => {
    const footer = useRef<HTMLDivElement>(null);
    const randomText = useRef<HTMLDivElement>(null);

    const copyrightDateRange = useMemo(
        () => generateCopyrightDateRange(new Date().getFullYear()),
        []
    );

    const handleCursorMoveOverFooter = (event?: MouseEvent) => {
        if (!randomText.current) return;

        if (event !== undefined) {
            if (!footer.current) return;
            const footerRect = footer.current.getBoundingClientRect();
            if (
                event.clientX < footerRect.left ||
                event.clientX > footerRect.right ||
                event.clientY < footerRect.top ||
                event.clientY > footerRect.bottom
            )
                return;
        }

        randomText.current.innerHTML = generateRandomString(3500);
    };

    useEffect(() => {
        handleCursorMoveOverFooter();
        window.addEventListener("mousemove", handleCursorMoveOverFooter);

        return () => {
            window.removeEventListener("mousemove", handleCursorMoveOverFooter);
        };
    }, []);

    return (
        <footer ref={footer}>
            <div ref={randomText} className="randomText"></div>
            <div className="container">
                <h1>Auto Avatar Cropper</h1>
                <h2>
                    Copyright © {copyrightDateRange} —{" "}
                    <span className="primary">Marcel Gańczarczyk</span>
                </h2>
                <p>
                    Have a look at my code on{" "}
                    <a
                        href="https://github.com/TheMultii/AutoAvatarCropper"
                        target="_blank"
                    >
                        GitHub
                    </a>
                </p>
            </div>
        </footer>
    );
};
