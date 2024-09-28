export default function AlbumPreview(props, songSelected){
    return(
        <div className="album-preview-container">
            <div className="preview-cover">
                <img src={props.imgSrc} alt={props.name} />
            </div>
            {songSelected? <h2>{props.name}</h2>: ""}
        </div>
    );
}