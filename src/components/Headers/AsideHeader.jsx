export default function AsideHeader({ visible }) {


    return (
        <aside className={`${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[-100%]'}
             absolute bg-opacity-95 transition-transform w-52 px-8 py-16 bg-stone-900 text-stone-50`}>

            <h2 className="mb-8 font-bold  uppercase md:text-xl text-slate-300 ">
                Products
            </h2>

            <div>
                <button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-300 hover:bg-stone-500">
                    + Categories
                </button>
            </div>
        </aside>
    )
}