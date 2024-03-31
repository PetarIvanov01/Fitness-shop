import { useCallback, useEffect, useState } from 'react';

import useStore from '../../../../zustand/store';
import useFetch from '../../../../hooks/useFetch';

import { initialProfileValue } from '../../../../utils/constants';

import BillingHeader from './components/BillingHeader';
import { LuAsterisk } from 'react-icons/lu';
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
            ...state.personalInfo,
            [e.target.name]: e.target.value,
        }));
    }, []);

    const handleOnChangeShippingInfo = useCallback((e) => {
        e.preventDefault();
        setProfileAddress((state) => ({
            ...state.shippingInfo,
            [e.target.name]: e.target.value,
        }));
    }, []);
    return (
        <section className="border-b border-white px-4 pb-14 pt-12 text-white">
            <BillingHeader />

            <form className="flex justify-between gap-2 ">
                <article className="flex w-1/2 flex-col gap-6 border-r border-white pr-3">
                    <div className="flex flex-wrap gap-6">
                        <div className="mr-auto">
                            <Label>
                                First Name
                                <LuAsterisk color="red" />
                            </Label>
                            <Input
                                isEdit={true}
                                handleOnChange={handleOnChangePersonalInfo}
                                name={'firstName'}
                                value={personalState.firstName}
                            />
                        </div>
                        <div className="">
                            <Label>
                                Last Name <LuAsterisk color="red" />
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
                            Phone Number <LuAsterisk color="red" />
                        </Label>
                        <Input
                            isEdit={true}
                            handleOnChange={handleOnChangePersonalInfo}
                            name={'phoneNumber'}
                            value={personalState.phoneNumber}
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
                            width={'full'}
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

                <article className="flex w-1/2 flex-col gap-6 pl-1">
                    <div>
                        <Label>
                            Email address <LuAsterisk color="red" />
                        </Label>
                        <Input
                            isEdit={true}
                            handleOnChange={handleOnChangePersonalInfo}
                            name={'email'}
                            value={personalState.email}
                        />
                    </div>

                    <div>
                        <Label>Extra Information (optionla)</Label>
                        <textarea className="h-[100px] w-full resize-none border-2 bg-zinc-700 p-1 focus:bg-slate-800 focus:opacity-95 focus:outline-none focus:ring-1 focus:ring-blue-300" />
                    </div>
                </article>
            </form>
        </section>
    );
}
