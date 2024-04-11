import { useCallback, useRef, useState } from 'react';
import { initialProfileValue } from '../../../../utils/constants';

import useStore from '../../../../zustand/store';

import Field from '../../components/Field';
import Controllers from '../../components/Controllers';

export default function FormSection({ userId, shippingInfo, emptyValue }) {
    const [addressState, setAddressInfo] = useState(() => {
        if (!emptyValue) {
            return shippingInfo;
        }
        return initialProfileValue.shippingInfo;
    });
    const updateUserAddress = useStore((state) => state.updateUserAddress);
    const hasChange = useRef();

    const handleOnChangePersonalInfo = useCallback(
        (e) => {
            e.preventDefault();
            hasChange.current = true;
            setAddressInfo((state) => ({
                ...state,
                [e.target.name]: e.target.value,
            }));
        },
        [setAddressInfo, hasChange]
    );

    const handleOnSubmit = async () => {
        if (hasChange.current) {
            const controller = new AbortController();
            await updateUserAddress(
                userId,
                addressState,
                controller.signal,
                shippingInfo.address_id
            );
            hasChange.current = false;
        }
    };

    return (
        <section className="flex flex-col px-6 text-white">
            <form className="flex flex-col gap-4 ">
                <div className="flex flex-wrap justify-between gap-4 max-[730px]:justify-center">
                    <div className="flex grow flex-col">
                        <Field
                            handleOnChange={handleOnChangePersonalInfo}
                            id={'address'}
                            name={'address'}
                            type={'text'}
                            label={'Address'}
                            value={addressState.address || ''}
                        />
                    </div>
                    <div className="flex grow flex-col">
                        <Field
                            handleOnChange={handleOnChangePersonalInfo}
                            id={'country'}
                            name={'country'}
                            type={'text'}
                            label={'Country'}
                            value={addressState.country || ''}
                        />
                    </div>
                </div>
                <div className="flex flex-wrap justify-between gap-4 max-[730px]:justify-center">
                    <div className="flex grow flex-col">
                        <Field
                            handleOnChange={handleOnChangePersonalInfo}
                            id={'city'}
                            name={'city'}
                            type={'text'}
                            label={'City'}
                            value={addressState.city || ''}
                        />
                    </div>
                    <div className="flex grow flex-col">
                        <Field
                            handleOnChange={handleOnChangePersonalInfo}
                            id={'postcode'}
                            name={'postcode'}
                            type={'text'}
                            label={'Postal Code'}
                            value={addressState.postcode || ''}
                        />
                    </div>
                </div>
                <p className="pt-4 text-[0.8em] text-orange-300">
                    Please ensure all fields are filled to enjoy all features of
                    our app to the fullest.
                </p>

                <Controllers
                    text={
                        'Are you sure you want to edit your address information?'
                    }
                    hasChange={hasChange.current}
                    handleOnSubmit={handleOnSubmit}
                />
            </form>
        </section>
    );
}
