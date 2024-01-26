export default function Footer() {
    return (
        <footer
            className="border-1 flex h-16 w-full items-center
        justify-center border-solid border-stone-950 bg-stone-800 opacity-75"
        >
            <p className="flex h-max w-max text-xl text-stone-200 max-sm:text-xs">
                © {new Date().getFullYear()} Your Powerlifting Shop Name. All
                Rights Reserved.
            </p>
        </footer>
    );
}
