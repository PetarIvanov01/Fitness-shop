import { MdKeyboardArrowRight } from 'react-icons/md';

export function NavLi({ children, Icon }) {
    return (
        <li>
            <div
                className="group flex items-center gap-1 rounded-md
          px-0.5 py-1 text-sm hover:bg-gradient-to-r hover:from-[#5D6890] hover:via-[#4E5C80] hover:to-[#3F4D70]"
            >
                <Icon className="size-8" />
                {children}
                <MdKeyboardArrowRight className="invisible group-hover:visible" />
            </div>
        </li>
    );
}
