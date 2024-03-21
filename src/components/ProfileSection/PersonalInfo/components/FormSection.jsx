import { useCallback, useRef, useState } from 'react';
import { initialProfileValue } from '../../../../utils/constants';

import useStore from '../../../../zustand/store';

import PhoneComp from './PhoneComp';
import Controllers from './Controllers';
import Field from '../../components/Field';

export default function FormSection({ userId, personalInfo, emptyValue }) {
    const [personalState, setProfileInfo] = useState(() => {
        if (!emptyValue) {
            return personalInfo;
        }
        return initialProfileValue.personalInfo;
    });
    const updateUserProfile = useStore((state) => state.updateUserProfile);
    const hasChange = useRef();

    const handleOnChangePersonalInfo = useCallback(
        (e) => {
            e.preventDefault();
            hasChange.current = true;
            setProfileInfo((state) => ({
                ...state,
                [e.target.name]: e.target.value,
            }));
        },
        [setProfileInfo]
    );

    const handleOnChangePhoneInput = useCallback((phone) => {
        setProfileInfo((state) => ({
            ...state,
            phoneNumber: phone,
        }));
    }, []);

    const handleOnSubmit = async () => {
        if (hasChange.current) {
            const controller = new AbortController();
            await updateUserProfile(userId, personalState, controller.signal);
            hasChange.current = false;
        }
    };

    return (
        <section className="flex flex-col px-6 text-white">
            <form className="flex flex-col gap-4 ">
                <div className="flex flex-wrap justify-between gap-2 max-[730px]:justify-center">
                    <div className="flex flex-col">
                        <Field
                            handleOnChange={handleOnChangePersonalInfo}
                            id={'firstName'}
                            name={'firstName'}
                            type={'text'}
                            label={'First Name'}
                            value={personalState.firstName}
                        />
                    </div>
                    <div className="flex flex-col">
                        <Field
                            handleOnChange={handleOnChangePersonalInfo}
                            id={'lastName'}
                            name={'lastName'}
                            type={'text'}
                            label={'Last Name'}
                            value={personalState.lastName}
                        />
                    </div>
                </div>
                <div className="flex flex-col">
                    <Field
                        handleOnChange={handleOnChangePersonalInfo}
                        id={'email'}
                        name={'email'}
                        type={'email'}
                        label={'Email'}
                        value={personalState.email}
                    />
                </div>
                <div className="flex flex-col max-[730px]:items-center">
                    <PhoneComp
                        handlOnChange={handleOnChangePhoneInput}
                        phoneNumber={personalState.phoneNumber}
                    />
                </div>
                <p className="pt-4 text-[0.8em] text-orange-300">
                    Please ensure all fields are filled to enjoy all features of
                    our app to the fullest.
                </p>

                <Controllers
                    text={
                        'Are you sure you want to edit your personal information?'
                    }
                    hasChange={hasChange.current}
                    handleOnSubmit={handleOnSubmit}
                />
            </form>
        </section>
    );
}
