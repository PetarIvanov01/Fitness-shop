import useStore from '../../../../zustand/store';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import delay from '../../../../utils/withDelayPromise';
import { createOrder } from '../../../../api/services/userService/orders';

import ConfirmModal from '../../../ProfileSection/components/ConfirmModal';
import ReceiveEmails from './components/ReceiveEmails';

export default function FinishOrder({ orderData }) {
    const navigate = useNavigate();
    const [consentGiven, setConsentGiven] = useState(false);
    const clearCartItem = useStore((state) => state.clearCartItem);

    const handleSubmitConsent = () => {
        setConsentGiven(false);
        try {
            delay(800).then(async () => {
                await createOrder(orderData.orderInfo._userId, orderData);
                clearCartItem();
                navigate('/', { replace: true });
            });
        } catch (error) {
            console.log(error);
            navigate('/', { replace: true });
        }
    };

    const handleModalClose = () => {
        setConsentGiven(false);
    };

    const handleOpenModal = () => {
        setConsentGiven(true);
    };

    return (
        <section className="flex flex-wrap justify-between gap-4 pt-6">
            <ReceiveEmails />

            <button
                onClick={handleOpenModal}
                className="h-max w-max border-2 border-[#EDAD09] px-1 text-xl text-[#EDAD09] hover:scale-105 hover:opacity-60"
            >
                Complete Purchase
            </button>

            {consentGiven && (
                <ConfirmModal
                    onAcceptCloseModal={handleSubmitConsent}
                    toggleModal={handleModalClose}
                    text={textForModal}
                />
            )}
        </section>
    );
}
const textForModal = (
    <>
        Your provided information will be used to process your order and for
        other purposes outlined in our{' '}
        <Link to="/privacy-policy" className="text-blue-500 hover:underline">
            privacy policy
        </Link>
        . By proceeding, you agree to our privacy policy.
    </>
);
