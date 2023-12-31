import { useState } from "react";
import AsideHeader from "./AsideHeader";
import MainSection from "./components/MainSection";
import SecondarySection from "./components/SecondarySection";
import useCloseSection from "../../hooks/useCloseSection";

export default function Header() {

    const [isVisible, setIsVisible] = useState(false);
    const { ref } = useCloseSection(setIsVisible);

    const handleAsideVisible = () => {
        setIsVisible(prev => !prev);
    };

    return (

        <header className="flex flex-col">

            <SecondarySection />

            <div ref={ref} className="relative">
                <MainSection handleAsideVisible={handleAsideVisible} />
                <AsideHeader visible={isVisible} setter={setIsVisible} />
            </div>

        </header>
    );
};