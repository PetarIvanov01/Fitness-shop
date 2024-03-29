import { FaRegCircle, FaCircle } from 'react-icons/fa';

export default function Pagination({ item, handleClick, active }) {
    return (
        <div className="mt-3 flex justify-center gap-2">
            {item.map(({ index, key }) => {
                if (active === index) {
                    return (
                        <FaCircle
                            onClick={handleClick}
                            className="hover:scale-110"
                            id={index}
                            key={key}
                            cursor={'pointer'}
                            color="white"
                        />
                    );
                } else {
                    return (
                        <FaRegCircle
                            onClick={handleClick}
                            className="hover:scale-110"
                            id={index}
                            key={key}
                            cursor={'pointer'}
                            color="white"
                        />
                    );
                }
            })}
        </div>
    );
}
