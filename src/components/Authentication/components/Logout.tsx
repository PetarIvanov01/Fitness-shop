import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { sendUserLogout } from '../../../api/services/auth';
import { toast } from 'sonner';
import useStore from '../../../zustand/store';

export default function Logout() {
    const clearCartItem = useStore((state) => state.clearCartItem);

    useEffect(() => {
        sendUserLogout().then(() => {
            clearCartItem();
            toast('You are logged out!');
        });
    }, [clearCartItem]);

    return <Navigate to={'/'} />;
}
