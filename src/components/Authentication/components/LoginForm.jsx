import Label from "./Tags/Label";
import Input from "./Tags/Input";
import Button from "./Tags/Button";
import Heading from "./Tags/Heading";
import useForm from "../../../hooks/useForm";

const initialState = {
    email: '',
    password: ''
}
export default function LoginForm() {

    const onSubmit = (values) => {
        //Todo add submit logic for login
    }

    const { values, handleChangeValues, handleSubmitForm } = useForm(initialState, onSubmit);

    return (
        <div className="w-1/2 px-6 flex flex-col items-center text-white ">

            <Heading text={'Registered User'} />

            <form onSubmit={handleSubmitForm} className="flex flex-col w-full gap-2 font-alegreya font-medium">

                <div className="w-full">
                    <Label htmlFor={'email'} text={'Email address'} />
                    <Input handler={handleChangeValues}
                        value={values.email}
                        id={'email'}
                        name={'email'}
                        placeholder={'Email address...'}
                        type={'email'}
                        title="Please provide valid email address" />
                </div>

                <div className="w-full">
                    <Label htmlFor={'password'} text={'Password'} />
                    <Input handler={handleChangeValues}
                        value={values.password}
                        id={'password'}
                        name={'password'}
                        placeholder={'Password...'}
                        type={'password'} />
                </div>

                <Button text={'Sign In'} />
            </form>
        </div>
    );
};