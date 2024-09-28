export default function MemberCard(props){
    return (
        <div className="member-container" id="card" style={{backgroundImage: `url(${props.backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.75, zIndex: 1}} >
            {/* <div className="member-image">
                <img src={props.img} alt={props.name} />
            </div> */}
            <div className="member-info" >
                <div className="member-name">
                    <h1>{props.name}</h1>
                </div>
                <div className="member-positions">
                    {props.position} | {props.position2} | {props.position3}
                </div>
                <div className="member-description">
                    <p><b>Real Name:</b> {props.realName}</p>
                    <p><b>Birthday:</b> {props.birthday}</p>
                    <p><b>Nationality:</b> {props.nationality}</p>
                    <p><b>Instagram:</b> <a href={`https://www.instagram.com/${props.insta}`} target="_blank" rel="noreferrer">{props.insta}</a></p>
                    <p>{props.description}</p>
                </div>
            </div>
            <div className="member-socials">
                    {/* <div className="member-insta">
                        <a href={props.insta} >
                           <img src={props.instaImg} alt="insta" /> 
                        </a>
                    </div> */}
                    <div className="member-player">
                        <a href={props.players}>
                            <img src={props.playersImg} alt="yt" />
                        </a>
                    </div>
                    <div className="member-player">
                        <a href={props.players2}>
                            <img src={props.playersImg2} alt="yt" />
                        </a>
                    </div>
                    <div className="member-player">
                        <a href={props.players3}>
                            <img src={props.playersImg3} alt="yt" />
                        </a>
                    </div>
                    {/* <div className="member-skzoo">
                       <img src={props.skzoo} alt="skzoo" />
                    </div> */}
                </div>
        </div>
    );
}