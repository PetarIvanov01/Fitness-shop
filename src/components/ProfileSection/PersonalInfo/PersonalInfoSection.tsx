import Header from '../components/Header';

import InfoBody from './InfoBody';
import { IoMdInformationCircleOutline } from 'react-icons/io';

export default function PersonalInfoSection({
    userId,
    type,
}: {
    userId: string;
    type: string;
}) {
    return (
        <div className="h-full pb-5 font-lora">
            <Header
                icon={<IoMdInformationCircleOutline className="size-8" />}
                title={'Personal Information'}
                text={
                    'Manage your personal details to enhance your shopping experience.'
                }
            />

            <InfoBody userId={userId} type={type} />
        </div>
    );
}
