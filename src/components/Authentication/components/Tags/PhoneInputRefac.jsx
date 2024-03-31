import 'react-international-phone/style.css';
import { PhoneInput } from 'react-international-phone';

export default function PhoneInputRefac({
    handleChangeValues,
    handleOnBlurValidation,
    phoneNumberErr,
    phoneValue,
}) {
    const withDomEventHandler = (handler) => {
        return (phone) => {
            let event = {
                target: {
                    value: phone,
                    name: 'phoneNumber',
                },
            };
            handler(event);
        };
    };

    return (
        <PhoneInput
            className={`input-phone-number`}
            name="phoneNumber"
            defaultCountry="bg"
            value={phoneValue}
            onBlur={withDomEventHandler(handleOnBlurValidation)}
            onChange={withDomEventHandler(handleChangeValues)}
            countrySelectorStyleProps={{
                dropdownStyleProps: {
                    className: 'country-container',
                },
            }}
            inputClassName={`input-phone-normal ${phoneNumberErr && 'input-phone-invalid'}`}
        />
    );
}
