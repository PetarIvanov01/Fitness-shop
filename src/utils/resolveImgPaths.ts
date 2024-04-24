function resolveImgPaths(props) {
    const baseULR = import.meta.env.BASE_URL + 'src/assets';
    const imgPath = import.meta.resolve(baseULR + props.imgPath);
    return { ...props, imgPath };
}

const resolvedData = (data) => data.map(resolveImgPaths);
export default resolvedData;
