export default function OfferCards({ img, alt, visible }) {


    return (
        <div
            className={`${!visible ?
                'transform scale-50 ease-in' : 'transform scale-100 ease-out'
                } transition-transform duration-500 ease-in-out
           relative flex flex-col w-auto max-sm:size-44 items-center`}
        >
            <img className="h-48 w-52" src={img} alt={alt} />

            {visible && <button className=" max-sm:px-2 max-sm:py-1 max-sm:text-xs text-slate-100
                px-5 py-1 rounded-full bg-[#212121] hover:scale-105">
                Order...
            </button>
            }
        </div>
    )
} 