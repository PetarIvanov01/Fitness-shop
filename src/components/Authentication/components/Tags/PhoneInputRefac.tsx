import 'react-international-phone/style.css';
import { PhoneInput } from 'react-international-phone';

type PhoneProps = {
    handleChangeValues: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleOnBlurValidation: (event: React.FocusEvent<HTMLInputElement>) => void;
    phoneNumberErr: string | null;
    phoneValue: string;
};

export default function PhoneInputRefac({
    handleChangeValues,
    handleOnBlurValidation,
    phoneNumberErr,
    phoneValue,
}: PhoneProps) {
    function withDomEventHandler<T>(handler: (event: T) => void) {
        return (phone: string) => {
            let event = {
                target: {
                    value: phone,
                    name: 'phoneNumber',
                },
            };
            handler(event as T);
        };
    }

    return (
        <PhoneInput
            className={`input-phone-number`}
            name="phoneNumber"
            defaultCountry="bg"
            value={phoneValue}
            onBlur={handleOnBlurValidation}
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
