import { useState } from "react"
import moon from "../../../assets/theme/moon.svg"
import sun from "../../../assets/theme/sun.svg"
/*
    TODO: Implement theme change 
    - Add state to manage the current theme (light/dark).
    - Create functions to toggle between light and dark themes.
    - Use state and conditional rendering to update the UI based on the current theme.
    - Integrate theme-switching logic within the button's onClick event.
    - Consider using localStorage or a state management library to persist the theme preference.
*/
export default function SecondarySection() {

    const [theme, setTheme] = useState(false);

    const handleThemeChange = () => {
        setTheme(prev => !prev);
    };

    return (
        <section className="flex justify-end items-center h-10 bg-stone-950 px-8">
            <button onClick={handleThemeChange} className="rounded-md w-5 bg-[#D2C6BF] hover:bg-stone-300">
                <img className="w-auto" src={theme ? moon : sun} alt={theme ? 'moon' : 'sun'} />
            </button>
        </section>
    )
};