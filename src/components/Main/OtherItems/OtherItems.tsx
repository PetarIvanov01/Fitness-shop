import { useEffect, useState } from 'react';

import ItemCard from './components/ItemCard';
import Pagination from './components/Pagination';

import fitnessItems from '../../../assets/utils/fitness.json';

export default function OtherItems() {
    const [active, setActive] = useState(fitnessItems[0].index);

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const index = e.currentTarget.id;
        if (index && Number(index) !== active) {
            setActive(Number(index));
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setActive((prev) => {
                if (fitnessItems.length - 1 <= prev) {
                    return 0;
                } else {
                    return prev + 1;
                }
            });
        }, 10 * 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="px-2 pt-10">
            <section className="flex min-h-[470px] w-9/12 max-w-[640px] flex-col justify-between rounded-xl bg-stone-950/95 p-5">
                <header className="border-b-2 border-solid border-white text-center">
                    <h1 className="text-3xl font-bold text-white max-md:text-2xl">
                        Explore More
                    </h1>
                </header>

                <div className="size-full">
                    {fitnessItems.map((e) => (
                        <ItemCard
                            key={e.id}
                            {...e}
                            active={active === e.index}
                        />
                    ))}
                </div>

                <Pagination
                    active={active}
                    handleClick={handleClick}
                    item={fitnessItems}
                />
            </section>
        </div>
    );
}
