export default function Footer() {

    return (
        <footer className="opacity-75 mt-auto flex items-center justify-center w-full h-16 bg-stone-800 border-solid border-1 border-stone-950">
            <p className="flex w-max h-max text-xl text-stone-200 max-sm:text-xs">
                © {new Date().getFullYear()} Your Powerlifting Shop Name. All Rights Reserved.
            </p>
        </footer>
    )
}