import { GrLinkNext } from "react-icons/gr";
import Heading from "./Tags/Heading";

export default function GetStarted({ handler, isGuest }) {

    const message = isGuest ? "Already an user" : "Get Started";
    const width = isGuest ? "w-full" : "w-1/2";

    return (
        <div className={`${width} text-white`}>

            <Heading text={'For new users'} />

            <div className="pt-6 opacity-55 font-alegreya">
                <p>Welcome to Fitness Shop!</p>
                <p>Register to unlock buying capabilities, add new items to the shop, and enjoy other exclusive features. Elevate your fitness shopping experience today!</p>
            </div>

            <button onClick={handler} className="flex gap-2 opacity-55 items-center mt-6 text-sm bg-white py-1 px-1 rounded-sm hover:scale-105 hover:opacity-85 text-black">
                {message} <GrLinkNext />
            </button>
        </div>
    );
};