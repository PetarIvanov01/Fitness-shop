import { GrLinkNext } from "react-icons/gr";
import { Link } from "react-router-dom";

const categories = [
    {
        title: 'Cardio',
        path: 'cardio'
    },
    {
        title: 'Machines',
        path: 'machines'
    },
    {
        title: 'Free Weights',
        path: 'free-weights'
    }
];

export default function AsideUl({
    isVisible
}) {

    return (
        <ul className={`${!isVisible && "hidden"} flex flex-col pl-4 pt-5 gap-2 w-full`}>
            {categories.map(e => <li className="opacity-50 w-auto cursor-pointer hover:opacity-100" key={e.title}>
                <Link className="group flex items-center gap-2" to={`/catalog?category=${e.path}`}>
                    {e.title} <GrLinkNext className="hidden group-hover:block" />
                </Link>
            </li>)}
        </ul>
    )
}