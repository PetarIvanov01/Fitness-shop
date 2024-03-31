import { GrLinkNext } from 'react-icons/gr';
import { Link } from 'react-router-dom';

const categories = [
    {
        title: 'Cardio',
        path: 'cardio',
    },
    {
        title: 'Machines',
        path: 'machines',
    },
    {
        title: 'Free Weights',
        path: 'free-weights',
    },
];

export default function AsideUl({ isVisible, onClickClose }) {
    return (
        <ul
            className={`${!isVisible && 'hidden'} flex w-full flex-col gap-2 pl-4 pt-5 max-[639px]:text-sm`}
        >
            {categories.map((e) => (
                <li
                    className="w-auto cursor-pointer opacity-50 hover:opacity-100"
                    key={e.title}
                >
                    <Link
                        onClick={onClickClose}
                        className="group flex items-center gap-2"
                        to={`/catalog?category=${e.path}`}
                    >
                        {e.title}{' '}
                        <GrLinkNext className="hidden group-hover:block" />
                    </Link>
                </li>
            ))}
        </ul>
    );
}
