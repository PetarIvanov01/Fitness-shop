import AsideNav from './AsideNav/AsideNav';
import PersonalInfoSection from './PersonalInfo/PersonalInfoSection';

export default function ProfileView() {
    return (
        <section className="flex min-h-[800px] w-full justify-center bg-slate-900 bg-opacity-95 font-inter">
            <div className="flex w-full justify-center gap-4 p-2 max-ml:flex-col max-ml:items-center max-ml:justify-normal">
                <AsideNav />

                <section className="w-full max-w-[560px] rounded-md border-2 border-black bg-[#1B263E] bg-opacity-65">
                    <PersonalInfoSection />
                </section>
            </div>
        </section>
    );
}
