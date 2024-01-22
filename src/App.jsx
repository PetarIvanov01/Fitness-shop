import Footer from "./components/Footer/Footer";
import Header from "./components/Headers/MainHeader";
import Router from "./components/Routes/Router";
import ToasterWithStyles from "./components/Toaster";

export default function App() {

    return (
        <div className="flex flex-col h-screen bg-fitnes-img bg-cover bg-no-repeat bg-center">

            <Header />

            <Router />

            <Footer />

            <ToasterWithStyles />
        </div>
    );
};