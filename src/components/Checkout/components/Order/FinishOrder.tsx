import { useState } from 'react';
import useStore from '../../../../zustand/store';
import { Link, useNavigate } from 'react-router-dom';

import { createOrder } from '../../../../api/services/userService/orders';

import ConfirmModal from '../../../ProfileSection/components/ConfirmModal';
import ReceiveEmails from './components/ReceiveEmails';
import ErrorModal from '../../../ProfileSection/components/ErrorModal';
import { mutate } from 'swr';

type Props = {
    finishedOrderData: {
        orderInfo: {
            totalPrice: number;
            _userId: string;
            orderAddress: {
                address?: string;
                country?: string;
                city?: string;
                postcode?: number;
            };
        };
        orderProducts: {
            _productId: string;
            quantity: number;
            subtotal: number;
        }[];
    };
};

export default function FinishOrder({ finishedOrderData }: Props) {
    const navigate = useNavigate();
    const [consentGiven, setConsentGiven] = useState(false);
    const clearCartItem = useStore((state) => state.clearCartItem);
    const [error, setError] = useState(null);

    const handleSubmitConsent = async () => {
        setConsentGiven(false);
        try {
            await createOrder(
                finishedOrderData.orderInfo._userId,
                finishedOrderData,
                new AbortController().signal
            ).catch((err) => {
                throw err;
            });
            mutate(`orders/${finishedOrderData.orderInfo._userId}`);
            clearCartItem();
            navigate('/', { replace: true });
        } catch (error: any) {
            setError(error);
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

            {error && (
                <ErrorModal toggleModal={() => setError(null)} errors={error} />
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
