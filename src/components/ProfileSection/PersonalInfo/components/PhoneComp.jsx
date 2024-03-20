import 'react-international-phone/style.css';
import { PhoneInput } from 'react-international-phone';

export default function PhoneComp({ phoneNumber, handlOnChange }) {
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
                value={phoneNumber}
                inputStyle={{
                    backgroundColor: '#1B263E',
                    color: 'white',
                    width: '180px',
                }}
                onChange={handlOnChange}
            />
        </div>
    );
}
