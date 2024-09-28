export default function Lyrics({name, lyrics}){
    return (
        <div className="lyrics-container" style={{ whiteSpace: 'pre-wrap' }}>
            <h1>{name}</h1>
            <div className="lyrics">
                {lyrics?lyrics:<div>No lyrics are available at this time. Please check later</div>}
            </div>
        </div>
    );
}