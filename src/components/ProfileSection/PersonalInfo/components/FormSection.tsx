import {
    ChangeEvent,
    MutableRefObject,
    useCallback,
    useRef,
    useState,
} from 'react';

import useStore from '../../../../zustand/store';

import { PersonalInfoReturnedType } from '../../../../zustand/interfaces/UserSlice';
import { initialProfileValue } from '../../../../utils/constants';

import PhoneComp from './PhoneComp';
import Controllers from './Controllers';
import Field from '../../components/Field';

type FormProps = {
    userId: string;
    personalInfo: PersonalInfoReturnedType | {};
    emptyValue: boolean;
};

export default function FormSection({
    userId,
    personalInfo,
    emptyValue,
}: FormProps) {
    const [personalState, setProfileInfo] = useState<PersonalInfoReturnedType>(
        () => {
            if (!emptyValue) {
                return personalInfo as PersonalInfoReturnedType;
            }
            return initialProfileValue.personalInfo;
        }
    );
    const updateUserProfile = useStore((state) => state.updateUserProfile);
    const hasChange: MutableRefObject<boolean | undefined> = useRef();

    const handleOnChangePersonalInfo = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            e.preventDefault();
            hasChange.current = true;
            setProfileInfo((state) => ({
                ...state,
                [e.target.name]: e.target.value,
            }));
        },
        [setProfileInfo, hasChange]
    );

    const handleOnChangePhoneInput = useCallback(
        (phone: string) => {
            if (personalState.phoneNumber) {
                if (phone !== personalState.phoneNumber.replace(' ', '')) {
                    console.log('yes');

                    hasChange.current = true;
                    setProfileInfo((state) => ({
                        ...state,
                        phoneNumber: phone,
                    }));
                }
            }
        },
        [setProfileInfo, hasChange, personalState.phoneNumber]
    );

    const handleOnSubmit = async () => {
        if (hasChange.current) {
            const controller = new AbortController();
            await updateUserProfile(userId, personalState, controller.signal);
            hasChange.current = false;
        }
    };

    return (
        <section className="flex flex-col px-6 font-sans text-white">
            <form className="flex flex-col gap-4 ">
                <div className="flex flex-wrap justify-between gap-4 max-[730px]:justify-center">
                    <div className="flex grow flex-col">
                        <Field
                            handleOnChange={handleOnChangePersonalInfo}
                            id={'firstName'}
                            name={'firstName'}
                            type={'text'}
                            label={'First Name'}
                            value={personalState.firstName}
                        />
                    </div>
                    <div className="flex grow flex-col">
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
                        isEdit={true}
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
                    hasChange={hasChange.current}
                    handleOnSubmit={handleOnSubmit}
                />
            </form>
        </section>
    );
}
