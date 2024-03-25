export default function Header({ icon, title, text }) {
    return (
        <header className="px-6 py-8">
            <div className="to-[#394A68 0%] rounded-md bg-gradient-to-b from-[#2E3C54] via-[#1B263E] px-2 py-4 shadow-[0_2px_0_rgba(0,0,0,0.25)_inset]">
                <h1 className="flex gap-3 pb-2 text-2xl font-medium text-white">
                    {icon}
                    {title}
                </h1>
                <p className="w-fit pl-11 text-sm text-white">{text}</p>
            </div>
        </header>
    );
}
