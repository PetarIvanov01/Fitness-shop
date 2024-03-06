import { useCallback, useState } from 'react';

import AsideHeader from './AsideHeader';
import MainSection from './components/MainSection';
import SecondarySection from './components/SecondarySection';
import useCloseSection from '../../hooks/useCloseSection';
import useStore from '../../zustand/store';

export default function Header() {
    const userId = useStore((state) => state.user?.id);

    const [isVisible, setIsVisible] = useState(false);
    const { ref } = useCloseSection(setIsVisible);

    const handleAsideVisible = useCallback(() => {
        setIsVisible((prev) => !prev);
    }, []);

    const onClickClose = useCallback(() => {
        setIsVisible(false);
    }, []);

    return (
        <header className="flex flex-col">
            <SecondarySection />

            <div ref={ref} className="relative">
                <MainSection
                    userId={userId}
                    handleAsideVisible={handleAsideVisible}
                    onClickClose={onClickClose}
                />
                <AsideHeader
                    userId={userId}
                    onClickClose={onClickClose}
                    visible={isVisible}
                />
            </div>
        </header>
    );
}
