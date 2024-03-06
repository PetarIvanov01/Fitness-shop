import { LuAsterisk } from 'react-icons/lu';
import Input from '../../../Profile/components/Input';
import Paragraph from '../../../Profile/components/Paragraph';
import BillingHeader from './components/BillingHeader';
import useStore from '../../../../zustand/store';

export default function BillingSection() {
    const personalInfo = useStore((state) => state.personalInfo);
    const shippingInfo = useStore((state) => state.shippingInfo);

    const handleOnChangePersonalInfo = useStore(
        (state) => state.handleOnChangePersonalInfo
    );
    const handleOnChangeShippingInfo = useStore(
        (state) => state.handleOnChangeShippingInfo
    );
    return (
        <section className="border-b border-white px-4 pb-14 pt-12 text-white">
            <BillingHeader />

            <div className="flex justify-between gap-2 ">
                <article className="flex w-1/2 flex-col gap-6 border-r border-white pr-3">
                    <div className="flex flex-wrap gap-6">
                        <div className="mr-auto">
                            <Paragraph>
                                First Name
                                <LuAsterisk color="red" />
                            </Paragraph>
                            <Input
                                handleOnChange={handleOnChangePersonalInfo}
                                name={'firstName'}
                                value={personalInfo.firstName}
                            />
                        </div>
                        <div className="">
                            <Paragraph>
                                Last Name <LuAsterisk color="red" />
                            </Paragraph>
                            <Input
                                handleOnChange={handleOnChangePersonalInfo}
                                name={'lastName'}
                                value={personalInfo.lastName}
                            />
                        </div>
                    </div>

                    <div>
                        <Paragraph>
                            Phone Number <LuAsterisk color="red" />
                        </Paragraph>
                        <Input
                            handleOnChange={handleOnChangePersonalInfo}
                            name={'phoneNumber'}
                            value={personalInfo.phoneNumber}
                        />
                    </div>

                    <div>
                        <Paragraph>
                            City / Town <LuAsterisk color="red" />
                        </Paragraph>
                        <Input
                            handleOnChange={handleOnChangeShippingInfo}
                            name={'city'}
                            value={shippingInfo.city}
                        />
                    </div>

                    <div>
                        <Paragraph>
                            Street address <LuAsterisk color="red" />
                        </Paragraph>
                        <Input
                            handleOnChange={handleOnChangeShippingInfo}
                            value={shippingInfo.address}
                            name={'address'}
                            placeholder={'House number, street name, apartment'}
                            width={'full'}
                        />
                    </div>

                    <div>
                        <Paragraph>
                            Country <LuAsterisk color="red" />
                        </Paragraph>
                        <Input
                            handleOnChange={handleOnChangeShippingInfo}
                            value={shippingInfo.country}
                            name={'country'}
                        />
                    </div>

                    <div>
                        <Paragraph>
                            Postcode / ZIP <LuAsterisk color="red" />
                        </Paragraph>
                        <Input
                            handleOnChange={handleOnChangeShippingInfo}
                            value={shippingInfo.postcode}
                            name={'postcode'}
                        />
                    </div>
                </article>

                <article className="flex w-1/2 flex-col gap-6 pl-1">
                    <div>
                        <Paragraph>
                            Email address <LuAsterisk color="red" />
                        </Paragraph>
                        <Input
                            handleOnChange={handleOnChangePersonalInfo}
                            name={'email'}
                            value={personalInfo.email}
                        />
                    </div>

                    <div>
                        <Paragraph>Extra Information (optionla)</Paragraph>
                        <textarea className="h-[100px] w-full resize-none border-2 bg-zinc-700 p-1 focus:bg-slate-800 focus:opacity-95 focus:outline-none focus:ring-1 focus:ring-blue-300" />
                    </div>
                </article>
            </div>
        </section>
    );
}
