import "./styles/Faq.scss";

const data = [
    {
        question: "How does it work?",
        answer: "The uploaded image is sent to the server where a trained model recognizes faces. Then the server sends back cropped images of faces. They are squares with an aspect ratio of 1:1, so they can easily be used as profile pictures (avatars).",
    },
    {
        question: "Is it free?",
        answer: "Yes, it is. But to avoid abuse, there is a limit of 20 requests per day.",
    },
    {
        question: "Are the images stored on the server?",
        answer: "Absolutely not. The image is processed and then deleted. It's not even saved to disk, because the entire process is performed on images stored in RAM. Because of this, it's not possible to recover the image after it's been processed, so there's no way to determine who uploaded what.",
    },
    {
        question: "Can I ask for an increase in the limit of requests per day?",
        answer: "No.",
    },
    {
        question: "What can it detect?",
        answer: "Model was being trained to detect faces from the given images. It works for human faces, but it should detect faces from anime characters as well. It's not perfect, but it's pretty good. It's not trained to detect other things, like cars, animals, etc.",
    },
    {
        question: "What if I upload an image with multiple faces?",
        answer: "The model will recognize all the faces, but for now it will only crop the first one and return it to you.",
    },
    {
        question: "License?",
        answer: "For the front-end: MIT. For the model: it's trained by me and not available to the public. For the pictures you upload: you must have the rights to use/modify them, you must not upload anything illegal. You keep the rights to your images after they are processed.",
    },
    {
        question:
            "Can I have my images deleted from your server at my request?",
        answer: "No. I don't store them on the server. It's completely anonymous.",
    },
];

export const Faq = () => {
    return (
        <div className="container">
            <h1>FAQ</h1>

            <div className="faq_container">
                {data.map((item, index) => (
                    <div key={index}>
                        <h2>{item.question}</h2>
                        <p>{item.answer}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
