export const Preview = ({files}) => {
    if (!files.length) {
        return null
    }
    return files.map((file) => <img style={{maxWidth: '200px'}} src={`//localhost:5000/forexarena/${file.filename}`} alt={file.originalname}/>);
};