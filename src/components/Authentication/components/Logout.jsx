import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { sendUserLogout } from "../../../api/services/user";

export default function Logout() {

    useEffect(() => {
        sendUserLogout()

    }, []);

    return <Navigate to={'/'} />;
}