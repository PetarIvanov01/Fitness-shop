import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { sendUserLogout } from '../../../api/services/user';
import { toast } from 'sonner';
import useStore from '../../../zustand/store';

export default function Logout() {
    const clearCartData = useStore((state) => state.clearCartData);

    useEffect(() => {
        sendUserLogout().then((e) => {
            clearCartData();
            toast('You are logged out!');
        });
    }, []);

    return <Navigate to={'/'} />;
}
