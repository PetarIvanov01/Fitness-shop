export default function ControlOfferButton({ icon, alt, handler }) {

    return <img onClick={handler} className="cursor-pointer max-sm:size-12" src={icon} alt={alt} />
};