import { GrLinkNext } from "react-icons/gr";
import Heading from "./Tags/Heading";

export default function GetStarted() {

    return (
        <div className="w-1/2 text-white ">

            <Heading text={'For new users'} />

            <div className="pt-6 opacity-55 font-alegreya">
                <p>Welcome to Fitness Shop!</p>
                <p>Register to unlock buying capabilities, add new items to the shop, and enjoy other exclusive features. Elevate your fitness shopping experience today!</p>
            </div>

            <button className="flex opacity-55 items-center mt-6 text-sm bg-white py-1 px-1 rounded-sm hover:scale-105 hover:opacity-85 text-black">
                Get Started <GrLinkNext className="ml-2" />
            </button>
        </div>
    );
};