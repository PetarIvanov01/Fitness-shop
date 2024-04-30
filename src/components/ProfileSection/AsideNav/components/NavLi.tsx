import { IconType } from 'react-icons';
import { MdKeyboardArrowRight } from 'react-icons/md';

type SectionType = 'info' | 'address' | 'orders' | 'pay-methods';

type NavLiProps = {
    children: JSX.Element;
    Icon: IconType;
    active: SectionType;
    id: SectionType;
};
export function NavLi({ children, Icon, active, id }: NavLiProps) {
    const activeStyle =
        active === id
            ? 'bg-gradient-to-r from-[#5D6890] via-[#4E5C80] to-[#3F4D70] '
            : '';

    const activeArr = active === id ? 'visible' : 'invisible';
    return (
        <li>
            <div
                className={`group flex items-center ${activeStyle} gap-1 rounded-md
          px-0.5 py-1 text-sm hover:bg-gradient-to-r hover:from-[#5D6890] hover:via-[#4E5C80] hover:to-[#3F4D70]`}
            >
                <Icon className="size-8" />
                {children}
                <MdKeyboardArrowRight
                    className={`${activeArr}  group-hover:visible `}
                />
            </div>
        </li>
    );
}
