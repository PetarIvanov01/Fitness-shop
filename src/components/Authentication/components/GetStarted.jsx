import { GrLinkNext } from 'react-icons/gr';
import Heading from './Tags/Heading';

export default function GetStarted({ handler, isGuest }) {
    const message = isGuest ? 'Already an user' : 'Get Started';
    const width = isGuest ? 'w-full' : 'w-1/2';

    return (
        <div className={`${width} text-white`}>
            <Heading text={'For new users'} />

            <div className="pt-6 font-alegreya">
                <p>Welcome to Fitness Shop!</p>
                <p>
                    Register to unlock buying capabilities, add new items to the
                    shop, and enjoy other exclusive features. Elevate your
                    fitness shopping experience today!
                </p>
            </div>

            <button
                onClick={handler}
                className="mt-6 flex items-center gap-2 rounded-sm bg-white bg-opacity-65 px-1 py-1 text-sm text-black hover:scale-105 hover:bg-opacity-95"
            >
                {message} <GrLinkNext />
            </button>
        </div>
    );
}
