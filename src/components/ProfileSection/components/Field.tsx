import { GiPadlock } from 'react-icons/gi';
import { CiUnlock } from 'react-icons/ci';

type FieldProps = {
    value: string | number;
    handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label: string;
    name: string;
    id: string;
    type: string;
    isEdit?: boolean;
};
export default function Field({
    value,
    handleOnChange,
    label,
    name,
    id,
    type,
    isEdit = false,
}: FieldProps) {
    const editStyles = isEdit ? 'text-blue-300' : 'text-[#b9d2f3]';
    return (
        <>
            <label htmlFor={name} className={`flex gap-1 ${editStyles}`}>
                {label}{' '}
                {isEdit ? (
                    <GiPadlock color="#93c5fd" />
                ) : (
                    <CiUnlock color="#b9d2f3" />
                )}
            </label>
            <input
                disabled={isEdit}
                value={value}
                onChange={handleOnChange}
                className="h-8 w-full rounded-sm border border-white bg-[#1B263E] py-4 pl-2"
                type={type}
                name={name}
                id={id}
            />
        </>
    );
}
