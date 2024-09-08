export default function Album({ name, year, imgSrc, previewClicked }){
    return (
        <div className="album-container" onClick={previewClicked}>
            <div className="album-cover">
                <img src={imgSrc} alt={name} />
            </div>
            <div className="album-info">
                <div className="album-title">
                    <h3>{name}</h3>
                </div>
                <div className="album-selections">
                    <div className="album-year">{year}</div>
                    {/* <div className="view-album">
                        <button className="btn-preview" onClick={previewClicked}>View</button>
                    </div> */}
                </div>
            </div>
        </div>
    );
}