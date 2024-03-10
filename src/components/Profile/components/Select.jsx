import countriesOptions from '../../../assets/utils/country.json';
export default function Select({ handleOnChange, value, isEditing }) {
    return (
        <select
            className="block h-fit w-[200px] 
border border-gray-300 bg-zinc-700 px-1 py-2 font-inter text-white"
            id="country"
            onChange={handleOnChange}
            value={value}
            disabled={isEditing}
            name="country"
        >
            {value ? null : <option value={''}>Choose a country</option>}
            {countriesOptions.map(({ name, value }) => (
                <option key={value} value={value}>
                    {name}
                </option>
            ))}
        </select>
    );
}
