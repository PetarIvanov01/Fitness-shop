type Props = {
    children: JSX.Element;
    handler: () => void;
};
export default function ControlOfferButton({ children, handler }: Props) {
    return (
        <div
            className="mx-auto flex h-max min-h-12 min-w-8 cursor-pointer items-center justify-center rounded-full border
         hover:scale-105 hover:opacity-40 max-sm:size-12"
            onClick={handler}
        >
            {children}
        </div>
    );
}
