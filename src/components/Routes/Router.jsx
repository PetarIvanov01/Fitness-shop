import { Routes, Route } from "react-router-dom";
import Main from "../Main/Main";
import AuthenticationSection from "../Authentication/AuthenticationSection";
import Catalog from "../Catalog/Catalog";
import { IsGuest, IsAuthenticatedUser } from "./Guards/AuthGuard";
import Logout from "../Authentication/components/Logout";

export default function Router() {

    return (
        <div className="flex-1 overflow-auto py-6">
            <Routes>
                <Route path="/" element={<Main />} />

                <Route element={<IsGuest />}>
                    <Route path="/login" element={<AuthenticationSection />} />
                    <Route path="/register" element={<AuthenticationSection />} />
                </Route>

                <Route element={<IsAuthenticatedUser />}>
                    <Route path="/logout" element={<Logout />} />
                </Route>

                <Route path="/catalog" element={<Catalog />} />
            </Routes>
        </div>
    );
};