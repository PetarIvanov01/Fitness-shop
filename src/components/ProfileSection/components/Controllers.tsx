import { useState } from 'react';
import ConfirmModal from './ConfirmModal';

type ControllersProps = {
    handleOnSubmit: () => void;
    hasChange: boolean | undefined;
    text: JSX.Element | string;
};
export default function Controllers({
    handleOnSubmit,
    hasChange,
    text,
}: ControllersProps) {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (hasChange) {
            setShowModal(!showModal);
        }
    };

    const onAcceptCloseModal = (e: React.MouseEvent<HTMLButtonElement>) => {
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
