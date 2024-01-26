import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { sendUserLogout } from '../../../api/services/user';
import { toast } from 'sonner';

export default function Logout() {
    useEffect(() => {
        sendUserLogout().then((e) => toast('You are logged out!'));
    }, []);

    return <Navigate to={'/'} />;
}
