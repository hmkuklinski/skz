export default function Lyrics({name, lyrics, closeLyrics}){
    return (
        <div className="lyrics-container" style={{ whiteSpace: 'pre-wrap' }}>
            <h1>{name}</h1>
            <div className="lyrics">
                {lyrics} 
            </div>
            <div className="exit">
                <button className="btn-exit"onClick={closeLyrics}>Exit</button>
            </div>
        </div>
    );
}