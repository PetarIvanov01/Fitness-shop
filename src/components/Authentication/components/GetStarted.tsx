import { GrLinkNext } from 'react-icons/gr';
import Heading from './Tags/Heading';

type GetStartedProps = {
    handler: () => void;
    isGuest: boolean;
};

export default function GetStarted({ handler, isGuest }: GetStartedProps) {
    const message = isGuest ? 'Already an user' : 'Get Started';
    const width = isGuest ? 'w-full' : 'w-1/2';

    return (
        <div className={`${width} text-white max-sm:w-full`}>
            <Heading text={'For new users'} />

            <div className="py-6 font-alegreya">
                <p>Welcome to Fitness Shop!</p>
                <p>
                    Register to unlock buying capabilities, add new items to the
                    shop, and enjoy other exclusive features. Elevate your
                    fitness shopping experience today!
                </p>
            </div>

            <button
                onClick={handler}
                className="flex items-center gap-2 rounded-sm bg-white bg-opacity-65 p-1 text-sm text-black hover:scale-105 hover:bg-opacity-95"
            >
                {message} <GrLinkNext />
            </button>
        </div>
    );
}
