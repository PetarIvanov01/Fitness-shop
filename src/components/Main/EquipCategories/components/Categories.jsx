import Card from './Cards';
import mockData from '../../../../assets/utils/equipData.json';
import resolveImgPath from '../../../../utils/resolveImgPaths';

export default function Categories() {
    const resolvedImgData = resolveImgPath(mockData);

    return (
        <article className="mx-2 mb-4 mt-2 flex flex-wrap justify-center gap-14 max-md:gap-4">
            {resolvedImgData.map((props) => (
                <Card key={props.id} {...props} />
            ))}
        </article>
    );
}
