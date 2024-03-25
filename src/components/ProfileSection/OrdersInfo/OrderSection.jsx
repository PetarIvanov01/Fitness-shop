import { IoMdInformationCircleOutline } from 'react-icons/io';
import Header from '../components/Header';
import OrderBody from './OrderBody';

export default function OrderSection({ userId }) {
    return (
        <div className="flex h-full flex-col">
            <Header
                icon={<IoMdInformationCircleOutline className="size-8" />}
                title={'Orders Information'}
                text={
                    'Effortlessly manage orders, track shipments, and enhance your shopping journey.'
                }
            />

            <OrderBody userId={userId} />
        </div>
    );
}
