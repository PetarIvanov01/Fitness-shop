export default function Footer() {

    return (
       <footer className="opacity-75 flex items-center border-solid border-1
        border-stone-950 justify-center w-full h-16 bg-stone-800">
            <p className="flex w-max h-max text-xl text-stone-200 max-sm:text-xs">
                © {new Date().getFullYear()} Your Powerlifting Shop Name. All Rights Reserved.
            </p>
        </footer>
    );
};