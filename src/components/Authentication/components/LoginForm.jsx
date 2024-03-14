import Label from './Tags/Label';
import Input from './Tags/Input';
import Button from './Tags/Button';
import Heading from './Tags/Heading';
import useForm from '../../../hooks/useForm';
import { sendUserLogin } from '../../../api/services/user';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const initialState = {
    email: '',
    password: '',
};
export default function LoginForm() {
    const navigate = useNavigate();

    const onSubmit = async (values) => {
        try {
            const body = {
                email: values.email,
                password: values.password,
            };
            await sendUserLogin(body);

            toast('You are logged in!');

            navigate('/');
        } catch (error) {
            if (error.errors) {
                throw error.errors;
            }
            throw error;
        }
    };

    const { values, handleChangeValues, handleSubmitForm, error } = useForm(
        initialState,
        onSubmit
    );

    return (
        <div className="flex w-1/2 flex-col items-center px-6 text-white ">
            <Heading text={'Registered User'} />
            <form
                onSubmit={handleSubmitForm}
                className="flex w-full flex-col gap-2 font-alegreya font-medium"
            >
                <div className="w-full">
                    <Label htmlFor={'email'} text={'Email address'} />
                    <Input
                        handler={handleChangeValues}
                        value={values.email}
                        id={'email'}
                        name={'email'}
                        placeholder={'Email address...'}
                        type={'email'}
                        title="Please provide valid email address"
                        error={!!error.email || error.requestErr}
                    />
                </div>

                <div className="w-full">
                    <Label htmlFor={'password'} text={'Password'} />
                    <Input
                        handler={handleChangeValues}
                        value={values.password}
                        id={'password'}
                        name={'password'}
                        placeholder={'Password...'}
                        type={'password'}
                        error={!!error.password || error.requestErr}
                    />
                </div>
                <div className="flex items-center gap-x-32">
                    <Button text={'Sign In'} errors={error} />
                    {error.requestErr && (
                        <p
                            data-test="error-req"
                            className="text-lg text-red-500"
                        >
                            {error.requestErr}
                        </p>
                    )}
                </div>
            </form>
        </div>
    );
}
