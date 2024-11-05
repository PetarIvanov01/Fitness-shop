import { useCallback, useMemo, useState } from 'react';

import { User } from '../../../../zustand/interfaces/UserSlice';

import { initialProfileValue } from '../../../../utils/constants';

import { LuAsterisk } from 'react-icons/lu';
import { GiPadlock } from 'react-icons/gi';

import BillingHeader from './components/BillingHeader';
import OrderSection from '../Order/OrderSection';
import Label from './components/Label';
import Input from './components/Input';

export default function BillingSection({
    user,
    data,
}: {
    user: NonNullable<User>;
    data: [
        typeof initialProfileValue.personalInfo,
        typeof initialProfileValue.shippingInfo,
    ];
}) {
    const [personalState, setProfileInfo] = useState(data[0]);
    const [addressState, setProfileAddress] = useState(data[1]);

    const handleOnChangePersonalInfo = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            e.preventDefault();
            setProfileInfo((state) => ({
                ...state,
                [e.target.name]: e.target.value,
            }));
        },
        []
    );

    const handleOnChangeShippingInfo = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            e.preventDefault();
            setProfileAddress((state) => ({
                ...state,
                [e.target.name]: e.target.value,
            }));
        },
        []
    );

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
                                <div className="flex items-center gap-2">
                                    <span>First Name</span>
                                    <GiPadlock color="#93c5fd" />
                                </div>
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
                                <div className="flex items-center gap-2">
                                    <span>Last Name</span>
                                    <GiPadlock color="#93c5fd" />
                                </div>
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
                            <div className="flex items-center gap-2">
                                <span>Phone Number</span>
                                <GiPadlock color="#93c5fd" />
                            </div>
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
                            <div className="flex items-center gap-2">
                                <span>City / Town</span>
                                <LuAsterisk color="red" />
                            </div>
                        </Label>
                        <Input
                            handleOnChange={handleOnChangeShippingInfo}
                            name={'city'}
                            value={addressState.city}
                        />
                    </div>

                    <div>
                        <Label>
                            <div className="flex items-center gap-2">
                                <span>Street address</span>
                                <LuAsterisk color="red" />
                            </div>
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
                            <div className="flex items-center gap-2">
                                <span>Country</span>
                                <LuAsterisk color="red" />
                            </div>
                        </Label>
                        <Input
                            handleOnChange={handleOnChangeShippingInfo}
                            value={addressState.country}
                            name={'country'}
                        />
                    </div>

                    <div>
                        <Label>
                            <div className="flex items-center gap-2">
                                <span>Postcode / ZIP</span>
                                <LuAsterisk color="red" />
                            </div>
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
                            <div className="flex items-center gap-2">
                                <span>Email address</span> <GiPadlock />
                            </div>
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
                        <Label>
                            <span>Extra Information (optional)</span>
                        </Label>
                        <textarea className="h-[100px] w-full resize-none border bg-gray-800 p-1 focus:bg-slate-800 focus:opacity-95 focus:outline-none focus:ring-1 focus:ring-blue-300" />
                    </div>
                </article>
            </form>
            <OrderSection orderData={orderData} />
        </section>
    );
}

// function BillingForm() {
//     return (
//         <form className="flex justify-between gap-2 border-b border-white pb-14 max-bil-s:w-full max-bil-s:flex-wrap">
//             <article className="flex w-1/2 flex-col gap-6 border-r border-white pr-3 max-bil-s:border-none">
//                 <div className="flex flex-wrap gap-6">
//                     <div className="mr-auto">
//                         <Label>
//                             <div className="flex items-center gap-2">
//                                 <span>First Name</span>
//                                 <GiPadlock color="#93c5fd" />
//                             </div>
//                         </Label>
//                         <Input
//                             isEdit={true}
//                             handleOnChange={handleOnChangePersonalInfo}
//                             name={'firstName'}
//                             value={personalState.firstName}
//                         />
//                     </div>
//                     <div>
//                         <Label>
//                             <div className="flex items-center gap-2">
//                                 <span>Last Name</span>
//                                 <GiPadlock color="#93c5fd" />
//                             </div>
//                         </Label>
//                         <Input
//                             isEdit={true}
//                             handleOnChange={handleOnChangePersonalInfo}
//                             name={'lastName'}
//                             value={personalState.lastName}
//                         />
//                     </div>
//                 </div>

//                 <div>
//                     <Label>
//                         <div className="flex items-center gap-2">
//                             <span>Phone Number</span>
//                             <GiPadlock color="#93c5fd" />
//                         </div>
//                     </Label>
//                     <Input
//                         isEdit={true}
//                         handleOnChange={handleOnChangePersonalInfo}
//                         name={'phoneNumber'}
//                         value={personalState.phoneNumber.replace(
//                             /(\+\d{3})(\d{2})(\d{3})(\d{4})/,
//                             '$1 $2 $3 $4'
//                         )}
//                     />
//                 </div>

//                 <div>
//                     <Label>
//                         <div className="flex items-center gap-2">
//                             <span>City / Town</span>
//                             <LuAsterisk color="red" />
//                         </div>
//                     </Label>
//                     <Input
//                         handleOnChange={handleOnChangeShippingInfo}
//                         name={'city'}
//                         value={addressState.city}
//                     />
//                 </div>

//                 <div>
//                     <Label>
//                         <div className="flex items-center gap-2">
//                             <span>Street address</span>
//                             <LuAsterisk color="red" />
//                         </div>
//                     </Label>
//                     <Input
//                         handleOnChange={handleOnChangeShippingInfo}
//                         value={addressState.address}
//                         name={'address'}
//                         placeholder={'House number, street name, apartment'}
//                     />
//                 </div>

//                 <div>
//                     <Label>
//                         <div className="flex items-center gap-2">
//                             <span>Country</span>
//                             <LuAsterisk color="red" />
//                         </div>
//                     </Label>
//                     <Input
//                         handleOnChange={handleOnChangeShippingInfo}
//                         value={addressState.country}
//                         name={'country'}
//                     />
//                 </div>

//                 <div>
//                     <Label>
//                         <div className="flex items-center gap-2">
//                             <span>Postcode / ZIP</span>
//                             <LuAsterisk color="red" />
//                         </div>
//                     </Label>
//                     <Input
//                         handleOnChange={handleOnChangeShippingInfo}
//                         value={addressState.postcode}
//                         name={'postcode'}
//                     />
//                 </div>
//             </article>

//             <article className="flex w-1/2 flex-col gap-6 pl-1 max-bil-s:w-full max-bil-s:flex-wrap">
//                 <div>
//                     <Label>
//                         <div className="flex items-center gap-2">
//                             <span>Email address</span> <GiPadlock />
//                         </div>
//                     </Label>
//                     <Input
//                         width={'full'}
//                         isEdit={true}
//                         handleOnChange={handleOnChangePersonalInfo}
//                         name={'email'}
//                         value={personalState.email}
//                     />
//                 </div>

//                 <div className="max-bil-s:w-full">
//                     <Label>
//                         <span>Extra Information (optional)</span>
//                     </Label>
//                     <textarea className="h-[100px] w-full resize-none border bg-gray-800 p-1 focus:bg-slate-800 focus:opacity-95 focus:outline-none focus:ring-1 focus:ring-blue-300" />
//                 </div>
//             </article>
//         </form>
//     );
// }
