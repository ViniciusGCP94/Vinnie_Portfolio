import { useEffect, useState } from "react";

export const useTypingAnimation = (text, isActive, speed = 20) => {
    const [displayText, setDisplayText] = useState("");
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        if (!isActive) {
            setDisplayText("");
            setIsComplete(false);
            return;
        }

        let currentIndex = 0;
        setDisplayText("");
        setIsComplete(false);

        const timer = setInterval(() => {
            if (currentIndex < text.length) {
                setDisplayText(text.slice(0, currentIndex + 1));
                currentIndex++;
            } else {
                setIsComplete(true);
                clearInterval(timer);
            }
        }, speed);

        return () => clearInterval(timer);
    }, [text, isActive, speed]);

    return { displayText, isComplete };
};