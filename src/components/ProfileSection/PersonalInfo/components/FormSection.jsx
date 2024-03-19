import 'react-international-phone/style.css';
import { useCallback, useRef, useState } from 'react';

import { PhoneInput } from 'react-international-phone';
import Controllers from './Controllers';
import useStore from '../../../../zustand/store';
import { initialProfileValue } from '../../../../utils/constants';
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

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        if (e.target.dataset.type === 'save') return;

        if (hasChange.current) {
            const controller = new AbortController();
            await updateUserProfile(userId, personalState, controller.signal);
        }
    };

    return (
        <section className="flex flex-col px-6 text-white">
            <form onSubmit={handleOnSubmit} className="flex flex-col gap-2 ">
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
                    <div>
                        <label htmlFor="phoneNumbee">Phone number</label>
                        <PhoneInput
                            name="phoneNumber"
                            style={{
                                color: '#1B263E',
                                backgroundColor: '#1B263E',
                                width: 'max-content',
                            }}
                            defaultCountry="bg"
                            value={personalState.phoneNumber}
                            inputStyle={{
                                backgroundColor: '#1B263E',
                                color: 'white',
                                width: '180px',
                            }}
                            onChange={(phone) =>
                                setProfileInfo((state) => ({
                                    ...state,
                                    phoneNumber: phone,
                                }))
                            }
                        />
                    </div>
                </div>
                <p className="pt-4 text-[0.7em] text-orange-300">
                    Please ensure all fields are filled to enjoy all features of
                    our app to the fullest.
                </p>

                <Controllers />
            </form>
        </section>
    );
}
