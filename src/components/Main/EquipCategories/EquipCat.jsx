import Categories from "./components/Categories";

export default function EquipCategories() {

    return (
        <section className="bg-stone-950 py-4 opacity-95">

            <header className="text-center">
                <h1 className="text-[2em] max-md:text-[1.5em] text-white font-bold">Shop Equipment</h1>
            </header>

            <Categories />

        </section>
    );
};