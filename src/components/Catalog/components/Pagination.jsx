import { GrLinkNext, GrLinkPrevious } from 'react-icons/gr';

export default function Pagination() {
    return (
        <div className="mt-auto flex justify-end pb-1">
            <div className="flex gap-2">
                <button className="size-6">
                    <GrLinkPrevious className="size-full text-white" />
                </button>

                <button className="text-white ">[ 1 ][ 2 ][ 3 ]</button>

                <button className="size-6">
                    <GrLinkNext className="size-full text-white" />
                </button>
            </div>
        </div>
    );
}
