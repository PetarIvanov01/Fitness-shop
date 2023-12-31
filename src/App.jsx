import Footer from "./components/Footer/Footer";
import Header from "./components/Headers/MainHeader";
import Router from "./components/Routes/Router";

export default function App() {

    return (
        <div className="flex flex-col h-screen bg-fitnes-img bg-cover bg-no-repeat bg-center">

            <Header />

            <Router />

            <Footer />
        </div>
    );
};