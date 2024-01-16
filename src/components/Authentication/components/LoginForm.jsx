import Label from "./Tags/Label";
import Input from "./Tags/Input";
import Button from "./Tags/Button";
import Heading from "./Tags/Heading";
import useForm from "../../../hooks/useForm";
import { sendUserLogin } from "../../../api/services/user";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const initialState = {
    email: '',
    password: ''
}
export default function LoginForm() {

    const navigate = useNavigate();

    const onSubmit = async (values) => {
        try {

            const body = {
                email: values.email,
                password: values.password,
            };
            await sendUserLogin(body);

            toast("You are logged in!");
            
            navigate('/');

        } catch (error) {
            console.error(error);
            throw error;
        };
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