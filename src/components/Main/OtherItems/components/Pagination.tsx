import { FaRegCircle, FaCircle } from 'react-icons/fa';
type PaginationProps = {
    item: {
        index: number;
        id: number;
        title: string;
        description: string;
        image: string;
        price: number;
    }[];
    handleClick: (e: any) => void;
    active: number;
};

export default function Pagination({
    item,
    handleClick,
    active,
}: PaginationProps) {
    return (
        <div className="mt-3 flex justify-center gap-2">
            {item.map(({ index, id }) => {
                if (active === index) {
                    return (
                        <FaCircle
                            onClick={handleClick}
                            className="hover:scale-110"
                            id={index.toString()}
                            key={id}
                            cursor={'pointer'}
                            color="white"
                        />
                    );
                } else {
                    return (
                        <FaRegCircle
                            onClick={handleClick}
                            className="hover:scale-110"
                            id={index.toString()}
                            key={id}
                            cursor={'pointer'}
                            color="white"
                        />
                    );
                }
            })}
        </div>
    );
}
