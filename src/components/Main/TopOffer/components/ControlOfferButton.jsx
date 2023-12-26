export default function ControlOfferButton({ icon, alt, handler }) {

    return (
        <div className="max-sm:size-12 rounded-full flex justify-center items-center mx-2 border min-h-12 min-w-8
         hover:scale-105 hover:opacity-40">
            <img onClick={handler} className="cursor-pointer size-full" src={icon} alt={alt} />
        </div>
    )

};