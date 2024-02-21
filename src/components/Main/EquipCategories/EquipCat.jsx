import Categories from './components/Categories';

export default function EquipCategories() {
    return (
        <section className="bg-stone-950 bg-opacity-95 py-4">
            <header className="text-center">
                <h1 className="text-[2em] font-bold text-white max-md:text-[1.5em]">
                    Shop Equipment
                </h1>
            </header>

            <Categories />
        </section>
    );
}
