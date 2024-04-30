type Props = {
    children: JSX.Element;
    id?: string;
    isEdit?: boolean;
};
export default function Label({ children, id, isEdit = false }: Props) {
    const editStyles = isEdit ? '' : '';
    return (
        <label
            id={id}
            className={`${editStyles} flex w-max gap-1 pb-1 font-alegreya font-semibold text-gray-300`}
        >
            {children}
        </label>
    );
}
