import { useCallback, useEffect, useState } from "react";

interface IDimensionProps {
    windowWidth: number;
    windowHeight: number;
};

export const useWindowResize = (): IDimensionProps => {
    const [windowSize, setWindowSize] = useState({
        windowWidth: 0,
        windowHeight: 0
    });

    const handleWindowResize = useCallback (() => {
        setWindowSize({
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight
        });
    }, []);

    useEffect(() => {
        window.addEventListener("resize", handleWindowResize)
        handleWindowResize();

        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);//eslint-disable-line

    return windowSize;
};
