export default function AlbumPreview(props){
    return(
        <div className="album-preview-container">
            <div className="preview-cover">
                <img src={props.imgSrc} alt={props.name} />
            </div>
        </div>
    );
}