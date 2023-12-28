import { Routes, Route } from "react-router-dom"
import Main from "../Main/Main"
import AuthenticationSection from "../Authentication/AuthenticationSection"

export default function Router() {

    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<AuthenticationSection />} />
            <Route path="/register" element={<AuthenticationSection />} />
        </Routes>
    )
}