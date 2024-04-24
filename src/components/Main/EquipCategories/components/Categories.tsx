import Card from './Cards';
import equipData from '../../../../assets/utils/equipData.json';

export default function Categories() {
    return (
        <article className="mx-2 mb-4 mt-2 flex flex-wrap justify-center gap-14 max-md:gap-4">
            {equipData.map((props) => (
                <Card key={props.id} {...props} />
            ))}
        </article>
    );
}
