import { useCallback, useEffect, useState } from 'react';
import { initialProfileValue } from '../../../../utils/constants';
import { LuAsterisk } from 'react-icons/lu';
import BillingHeader from './components/BillingHeader';
import Label from './components/Label';
import Input from './components/Input';
import useProfileCache from '../../../../hooks/useProfileCache';

export default function BillingSection() {
    const { personalInfo, shippingInfo } = useProfileCache();
    const [profileState, setProfileInfo] = useState(initialProfileValue);

    useEffect(() => {
        setProfileInfo({
            personalInfo,
            shippingInfo,
        });
    }, [personalInfo, shippingInfo]);

    const handleOnChangePersonalInfo = useCallback((e) => {
        e.preventDefault();
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
        setProfileInfo((state) => ({
            ...state,
            shippingInfo: {
                ...state.shippingInfo,
                [e.target.name]: e.target.value,
            },
        }));
    }, []);
    return (
        <section className="border-b border-white px-4 pb-14 pt-12 text-white">
            <BillingHeader />

            <div className="flex justify-between gap-2 ">
                <article className="flex w-1/2 flex-col gap-6 border-r border-white pr-3">
                    <div className="flex flex-wrap gap-6">
                        <div className="mr-auto">
                            <Label>
                                First Name
                                <LuAsterisk color="red" />
                            </Label>
                            <Input
                                handleOnChange={handleOnChangePersonalInfo}
                                name={'firstName'}
                                value={profileState.personalInfo.firstName}
                            />
                        </div>
                        <div className="">
                            <Label>
                                Last Name <LuAsterisk color="red" />
                            </Label>
                            <Input
                                handleOnChange={handleOnChangePersonalInfo}
                                name={'lastName'}
                                value={profileState.personalInfo.lastName}
                            />
                        </div>
                    </div>

                    <div>
                        <Label>
                            Phone Number <LuAsterisk color="red" />
                        </Label>
                        <Input
                            handleOnChange={handleOnChangePersonalInfo}
                            name={'phoneNumber'}
                            value={profileState.personalInfo.phoneNumber}
                        />
                    </div>

                    <div>
                        <Label>
                            City / Town <LuAsterisk color="red" />
                        </Label>
                        <Input
                            handleOnChange={handleOnChangeShippingInfo}
                            name={'city'}
                            value={profileState.shippingInfo.city}
                        />
                    </div>

                    <div>
                        <Label>
                            Street address <LuAsterisk color="red" />
                        </Label>
                        <Input
                            handleOnChange={handleOnChangeShippingInfo}
                            value={profileState.shippingInfo.address}
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
                            value={profileState.shippingInfo.country}
                            name={'country'}
                        />
                    </div>

                    <div>
                        <Label>
                            Postcode / ZIP <LuAsterisk color="red" />
                        </Label>
                        <Input
                            handleOnChange={handleOnChangeShippingInfo}
                            value={profileState.shippingInfo.postcode}
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
                            handleOnChange={handleOnChangePersonalInfo}
                            name={'email'}
                            value={profileState.personalInfo.email}
                        />
                    </div>

                    <div>
                        <Label>Extra Information (optionla)</Label>
                        <textarea className="h-[100px] w-full resize-none border-2 bg-zinc-700 p-1 focus:bg-slate-800 focus:opacity-95 focus:outline-none focus:ring-1 focus:ring-blue-300" />
                    </div>
                </article>
            </div>
        </section>
    );
}
