import { GrLinkNext } from 'react-icons/gr';

export default function Button({ text }) {
    return (
        <button
            className="mt-2 flex w-fit items-center gap-2 self-center rounded-sm 
                 bg-white px-1 py-1 text-black opacity-55 hover:scale-105 hover:bg-blue-400"
            type="submit"
        >
            {text} <GrLinkNext />
        </button>
    );
}
