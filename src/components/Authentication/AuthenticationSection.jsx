import GetStarted from "./components/GetStarted";
import LoginForm from "./components/LoginForm";

export default function AuthenticationSection() {

    return (
        <section className="flex flex-col  bg-slate-900 opacity-95 max-sm:text-[0.8em] px-10 my-20 py-8 ">

            <header>
                <h1 className="uppercase border-b-2 text-white ">Join the Market</h1>
            </header>

            <div className="flex gap-2 pt-8">

                <GetStarted />

                <LoginForm />

            </div>

        </section>
    );
}
