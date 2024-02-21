import { useEffect, useState } from 'react';

import ItemCard from './components/ItemCard';
import Pagination from './components/Pagination';

const fitnessItems = [
    {
        index: 0,
        id: 1,
        title: 'Ultra Wide Running Path',
        description:
            'Enjoy the spacious and ultra-wide running path for an immersive running experience. The path is designed to provide ample space for a comfortable and refreshing run.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvWFhbw1gI-rahdoBsBitRBC1VCoydZ-Ai-j6FdXQjwyqsp6ZYAZpdEqLej9a-ehLWots&usqp=CAU',

        price: 239.21,
    },
    {
        index: 1,
        id: 2,
        title: 'High-Intensity Interval Training (HIIT) Equipment',
        description:
            'Take your workouts to the next level with our HIIT equipment. Designed for high-intensity interval training, it will help you achieve your fitness goals faster and more efficiently.',
        image: 'data:image/jpeg;base64,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',
        price: 883.21,
    },
    {
        index: 2,
        id: 3,
        title: 'Yoga Mat with Alignment Lines',
        description:
            'Improve your yoga practice with our premium yoga mat featuring alignment lines. The lines help you maintain proper posture and alignment during various yoga poses.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnGp-yAri_bSMXu09eaNKMeGKVOLUSksMskw&usqp=CAU',
        price: 652.21,
    },
];

export default function OtherItems() {
    const [active, setActive] = useState(fitnessItems[0].index);

    const handleClick = (e) => {
        const index = e.target.closest('svg').id;
        if (index && index !== active) {
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
        <section
            className="mx-2 mt-[6em] 
        min-h-[300px] w-9/12
        max-w-[640px] rounded-xl bg-stone-950 bg-opacity-95 p-5"
        >
            <header className="border-b-2 border-solid border-white text-center">
                <h1 className="text-[2em] font-bold text-white max-md:text-[1.5em]">
                    Explore More
                </h1>
            </header>

            {fitnessItems.map((e) => (
                <ItemCard key={e.id} {...e} active={active === e.index} />
            ))}

            <Pagination
                active={active}
                handleClick={handleClick}
                item={fitnessItems.map((e) => ({ index: e.index, key: e.id }))}
            />
        </section>
    );
}
