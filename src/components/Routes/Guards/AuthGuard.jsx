import { Navigate, Outlet } from "react-router-dom"
import useStore from "../../../zustand/store"

export function IsGuest() {

    const user = useStore((state) => state.user);

    if (user && user.id) {
        return <Navigate to={'/'} replace={true} />;
    }

    return <Outlet />;
}


export function IsAuthenticatedUser() {

    const user = useStore((state) => state.user);

    if (user && user.id) {
        return <Outlet />;
    }

    return <Navigate to={'/'} replace={true} />;
}