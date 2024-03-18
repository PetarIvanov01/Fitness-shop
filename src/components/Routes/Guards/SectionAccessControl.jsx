import { Navigate, Outlet, useParams } from 'react-router-dom';
import PersonalInfoSection from '../../ProfileSection/PersonalInfo/PersonalInfoSection';

const SECTION_COMPONENT_MAPPING = {
    info: PersonalInfoSection,
    address: PersonalInfoSection,
    orders: PersonalInfoSection,
    'pay-methods': PersonalInfoSection,
};

function isValidSectionType(type) {
    return type && Object.keys(SECTION_COMPONENT_MAPPING).includes(type);
}

export default function SectionAccessControl() {
    const params = useParams();

    const RenderedSection = SECTION_COMPONENT_MAPPING[params.type];

    if (!isValidSectionType(params.type)) {
        return <Navigate to={'/'} />;
    }

    return <Outlet context={{ RenderedSection, userId: params.userId }} />;
}
