import { FaArrowDown } from "react-icons/fa";

export default function Heading({
    text
}) {

    return (
        <div className="pb-2 w-fit">
                <p className="flex items-center gap-2 uppercase text-blue-400">
                    {text} < FaArrowDown />
                </p>
                <hr className="w-1/4"/>
            </div>
    )
}