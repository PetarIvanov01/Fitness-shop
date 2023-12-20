import menu from "../../../assets/menu.svg"

export default function MainSection({ handleAsideVisible }) {


    return (
        <section className="flex items-center px-6 bg-stone-900 bg-opacity-95 h-16">

            <button onClick={handleAsideVisible} className="w-8 hover:scale-110">
                <img className="w-auto " src={menu} alt="menu" />
            </button>

        </section>
    )
}