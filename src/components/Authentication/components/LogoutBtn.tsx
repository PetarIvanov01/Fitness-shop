import { toast } from 'sonner';
import useStore from '../../../zustand/store';

import { useNavigate } from 'react-router-dom';

import { sendUserLogout } from '../../../api/services/auth';

type Props = {
    children: React.ReactNode;
} & React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>;
export default function LogoutBtn(props: Props) {
    const { children, ...rest } = props;

    const clearCartItem = useStore((state) => state.clearCartItem);
    const navigate = useNavigate();

    const handleLogout = async () => {
        await sendUserLogout();
        clearCartItem();

        navigate('/', { replace: true });

        toast('You are logged out!');
    };

    return (
        <button {...rest} onClick={handleLogout}>
            {children}
        </button>
    );
}
