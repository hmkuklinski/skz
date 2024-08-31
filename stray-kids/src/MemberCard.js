export default function MemberCard(props){
    return (
        <div className="member-container" id="card">
            <div className="member-image">
                <img src={props.img} alt={props.name} />
            </div>
            <div className="member-info">
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
                    <p>{props.description}</p>
                </div>
                <div className="member-socials">
                    <div className="member-insta">
                        <b>Instagram: </b>
                        <a href={props.insta} >
                           <img src={props.instaImg} alt="insta" /> 
                        </a>
                    </div>
                    <div className="member-player">
                        <b>Solo Performance: </b>
                        <a href={props.players}>
                            <img src={props.playersImg} alt="yt" />
                        </a>
                    </div>
                    <div className="member-skzoo">
                        <b>SKZOO: </b>
                       <img src={props.skzoo} alt="skzoo" />
                    </div>
                </div>
            </div>
        </div>
    );
}