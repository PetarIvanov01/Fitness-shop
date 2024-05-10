import { useState } from 'react';
import { GrLinkNext } from 'react-icons/gr';

type ButtonProps = {
    text: string;
    error: boolean;
    loadSpin: boolean;
};

export default function Button({ text, error, loadSpin = false }: ButtonProps) {
    const [effect, setEffect] = useState(false);

    const handlersEffects = {
        onClick: () => setEffect(true),
        onAnimationEnd: () => setEffect(false),
    };

    const showAnimation = effect && error && 'animate-wiggle hover:bg-red-400';

    return (
        <button
            {...handlersEffects}
            className={`bg-white ${showAnimation} flex h-10 w-fit items-center gap-2 rounded-sm
                   px-2 py-1 text-black opacity-65 hover:scale-105 hover:bg-blue-400`}
            type="submit"
        >
            <div className="flex w-full items-center justify-center gap-1">
                <p className="w-fit text-nowrap">{text}</p> <GrLinkNext />
            </div>
            {loadSpin && (
                <div className="w-10">
                    <svg
                        viewBox="0 0 800 800"
                        className="h-10 w-auto animate-spin"
                    >
                        <circle
                            cx="400"
                            cy="400"
                            fill="none"
                            r="200"
                            strokeWidth="50"
                            stroke="#3291df"
                            strokeDasharray="700 1400"
                        />
                    </svg>
                </div>
            )}
        </button>
    );
}
