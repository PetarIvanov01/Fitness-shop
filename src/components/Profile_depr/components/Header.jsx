import useStore from '../../../zustand/store';

export default function Header() {
    const user = useStore((state) => state.personalInfo);
    const fullName = user.firstName.concat(' ', user.lastName);

    return (
        <div className="border-b-2 pb-4 text-white">
            <h1 className="text-3xl font-semibold tracking-wide">Profile</h1>
            <p className="text-sm text-gray-200">Welcome back, {fullName}!</p>
        </div>
    );
}
