import { GrLinkNext } from 'react-icons/gr';
import CatalogLink from '../../CatalogLink';

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
] as const;
type AsideUlProps = {
    isVisible: boolean;
    onClickClose: () => void;
};
export default function AsideUl({ isVisible, onClickClose }: AsideUlProps) {
    return (
        <ul
            className={`${!isVisible && 'hidden'} flex w-full flex-col gap-2 pl-4 pt-5 max-[639px]:text-sm`}
        >
            {categories.map((e) => (
                <li
                    className="w-auto cursor-pointer opacity-50 hover:opacity-100"
                    key={e.title}
                >
                    <div className="group">
                        <CatalogLink
                            handler={onClickClose}
                            queryType="category"
                            queryValue={e.path}
                        >
                            <span className="flex items-center gap-2">
                                {e.title}{' '}
                                <GrLinkNext className="hidden group-hover:block" />
                            </span>
                        </CatalogLink>
                    </div>
                </li>
            ))}
        </ul>
    );
}
