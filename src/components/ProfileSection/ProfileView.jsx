import { useOutletContext } from 'react-router-dom';
import AsideNav from './AsideNav/AsideNav';

export default function ProfileView() {
    const context = useOutletContext();
    const userId = context.userId;

    const RenderedSection = context.RenderedSection;

    return (
        <section className="flex min-h-[800px] w-full justify-center bg-slate-900 bg-opacity-95 font-inter">
            <div className="flex w-full justify-center gap-4 p-2 max-ml:flex-col max-ml:items-center max-ml:justify-normal">
                <AsideNav userId={userId} />

                <section className="w-full max-w-[560px] rounded-md border-2 border-black bg-[#1B263E] bg-opacity-65">
                    <RenderedSection userId={context.userId} />
                </section>
            </div>
        </section>
    );
}
