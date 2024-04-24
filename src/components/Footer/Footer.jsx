import { FaGithub } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="border-1 flex h-16 w-full items-center justify-between border-solid border-stone-950 bg-stone-800/75 px-2 text-xl">
            <p className="flex flex-col items-center justify-center text-stone-200 max-sm:text-xs">
                © {new Date().getFullYear()} Powerlifting Shop. All Rights
                Reserved.
            </p>
            <div>
                <a
                    href="https://github.com/PetarIvanov01"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 flex items-center text-stone-200 hover:underline"
                >
                    <FaGithub className="mr-1" />
                    GitHub
                </a>
            </div>
        </footer>
    );
}
