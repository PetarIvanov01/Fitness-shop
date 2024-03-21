export default function AddressBox({
    country,
    city,
    postcode,
    address,
    isDefault = false,
    onSetDefault = () => {},
}) {
    return (
        <div className="mx-4  rounded-md border border-r-4 border-t-2 border-black bg-gradient-to-b from-[#4b6fad] via-[#213b74] to-[#0e2350] p-4 shadow-md">
            <div className="mb-2 flex items-center justify-between">
                <h2 className="text-xl font-semibold text-white">{country}</h2>
                <label className="flex cursor-pointer items-center">
                    <input
                        type="checkbox"
                        checked={isDefault}
                        onChange={onSetDefault}
                        className="form-checkbox h-5 w-5 text-orange-500"
                    />
                    <span className="ml-2 text-sm text-white">Default</span>
                </label>
            </div>
            <p className="text-white">
                {city}, {address}, {postcode}
            </p>
        </div>
    );
}
