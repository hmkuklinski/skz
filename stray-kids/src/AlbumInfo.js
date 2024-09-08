export default function AlbumInfo({songs, name}){
    return (
        <div className="info-container">
            <div className="info-title"><h1>{name}</h1></div>
            <div className="songs-list">
                {songs.map((song, index)=>(
                    <div className="song-container" key={index}>
                        <div className="song-number">{index+1}</div>
                        <div className="song-title">{song.title}</div>
                        <div className="song-duration">{song.duration|| 'N/A'}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}