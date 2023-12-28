import Label from "./Tags/Label";
import Input from "./Tags/Input";
import Button from "./Tags/Button";
import Heading from "./Tags/Heading";
import useForm from "../../../hooks/useForm";

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    email: '',
    password: '',
    "re-password": ''
};

export default function RegsiterForm() {
    const onSubmit = (values) => {
        //Todo add submit logic
    }

    const { values, handleChangeValues, handleSubmitForm } = useForm(initialState, onSubmit);

    return (
        <div className="pt-10 self-center flex flex-col text-white">

            <Heading text={'Create a Profile'} />

            <form onSubmit={handleSubmitForm} className="flex flex-col w-full gap-2 font-alegreya font-medium">

                <div className="w-full">
                    <Label htmlFor={'firstName'} text={'First name'} />
                    <Input
                        handler={handleChangeValues}
                        value={values.firstName}
                        id={'firstName'}
                        name={'firstName'}
                        placeholder={'First name...'}
                        type={'text'} />
                </div>

                <div className="w-full">
                    <Label htmlFor={'lastName'} text={'Last name'} />
                    <Input
                        handler={handleChangeValues}
                        value={values.lastName}
                        id={'lastName'}
                        name={'lastName'}
                        placeholder={'Last name...'}
                        type={'text'} />
                </div>

                <div className="w-full">
                    <Label htmlFor={'phoneNumber'} text={'Phone number'} />
                    <Input
                        handler={handleChangeValues}
                        value={values.phoneNumber}
                        id={'phoneNumber'}
                        name={'phoneNumber'}
                        placeholder={'+359 12 34 5678'}
                        type={'tel'}
                        pattern="\+[0-9]{3} [0-9]{2} [0-9]{3} [0-9]{4}"
                        title="Please provide valid phone number"
                    />
                </div>

                <div className="w-full">
                    <Label htmlFor={'email'} text={'Email address'} />
                    <Input
                        handler={handleChangeValues}
                        value={values.email}
                        id={'email'}
                        name={'email'}
                        placeholder={'example@email.com'}
                        type={'email'}
                        title="Please provide valid email address"
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
                        type={'password'} />
                </div>

                <div className="w-full">
                    <Label htmlFor={'re-password'} text={'Password'} />
                    <Input
                        handler={handleChangeValues}
                        value={values["re-password"]}
                        id={'re-password'}
                        name={'re-password'}
                        placeholder={'Repeat password...'}
                        type={'password'} />
                </div>

                <Button text={'Sign Up'} />
            </form>
        </div>
    );
};