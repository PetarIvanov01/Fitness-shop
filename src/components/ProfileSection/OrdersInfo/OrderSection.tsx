import OrderBody from './OrderBody';
import Header from '../components/Header';

import { IoMdInformationCircleOutline } from 'react-icons/io';

export default function OrderSection() {
    return (
        <div className="flex h-full flex-col pb-5">
            <Header
                icon={<IoMdInformationCircleOutline className="size-8" />}
                title={'Orders Information'}
                text={
                    'Effortlessly manage orders, track shipments, and enhance your shopping journey.'
                }
            />

            <OrderBody />
        </div>
    );
}
