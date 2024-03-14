import { GrLinkNext } from 'react-icons/gr';

export default function Button({ text, errors }) {
    const isDisabled = Object.keys(errors).length > 2;
    return (
        <button
            disabled={isDisabled}
            className="mt-2 flex w-fit items-center gap-2 rounded-sm 
                 bg-white px-1 py-1 text-black opacity-65 hover:scale-105 hover:bg-blue-400"
            type="submit"
        >
            {text} <GrLinkNext />
        </button>
    );
}
