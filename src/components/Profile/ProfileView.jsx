import { getUserInformation } from '../../api/services/user';

import { useState } from 'react';
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import PersonalInfo from './components/PersonalInfo';
import ShippingInfo from './components/ShippingInfo';
import EditSaveToggleButton from './components/EditSaveToggleButton';
import OrderView from './Orders/OrderView';
import Header from './components/Header';

export default function ProfileView() {
    const { userId } = useParams();
    const { data } = useFetch(getUserInformation, userId);

    const [isEditing, setIsEditing] = useState(true);

    return (
        <section className="my-20 flex flex-col bg-gradient-to-l from-slate-800/95 to-slate-900/95 px-10 py-8 max-sm:text-[0.8em]">
            <Header fullName={data.fullName} />

            <div className="relative">
                <PersonalInfo isEditing={isEditing} {...data} />
                <div className="absolute right-[50%] my-2 h-[1px] w-2/3 translate-x-1/2 bg-white"></div>
                <ShippingInfo isEditing={isEditing} />

                <EditSaveToggleButton
                    isEditing={isEditing}
                    setIsEditing={setIsEditing}
                />
            </div>

            <OrderView />
        </section>
    );
}
