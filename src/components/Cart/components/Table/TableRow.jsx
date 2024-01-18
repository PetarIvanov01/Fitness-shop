export default function TableRow() {

    return (
        <tr className="border-b max-sm:text-[0.7em]">
            <td className="flex p-2 items-center">
                <div className="p-2">
                    <img className="size-24"
                        src="https://pulsegymshop.bg/image/cache/catalog/products/active-gym/New%20Pics/Elliptical-black-60x60.png"
                        alt="Product 1" />
                </div>

                <div>
                    Elliptical Machine 
                </div>
            </td>

            <td className="p-2 text-center" >
                <div >
                    <span className="border px-4 py-2">1</span>
                </div>
            </td>
            <td className="p-2 text-center">
                <div>
                    299.32 $
                </div>

            </td>
        </tr>

    )
};