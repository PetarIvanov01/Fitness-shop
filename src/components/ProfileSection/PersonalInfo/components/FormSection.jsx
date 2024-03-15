import 'react-international-phone/style.css';
import { useState } from 'react';
import { PhoneInput } from 'react-international-phone';
import Controllers from './Controllers';

export default function FormSection() {
    const [phone, setPhone] = useState('');

    return (
        <section className="flex flex-col px-6 text-white">
            <form className="flex flex-col gap-2 ">
                <div className="flex flex-wrap justify-between gap-2 max-[730px]:justify-center">
                    <div className="flex flex-col">
                        <label htmlFor="firstName" className="text-white">
                            First Name
                        </label>
                        <input
                            className="h-8 rounded-sm border border-white bg-[#1B263E]"
                            type="text"
                            name="firstName"
                            id="firstName"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="lastName" className="text-white">
                            Last Name
                        </label>
                        <input
                            className="h-8 rounded-sm border border-white bg-[#1B263E]"
                            type="text"
                            name="lastName"
                            id="lastName"
                        />
                    </div>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="email" className="text-white">
                        Email
                    </label>
                    <input
                        className="h-8 rounded-sm border border-white bg-[#1B263E]"
                        type="text"
                        name="email"
                        id="email"
                    />
                </div>
                <div className="flex flex-col max-[730px]:items-center">
                    <div>
                        <label htmlFor="phoneNumbee">Phone number</label>
                        <PhoneInput
                            name="phoneNumbee"
                            style={{
                                color: '#1B263E',
                                backgroundColor: '#1B263E',
                                width: 'max-content',
                            }}
                            defaultCountry="bg"
                            value={phone}
                            inputStyle={{
                                backgroundColor: '#1B263E',
                                color: 'white',
                                width: '180px',
                            }}
                            onChange={(phone) => setPhone(phone)}
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
