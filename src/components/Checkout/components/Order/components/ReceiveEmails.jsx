import { MdCheckBoxOutlineBlank } from 'react-icons/md';
import { IoIosCheckboxOutline } from 'react-icons/io';
import { useState } from 'react';

export default function ReceiveEmails() {
    const [isChecked, setChecked] = useState(false);

    return (
        <div className="w-2/3">
            <div className="flex items-center gap-2">
                <p>Receive special offers by email?</p>
                <button
                    onClick={() => setChecked((s) => !s)}
                    className="hover:scale:105 cursor-pointer"
                >
                    {isChecked ? (
                        <IoIosCheckboxOutline size={20} />
                    ) : (
                        <MdCheckBoxOutlineBlank size={20} />
                    )}
                </button>
            </div>
            <p className="text-[0.8em] font-extralight">
                Receive exclusive offers, updates, and more by email. You can
                unsubscribe anytime.
            </p>
        </div>
    );
}
