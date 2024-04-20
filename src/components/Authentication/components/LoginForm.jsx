import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { useState } from 'react';
import { sendUserLogin } from '../../../api/services/auth';

import delay from '../../../utils/withDelayPromise';

import Label from './Tags/Label';
import Input from './Tags/Input';
import Button from './Tags/Button';
import Heading from './Tags/Heading';
import useForm from '../../../hooks/useForm';

const initialState = {
    email: '',
    password: '',
};

export default function LoginForm() {
    const navigate = useNavigate();
    const [isSubmit, setIsSubmit] = useState(false);

    const onSubmit = async (values) => {
        setIsSubmit(true);

        const body = {
            email: values.email,
            password: values.password,
        };

        await delay(800)
            .then(async () => {
                await sendUserLogin(body);
                toast('You are logged in!');
                navigate('/');
            })
            .catch((e) => {
                if (e.errors) {
                    throw e.errors;
                }
                throw e;
            })
            .finally(() => {
                setIsSubmit(false);
            });
    };

    const { values, handleChangeValues, handleSubmitForm, error } = useForm(
        initialState,
        onSubmit
    );

    const requestErr = error.requestErr;
    return (
        <div className="flex w-1/2 flex-col items-center px-6 text-white max-sm:w-full max-sm:p-0">
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
                        error={!!error.email || requestErr}
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
                        error={!!error.password || requestErr}
                    />
                </div>
                <div className="flex w-full items-center gap-5">
                    <Button
                        text={'Sign In'}
                        errors={error}
                        loadSpin={isSubmit}
                    />
                    {requestErr && (
                        <p
                            data-test="error-req"
                            className="w-full text-lg text-red-500 max-sm:text-base"
                        >
                            {requestErr}
                        </p>
                    )}
                </div>
            </form>
        </div>
    );
}
