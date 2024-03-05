import { useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

import { updateUserInformation } from '../../api/services/user';
import EditSaveToggleButton from './components/EditSaveToggleButton';
import PersonalInfo from './components/PersonalInfo';
import ShippingInfo from './components/ShippingInfo';
import useStore from '../../zustand/store';

export default function ProfileForm() {
    const [isEditing, setIsEditing] = useState(true);
    const { userId } = useParams();

    const fetchProfile = useStore((state) => state.fetchProfile);
    useFetch(fetchProfile, userId);

    const handleOnChangePersonalInfo = useStore(
        (state) => state.handleOnChangePersonalInfo
    );
    const handleOnChangeShippingInfo = useStore(
        (state) => state.handleOnChangeShippingInfo
    );

    const personalInfo = useStore((state) => state.personalInfo);
    const shippingInfo = useStore((state) => state.shippingInfo);

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        if (e.target.dataset.type === 'save') return;

        const controller = new AbortController();
        await updateUserInformation(
            userId,
            {
                personalInfo,
                shippingInfo,
            },
            controller.signal
        );
    };

    return (
        <div className="relative">
            <form
                onSubmit={handleOnSubmit}
                data-type={isEditing ? 'edit' : 'save'}
            >
                <PersonalInfo
                    handleOnChange={handleOnChangePersonalInfo}
                    isEditing={isEditing}
                    {...personalInfo}
                />
                <div className="absolute right-[50%] my-2 h-[1px] w-2/3 translate-x-1/2 bg-white"></div>
                <ShippingInfo
                    handleOnChange={handleOnChangeShippingInfo}
                    isEditing={isEditing}
                    {...shippingInfo}
                />
                <EditSaveToggleButton
                    isEditing={isEditing}
                    setIsEditing={setIsEditing}
                />
            </form>
        </div>
    );
}
