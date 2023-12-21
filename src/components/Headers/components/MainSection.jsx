import menu from "../../../assets/menu.svg";
import logo from "../../../assets/logo.jpg";

export default function MainSection({ handleAsideVisible }) {


    return (
        <section className="flex items-center px-6 bg-stone-800 bg-opacity-95 h-16">

            <button onClick={handleAsideVisible} className="w-8 hover:scale-110">
                <img className="w-auto" src={menu} alt="menu" />
            </button>

            <div className="cursor-pointer w-16  absolute left-1/2 transform -translate-x-1/2">
                <img src={logo} alt="logo" className="h-full" />
            </div>

        </section>
    );
};