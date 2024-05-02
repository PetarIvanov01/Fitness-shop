import { useEffect, useRef } from 'react';

type SetterFunction = (value: boolean) => void;

export default function useCloseSection<RefType extends HTMLElement>(
    setterFnc: SetterFunction
) {
    const ref = useRef<RefType>(null);

    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (ref.current && !ref.current.contains(event.target)) {
                ref.current;
                setterFnc(false);
            }
        };

        window.addEventListener('click', handleClickOutside);

        return () => window.removeEventListener('click', handleClickOutside);
    }, [setterFnc]);

    return {
        ref,
    };
}
