function resolveImgPaths(props) {
    const imgPath = import.meta.resolve('/src/assets' + props.imgPath);
    return { ...props, imgPath };
}

const resolvedData = (data) => data.map(resolveImgPaths);
export default resolvedData;