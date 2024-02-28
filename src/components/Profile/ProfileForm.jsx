import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

import {
    getUserInformation,
    updateUserInformation,
} from '../../api/services/user';
import EditSaveToggleButton from './components/EditSaveToggleButton';
import PersonalInfo from './components/PersonalInfo';
import ShippingInfo from './components/ShippingInfo';

const initialShippingState = {
    country: '',
    city: '',
    address: '',
    zip: '',
};
const initialPersonalInformation = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
};

export default function ProfileForm() {
    const [isEditing, setIsEditing] = useState(true);
    const { userId } = useParams();

    const { data } = useFetch(getUserInformation, userId);
    const [valueState, setValuesState] = useState({
        personalInfo: {
            ...initialPersonalInformation,
        },
        shippingInfo: {
            ...initialShippingState,
        },
    });

    useEffect(() => {
        if (data.id !== undefined) {
            setValuesState((state) => {
                const [firstName, lastName] = data.fullName
                    ? data.fullName.split(' ')
                    : ['', ''];
                /* eslint no-unused-vars: "off" */
                const { fullName, id, ...rest } = data;
                return {
                    shippingInfo: { ...state.shippingInfo },
                    personalInfo: { ...rest, firstName, lastName },
                };
            });
        }
    }, [data]);

    const handleOnChangePersonalInfo = useCallback((e) => {
        e.preventDefault();
        setValuesState((state) => ({
            shippingInfo: { ...state.shippingInfo },
            personalInfo: {
                ...state.personalInfo,
                [e.target.name]: e.target.value,
            },
        }));
    }, []);

    const handleOnChangeShippingInfo = useCallback((e) => {
        e.preventDefault();
        setValuesState((state) => ({
            personalInfo: { ...state.personalInfo },
            shippingInfo: {
                ...state.shippingInfo,
                [e.target.name]: e.target.value,
            },
        }));
    }, []);

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        if (e.target.dataset.type === 'save') return;

        const controller = new AbortController();
        await updateUserInformation(userId, valueState, controller.signal);
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
                    {...valueState.personalInfo}
                />
                <div className="absolute right-[50%] my-2 h-[1px] w-2/3 translate-x-1/2 bg-white"></div>
                <ShippingInfo
                    handleOnChange={handleOnChangeShippingInfo}
                    isEditing={isEditing}
                    {...valueState.shippingInfo}
                />
                <EditSaveToggleButton
                    isEditing={isEditing}
                    setIsEditing={setIsEditing}
                />
            </form>
        </div>
    );
}
