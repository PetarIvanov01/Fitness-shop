import { useState } from 'react';
import ConfirmModal from './ConfirmModal';

export default function Controllers({ handleOnSubmit, hasChange, text }) {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = (e) => {
        e.preventDefault();
        if (hasChange) {
            setShowModal(!showModal);
        }
    };

    const onAcceptCloseModal = (e) => {
        e.preventDefault();
        handleOnSubmit();
        setShowModal(false);
    };

    const btnStyles = `${hasChange ? 'bg-blue-600 text-white' : 'bg-gray-500 text-red-50'}`;

    return (
        <div className="flex gap-6 self-end pt-10">
            <button
                type="submit"
                onClick={toggleModal}
                className={`${btnStyles} rounded-lg px-5 py-1 text-center font-medium
                      transition-all hover:opacity-50 hover:shadow-lg`}
            >
                Save Changes
            </button>

            {showModal && (
                <ConfirmModal
                    text={text}
                    toggleModal={toggleModal}
                    onAcceptCloseModal={onAcceptCloseModal}
                />
            )}
        </div>
    );
}
