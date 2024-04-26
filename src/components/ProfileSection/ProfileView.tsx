import AsideNav from './AsideNav/AsideNav';

import { useSectionType } from '../Routes/Guards/SectionAccessControl';

export default function ProfileView() {
    const context = useSectionType();
    const userId = context.userId;
    const type = context.type;

    const RenderedSection = context.RenderedSection;

    return (
        <section className="flex min-h-[800px] w-full justify-center bg-slate-900 bg-opacity-95 font-inter">
            <div className="flex w-4/5 justify-center gap-4 p-2 max-ml:flex-col max-ml:items-center max-ml:justify-normal">
                <AsideNav userId={userId} type={type} />

                <section className="w-full rounded-md border-2 border-black bg-[#1B263E] bg-opacity-65">
                    <RenderedSection userId={context.userId} />
                </section>
            </div>
        </section>
    );
}
