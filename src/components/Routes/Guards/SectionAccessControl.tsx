import {
    Navigate,
    Outlet,
    useOutletContext,
    useParams,
} from 'react-router-dom';

import PersonalInfoSection from '../../ProfileSection/PersonalInfo/PersonalInfoSection';
import AddressSection from '../../ProfileSection/AddressInfo/AddressSection';
import OrderSection from '../../ProfileSection/OrdersInfo/OrderSection';

type Keys = keyof typeof SECTION_COMPONENT_MAPPING;

type SectionContext = {
    RenderedSection: (typeof SECTION_COMPONENT_MAPPING)[Keys];
    userId: string;
    type: Keys;
};

const SECTION_COMPONENT_MAPPING = {
    info: PersonalInfoSection,
    address: AddressSection,
    orders: OrderSection,
    'pay-methods': PersonalInfoSection,
} as const;

function isValidSectionType(type: string): boolean {
    return type in SECTION_COMPONENT_MAPPING;
}

export function SectionAccessControl() {
    const params = useParams<{
        type: keyof typeof SECTION_COMPONENT_MAPPING;
        userId: string;
    }>();

    if (
        params.type === undefined ||
        params.userId === undefined ||
        !isValidSectionType(params.type)
    ) {
        return <Navigate to={'/'} />;
    }

    const RenderedSection = SECTION_COMPONENT_MAPPING[params.type];

    return (
        <Outlet
            context={
                {
                    RenderedSection,
                    userId: params.userId,
                    type: params.type,
                } satisfies SectionContext
            }
        />
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useSectionType() {
    return useOutletContext<SectionContext>();
}
