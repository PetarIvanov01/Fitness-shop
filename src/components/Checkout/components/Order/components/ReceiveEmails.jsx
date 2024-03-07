import { MdCheckBoxOutlineBlank } from 'react-icons/md';
import { IoIosCheckboxOutline } from 'react-icons/io';
import { useState } from 'react';

export default function ReceiveEmails() {
    const [isChecked, setChecked] = useState(false);

    return (
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
    );
}
