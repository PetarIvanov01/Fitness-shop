import { FaArrowDown } from 'react-icons/fa';

export default function Heading({ text }) {
    return (
        <div className="w-fit pb-2">
            <p className="flex items-center gap-2 uppercase text-blue-400">
                {text} <FaArrowDown />
            </p>
            <hr className="w-1/4" />
        </div>
    );
}
