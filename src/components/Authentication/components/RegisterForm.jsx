import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import Label from './Tags/Label';
import Input from './Tags/Input';
import Button from './Tags/Button';
import Heading from './Tags/Heading';
import useForm from '../../../hooks/useForm';
import { sendUserRegistration } from '../../../api/services/user';
import { registerFieldValidation } from '../../../validations/registerFormValidation';
import ErrorLabel from './Tags/ErrorLabel';

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    're-password': '',
};

export default function RegsiterForm() {
    const navigate = useNavigate();

    const onSubmit = async (values) => {
        try {
            const body = {
                firstName: values.firstName,
                lastName: values.lastName,
                email: values.email,
                phoneNumber: values.phoneNumber,
                password: values.password,
            };
            await sendUserRegistration(body);
            toast('Successfull registration!');
            navigate('/');
        } catch (error) {
            console.error(error);
            throw error;
        }
    };

    const {
        values,
        error,
        handleChangeValues,
        handleOnBlurValidation,
        handleSubmitForm,
    } = useForm(initialState, onSubmit, registerFieldValidation);

    return (
        <div className="flex w-full flex-col self-start pt-10 text-white">
            <Heading text={'Create a Profile'} />

            <form
                onSubmit={handleSubmitForm}
                className="flex w-full flex-col gap-4 font-alegreya font-medium"
            >
                <div className=" h-16 max-w-96">
                    <Label htmlFor={'firstName'} text={'First name'} />
                    <Input
                        onblur={handleOnBlurValidation}
                        handler={handleChangeValues}
                        value={values.firstName}
                        id={'firstName'}
                        name={'firstName'}
                        placeholder={'First name...'}
                        type={'text'}
                        error={!!error?.firstName}
                    />
                    <ErrorLabel error={error?.firstName} />
                </div>

                <div className="h-16 max-w-96">
                    <Label htmlFor={'lastName'} text={'Last name'} />
                    <Input
                        onblur={handleOnBlurValidation}
                        handler={handleChangeValues}
                        value={values.lastName}
                        id={'lastName'}
                        name={'lastName'}
                        placeholder={'Last name...'}
                        type={'text'}
                        error={!!error?.lastName}
                    />
                    <ErrorLabel error={error?.lastName} />
                </div>

                <div className=" h-16 max-w-96">
                    <Label htmlFor={'phoneNumber'} text={'Phone number'} />
                    <Input
                        onblur={handleOnBlurValidation}
                        handler={handleChangeValues}
                        value={values.phoneNumber}
                        id={'phoneNumber'}
                        name={'phoneNumber'}
                        placeholder={'+359 12 34 5678'}
                        type={'tel'}
                        pattern="\+[0-9]{3} [0-9]{2} [0-9]{3} [0-9]{4}"
                        title="Please provide valid phone number"
                        error={!!error?.phoneNumber}
                    />
                    <ErrorLabel error={error?.phoneNumber} />
                </div>

                <div className="h-16 max-w-96">
                    <Label htmlFor={'email'} text={'Email address'} />
                    <Input
                        onblur={handleOnBlurValidation}
                        handler={handleChangeValues}
                        value={values.email}
                        id={'email'}
                        name={'email'}
                        placeholder={'example@email.com'}
                        type={'email'}
                        title="Please provide valid email address"
                        error={!!error?.email}
                    />
                    <ErrorLabel error={error?.email} />
                </div>

                <div className="h-16 max-w-96">
                    <Label htmlFor={'password'} text={'Password'} />
                    <Input
                        onblur={handleOnBlurValidation}
                        handler={handleChangeValues}
                        value={values.password}
                        id={'password'}
                        name={'password'}
                        placeholder={'Password...'}
                        type={'password'}
                        error={!!error?.password}
                    />
                    <ErrorLabel error={error?.password} />
                </div>

                <div className="h-16 max-w-96">
                    <Label htmlFor={'re-password'} text={'Password'} />
                    <Input
                        onblur={handleOnBlurValidation}
                        handler={handleChangeValues}
                        value={values['re-password']}
                        id={'re-password'}
                        name={'re-password'}
                        placeholder={'Repeat password...'}
                        type={'password'}
                        error={!!error['re-password']}
                    />
                    <ErrorLabel error={error['re-password']} />
                </div>

                <Button text={'Sign Up'} />
            </form>
        </div>
    );
}
