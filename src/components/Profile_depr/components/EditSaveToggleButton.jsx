import { FaRegEdit } from 'react-icons/fa';
import { MdDoneOutline } from 'react-icons/md';

export default function EditSaveToggleButton({ setIsEditing, isEditing }) {
    const onClickToggleBtn = () => {
        setIsEditing((state) => !state);
    };
    return (
        <div className="flex justify-center border-b-[1px] pb-6 pt-6 ">
            <button
                className="flex items-center justify-center gap-2 rounded-md bg-gray-50 px-3 py-1 font-bold text-black transition-colors duration-300 hover:bg-gray-400"
                onClick={onClickToggleBtn}
            >
                {isEditing ? (
                    <>
                        Edit
                        <FaRegEdit />
                    </>
                ) : (
                    <>
                        Save
                        <MdDoneOutline />
                    </>
                )}
            </button>
        </div>
    );
}
