import { LuMapPin } from 'react-icons/lu';
import AddressBody from './AddressBody';
import Header from '../components/Header';

export default function AddressSection({ userId }: { userId: string }) {
    return (
        <div className="h-full">
            <Header
                icon={<LuMapPin className="size-8" />}
                title={'Address Information'}
                text={
                    'Manage your address details to enhance your shopping experience.'
                }
            />

            <AddressBody userId={userId} />
        </div>
    );
}
