import { useEffect, useMemo, useRef, useState } from "react";
import "./Home.scss";
import classNames from "classnames";
import { useSendAvatar } from "../hooks";
import exampleImages from "../core/exampleImages.json";
import { urlToImageFile } from "../core";
interface ExampleImage {
    creator: string;
    image: string;
}

export const Home = () => {
    const dropContainerRef = useRef<HTMLLabelElement | null>(null);
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const [isUploadEnabled, setIsUploadEnabled] = useState(false);
    const [isDownloadable, setIsDownloadable] = useState(false);
    const [randomExampleImage, setRandomExampleImage] =
        useState<ExampleImage | null>(null);

    const { mutateAsync, isLoading, error } = useSendAvatar();

    const [avatar, setAvatar] = useState<string | null>(null);
    const [errorText, setErrorText] = useState<string | null>(null);

    const isSquare = useMemo(() => {
        if (!avatar) return false;

        const img = new Image();
        img.src = avatar;

        if (img.complete) {
            return img.width === img.height;
        }
    }, [avatar]);

    useEffect(() => {
        const dropContainer = dropContainerRef.current;
        const fileInput = fileInputRef.current;

        const handleDragOver = (e: DragEvent) => e.preventDefault();

        const handleDragEnter = () =>
            dropContainer?.classList.add("drag-active");

        const handleDragLeave = () =>
            dropContainer?.classList.remove("drag-active");

        const handleDrop = (e: DragEvent) => {
            e.preventDefault();
            dropContainer?.classList.remove("drag-active");
            if (fileInput && e.dataTransfer) {
                fileInput.files = e.dataTransfer.files;
                setIsUploadEnabled(true);
            } else {
                setIsUploadEnabled(false);
            }
        };

        const handleFileInputChange = (e: Event) => {
            const target = e.target as HTMLInputElement;
            setIsUploadEnabled(
                (target.files && target.files.length > 0) || false
            );
        };

        if (!dropContainer) return;
        dropContainer.addEventListener("dragover", handleDragOver, false);
        dropContainer.addEventListener("dragenter", handleDragEnter);
        dropContainer.addEventListener("dragleave", handleDragLeave);
        dropContainer.addEventListener("drop", handleDrop);
        if (!fileInput) return;
        fileInput.addEventListener("change", handleFileInputChange);

        return () => {
            if (!dropContainer) return;
            dropContainer.removeEventListener("dragover", handleDragOver);
            dropContainer.removeEventListener("dragenter", handleDragEnter);
            dropContainer.removeEventListener("dragleave", handleDragLeave);
            dropContainer.removeEventListener("drop", handleDrop);
            if (!fileInput) return;
            fileInput.removeEventListener("change", handleFileInputChange);
        };
    }, []);

    const sendAvatar = async () => {
        if (
            (!fileInputRef.current && randomExampleImage === null) ||
            !isUploadEnabled
        )
            return;

        let file = fileInputRef.current?.files?.[0];
        if (randomExampleImage !== null) {
            const response = await urlToImageFile(randomExampleImage.image);
            if (response === null) return;
            file = response;
        }
        if (!file) return;

        const response = await mutateAsync(file);
        const blob = new Blob([response.data]);

        setAvatar(URL.createObjectURL(blob));
        setIsDownloadable(true);
    };

    useEffect(() => {
        if (error === null) return;
        try {
            const err = error as { response: { status: number } };
            if (err?.response?.status === 429) {
                setErrorText(
                    "You have exceeded the limit of 20 requests per day. Please try again later."
                );
                return;
            }
            setErrorText("Something went wrong. Please try again later.");
        } catch (e) {
            setErrorText("Something went wrong. Please try again later.");
        }
    }, [error]);

    const downloadImage = () => {
        if (!avatar) return;

        let originalFileName = fileInputRef.current?.files?.[0]?.name ?? "";
        originalFileName = originalFileName.length
            ? `-${originalFileName}`
            : "";
        originalFileName = originalFileName.replace(/\.[^/.]+$/, "");

        const a = document.createElement("a");
        a.href = avatar;
        a.download = `avatar${originalFileName}.png`;
        a.click();
        a.remove();
    };

    const loadExampleImage = () => {
        const randomImage =
            exampleImages[Math.floor(Math.random() * exampleImages.length)];
        setRandomExampleImage(randomImage);
        setIsUploadEnabled(true);
    };

    return (
        <div className="container">
            <div className="grid grid-6 grid-6-gap">
                <div className="item-card">
                    <h1>Input</h1>

                    {randomExampleImage === null ? (
                        <label
                            htmlFor="images"
                            className="drop-container"
                            ref={dropContainerRef}
                        >
                            <span className="drop-title">Drop image here</span>
                            or
                            <input
                                ref={fileInputRef}
                                type="file"
                                id="images"
                                accept="image/*"
                                required
                            />
                        </label>
                    ) : (
                        <div className="w-full mb-8px flex flex-grow flex-align-center">
                            <div
                                className="img"
                                style={{
                                    backgroundImage: `url(${randomExampleImage.image})`,
                                }}
                            ></div>
                        </div>
                    )}
                    <input
                        type="button"
                        value="Upload"
                        onClick={() => sendAvatar()}
                        className={classNames({
                            disabled: !isUploadEnabled,
                        })}
                    />
                </div>
                <div className="item-card">
                    <h1>Result</h1>

                    {errorText && (
                        <p className="text-center flex flex-col flex-justify-center">
                            <span className="error">Error!</span>{" "}
                            <p className="m-0">{errorText}</p>
                        </p>
                    )}

                    {isLoading ? (
                        <div className="loader">
                            <svg className="circular">
                                <circle
                                    className="path"
                                    cx="50"
                                    cy="50"
                                    r="20"
                                    fill="none"
                                    strokeWidth="5"
                                    strokeMiterlimit="10"
                                ></circle>
                            </svg>
                        </div>
                    ) : avatar !== null ? (
                        <>
                            <div className="flex flex-grow flex-align-center">
                                <div
                                    className="img img-smaller"
                                    style={{
                                        backgroundImage: `url(${avatar})`,
                                    }}
                                ></div>
                            </div>
                            {!isSquare && (
                                <p className="text-center">
                                    <span className="warning">Warning!</span>{" "}
                                    Your image is not square. Face was probably
                                    not detected correctly.
                                </p>
                            )}
                            <input
                                type="button"
                                value="Save to disk"
                                onClick={() => downloadImage()}
                                className={classNames({
                                    disabled: !isDownloadable,
                                })}
                            />
                        </>
                    ) : (
                        <></>
                    )}
                </div>
            </div>
            <input
                type="button"
                className="button-smaller"
                value={`${
                    randomExampleImage !== null ? "Another " : ""
                }Example Image`}
                onClick={() => loadExampleImage()}
            />
            {randomExampleImage !== null && (
                <>
                    <input
                        type="button"
                        className="button-smaller"
                        value="Remove Example Image"
                        onClick={() => setRandomExampleImage(null)}
                    />
                    <p className="m-0 text-center p-smaller">
                        {randomExampleImage.creator}
                    </p>
                </>
            )}
        </div>
    );
};
