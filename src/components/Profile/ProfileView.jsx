import OrderView from './Orders/OrderView';
import Header from './components/Header';
import ProfileForm from './ProfileForm';
import useStore from '../../zustand/store';

export default function ProfileView() {
    const user = useStore((state) => state.user);

    return (
        <section className="my-20 flex flex-col bg-gradient-to-l from-slate-800/95 to-slate-900/95 px-10 py-8 max-sm:text-[0.8em]">
            <Header fullName={user.fullName} />

            <ProfileForm />

            <OrderView />
        </section>
    );
}
