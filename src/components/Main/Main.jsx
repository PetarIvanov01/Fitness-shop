import EquipCategories from './EquipCategories/EquipCat';
import OtherItems from './OtherItems/OtherItems';
import TopOffers from './TopOffer/TopOffer';

export default function Main() {
    return (
        <section className="font-alegreya">
            <TopOffers />

            <EquipCategories />

            <OtherItems />
        </section>
    );
}
