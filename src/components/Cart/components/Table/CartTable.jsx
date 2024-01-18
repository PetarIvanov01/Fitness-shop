import TableHead from "./TableHead";
import TableRow from "./TableRow";

export default function TableCart() {
    return (
        <div className="grow px-4">
            <table className="w-full border-collapse border border-gray-300">

                <TableHead />

                <tbody>
                    <TableRow />
                    <TableRow />
                </tbody>

            </table>
        </div>
    )
}