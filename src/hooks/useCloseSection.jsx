import { useEffect, useRef } from "react";

export default function useCloseSection(setterFnc) {

    const ref = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setterFnc(false);
            }
        };

        window.addEventListener("click", handleClickOutside);

        return () => window.removeEventListener("click", handleClickOutside);
    }, []);

    return {
        ref
    }
}