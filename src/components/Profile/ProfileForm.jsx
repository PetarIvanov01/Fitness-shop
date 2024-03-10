import { useCallback, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

import EditSaveToggleButton from './components/EditSaveToggleButton';
import PersonalInfo from './components/PersonalInfo';
import ShippingInfo from './components/ShippingInfo';
import useStore from '../../zustand/store';
import useProfileCache from '../../hooks/useProfileCache';
import { initialProfileValue } from '../../utils/constants';

export default function ProfileForm() {
    const { userId } = useParams();
    const [isEditing, setIsEditing] = useState(true);

    const updateUserProfile = useStore((state) => state.updateUserProfile);

    const { personalInfo, shippingInfo } = useProfileCache();
    const [profileState, setProfileInfo] = useState(initialProfileValue);
    const hasChange = useRef();

    useEffect(() => {
        setProfileInfo({
            personalInfo,
            shippingInfo,
        });
    }, [personalInfo, shippingInfo]);

    const handleOnChangePersonalInfo = useCallback((e) => {
        e.preventDefault();
        hasChange.current = true;
        setProfileInfo((state) => ({
            ...state,
            personalInfo: {
                ...state.personalInfo,
                [e.target.name]: e.target.value,
            },
        }));
    }, []);
    const handleOnChangeShippingInfo = useCallback((e) => {
        e.preventDefault();
        hasChange.current = true;
        setProfileInfo((state) => ({
            ...state,
            shippingInfo: {
                ...state.shippingInfo,
                [e.target.name]: e.target.value,
            },
        }));
    }, []);

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        if (e.target.dataset.type === 'save') return;

        if (hasChange.current) {
            const controller = new AbortController();
            await updateUserProfile(userId, profileState, controller.signal);
        }
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
                    {...profileState.personalInfo}
                />
                <div className="absolute right-[50%] my-2 h-[1px] w-2/3 translate-x-1/2 bg-white"></div>
                <ShippingInfo
                    handleOnChange={handleOnChangeShippingInfo}
                    isEditing={isEditing}
                    {...profileState.shippingInfo}
                />
                <EditSaveToggleButton
                    isEditing={isEditing}
                    setIsEditing={setIsEditing}
                />
            </form>
        </div>
    );
}
