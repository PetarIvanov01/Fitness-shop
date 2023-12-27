import { GrLinkNext } from "react-icons/gr";

export default function Button({
    text
}) {

    return (
        <button className="flex opacity-55 w-fit self-center items-center mt-2 
                 bg-white py-1 px-1 rounded-sm hover:scale-105 hover:bg-blue-400 text-black"
            type="submit">
            {text} <GrLinkNext className="ml-2" />
        </button>
    )
}