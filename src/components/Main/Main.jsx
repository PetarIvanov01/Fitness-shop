import EquipCategories from "./EquipCategories/EquipCat";
import OtherItems from "./OtherItems/OtherItems";
import TopOffers from "./TopOffer/TopOffer";

export default function Main() {

    return (
        <main className="h-full">

            <TopOffers />

            <EquipCategories />

            <OtherItems />
            
        </main>
    );
};