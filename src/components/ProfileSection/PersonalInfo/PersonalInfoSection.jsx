import { IoMdInformationCircleOutline } from 'react-icons/io';
import InfoBody from './InfoBody';
import Header from '../components/Header';

export default function PersonalInfoSection({ userId }) {
    return (
        <div className="h-full">
            <Header
                icon={<IoMdInformationCircleOutline className="size-8" />}
                title={'Personal Information'}
                text={
                    'Manage your personal details to enhance your shopping experience.'
                }
            />

            <InfoBody userId={userId} />
        </div>
    );
}
