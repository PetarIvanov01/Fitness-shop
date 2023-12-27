import Label from "./Tags/Label";
import Input from "./Tags/Input";
import Button from "./Tags/Button";
import Heading from "./Tags/Heading";

export default function LoginForm() {


    return (
        <div className="w-1/2 px-6 flex flex-col items-center text-white ">

            <Heading text={'Registered User'} />

            <form className="flex flex-col w-full gap-2 font-alegreya font-medium">

                <div className="w-full">
                    <Label htmlFor={'email'} text={'Email address'} />
                    <Input id={'email'} name={'email'} placeholder={'Email address...'} type={'email'} />
                </div>

                <div className="w-full">
                    <Label htmlFor={'password'} text={'Password'} />
                    <Input id={'password'} name={'password'} placeholder={'Password...'} type={'password'} />
                </div>

                <Button text={'Sign In'} />
            </form>
        </div>
    );
};