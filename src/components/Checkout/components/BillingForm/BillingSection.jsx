import { useCallback, useEffect, useMemo, useState } from 'react';

import useStore from '../../../../zustand/store';
import useFetch from '../../../../hooks/useFetch';

import { initialProfileValue } from '../../../../utils/constants';

import { LuAsterisk } from 'react-icons/lu';
import { GiPadlock } from 'react-icons/gi';

import BillingHeader from './components/BillingHeader';
import OrderSection from '../Order/OrderSection';
import Label from './components/Label';
import Input from './components/Input';

export default function BillingSection() {
    const user = useStore((state) => state.user);
    const fetchData = useStore((state) => state.fetchBillingData);

    const { data } = useFetch(fetchData, user.id);

    const [personalState, setProfileInfo] = useState(
        initialProfileValue.personalInfo
    );
    const [addressState, setProfileAddress] = useState(
        initialProfileValue.shippingInfo
    );

    useEffect(() => {
        if (data.personalInfo && data.shippingInfo) {
            setProfileInfo(data.personalInfo);
            setProfileAddress(data.shippingInfo);
        }
    }, [data]);

    const handleOnChangePersonalInfo = useCallback((e) => {
        e.preventDefault();
        setProfileInfo((state) => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    }, []);

    const handleOnChangeShippingInfo = useCallback((e) => {
        e.preventDefault();
        setProfileAddress((state) => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    }, []);

    const orderData = useMemo(() => {
        return {
            orderInfo: {
                _userId: user.id,
                orderAddress: {
                    address: addressState.address,
                    country: addressState.country,
                    city: addressState.city,
                    postcode: Number(addressState.postcode),
                },
            },
        };
    }, [
        user.id,
        addressState.address,
        addressState.country,
        addressState.city,
        addressState.postcode,
    ]);

    return (
        <section className="px-4 pt-12 text-white">
            <BillingHeader />

            <form className="flex justify-between gap-2 border-b border-white pb-14 max-bil-s:w-full max-bil-s:flex-wrap">
                <article className="flex w-1/2 flex-col gap-6 border-r border-white pr-3 max-bil-s:border-none">
                    <div className="flex flex-wrap gap-6">
                        <div className="mr-auto">
                            <Label>
                                First Name <GiPadlock color="#93c5fd" />
                            </Label>
                            <Input
                                isEdit={true}
                                handleOnChange={handleOnChangePersonalInfo}
                                name={'firstName'}
                                value={personalState.firstName}
                            />
                        </div>
                        <div>
                            <Label>
                                Last Name <GiPadlock color="#93c5fd" />
                            </Label>
                            <Input
                                isEdit={true}
                                handleOnChange={handleOnChangePersonalInfo}
                                name={'lastName'}
                                value={personalState.lastName}
                            />
                        </div>
                    </div>

                    <div>
                        <Label>
                            Phone Number <GiPadlock color="#93c5fd" />
                        </Label>
                        <Input
                            isEdit={true}
                            handleOnChange={handleOnChangePersonalInfo}
                            name={'phoneNumber'}
                            value={personalState.phoneNumber.replace(
                                /(\+\d{3})(\d{2})(\d{3})(\d{4})/,
                                '$1 $2 $3 $4'
                            )}
                        />
                    </div>

                    <div>
                        <Label>
                            City / Town <LuAsterisk color="red" />
                        </Label>
                        <Input
                            handleOnChange={handleOnChangeShippingInfo}
                            name={'city'}
                            value={addressState.city}
                        />
                    </div>

                    <div>
                        <Label>
                            Street address <LuAsterisk color="red" />
                        </Label>
                        <Input
                            handleOnChange={handleOnChangeShippingInfo}
                            value={addressState.address}
                            name={'address'}
                            placeholder={'House number, street name, apartment'}
                        />
                    </div>

                    <div>
                        <Label>
                            Country <LuAsterisk color="red" />
                        </Label>
                        <Input
                            handleOnChange={handleOnChangeShippingInfo}
                            value={addressState.country}
                            name={'country'}
                        />
                    </div>

                    <div>
                        <Label>
                            Postcode / ZIP <LuAsterisk color="red" />
                        </Label>
                        <Input
                            handleOnChange={handleOnChangeShippingInfo}
                            value={addressState.postcode}
                            name={'postcode'}
                        />
                    </div>
                </article>

                <article className="flex w-1/2 flex-col gap-6 pl-1 max-bil-s:w-full max-bil-s:flex-wrap">
                    <div>
                        <Label>
                            Email address <GiPadlock />
                        </Label>
                        <Input
                            width={'full'}
                            isEdit={true}
                            handleOnChange={handleOnChangePersonalInfo}
                            name={'email'}
                            value={personalState.email}
                        />
                    </div>

                    <div className="max-bil-s:w-full">
                        <Label>Extra Information (optional)</Label>
                        <textarea className="h-[100px] w-full resize-none border bg-gray-800 p-1 focus:bg-slate-800 focus:opacity-95 focus:outline-none focus:ring-1 focus:ring-blue-300" />
                    </div>
                </article>
            </form>

            <OrderSection orderData={orderData} />
        </section>
    );
}
