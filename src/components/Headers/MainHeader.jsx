import { useState } from "react";
import AsideHeader from "./AsideHeader";
import MainSection from "./components/MainSection";
import SecondarySection from "./components/SecondarySection";

export default function Header() {

    const [isVisible, setIsVisible] = useState(true);

    const handleAsideVisible = () => {
        setIsVisible(prev => !prev);
    };

    return (

        <header className="flex flex-col">

            <SecondarySection />

            <div className="relative">
                <MainSection handleAsideVisible={handleAsideVisible}/>

                <AsideHeader visible={isVisible} />
            </div>
        </header>

    )
}