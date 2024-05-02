import 'react-international-phone/style.css';
import { PhoneInput } from 'react-international-phone';

type PhoneCompProps = {
    phoneNumber: string;
    handlOnChange: (phone: string) => void;
};

export default function PhoneComp({
    phoneNumber,
    handlOnChange,
}: PhoneCompProps) {
    return (
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
                inputStyle={{
                    backgroundColor: '#1B263E',
                    color: 'white',
                    width: '180px',
                }}
                value={phoneNumber}
                onChange={handlOnChange}
            />
        </div>
    );
}
