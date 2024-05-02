type LabelProps = {
    htmlFor: string;
    text: string;
};
export default function Label({ htmlFor, text }: LabelProps) {
    return (
        <label className="text-[0.95em] font-thin" htmlFor={htmlFor}>
            {text}
        </label>
    );
}
