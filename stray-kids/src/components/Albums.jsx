import Layout from "./Layout";
import Album from "../Album";
import {useState} from "react";
import AlbumPreview from "../AlbumPreview";
import AlbumInfo from "../AlbumInfo";

export default function Albums(){
    const albumsList = [
        {name: "ATE", imgSrc: "https://i.scdn.co/image/ab67616d0000b27351700837cdbc6adddb88560a", year: "2024",
            songs: [
                {title: "MOUNTAINS", lyrics: "", duration: "3:07"},
                {title: "Chk Chk Boom", lyrics: "Lyrics", duration: "2:28"},
                {title: "JJAM", lyrics: "", duration: "3:05"},
                {title: "I Like It", lyrics: "", duration: "2:28"},
                {title: "Runners", lyrics: "", duration: "3:16"},
                {title: "twilight", lyrics: "", duration: "3:12"},
                {title: "Stray Kids", lyrics: "", duration: "3:08"},
                {title: "Chk Chk Boom (Fesitval Ver.", lyrics: "", duration: ""},
            ],
        },
        {name: "ROCK-STAR", imgSrc: "https://i.scdn.co/image/ab67616d0000b2732bca95a658fdf653a35a3710", year: "2023",
            songs: [
                {title: "MEGAVERSE", lyrics: "", duration: "3:05"},
                {title: "LALALALA", lyrics: "", duration: "3:02"},
                {title: "BLIND SPOT", lyrics: "", duration: "3:20"},
                {title: "COMFLEX", lyrics: "", duration: "2:52"},
                {title: "Cover Me", lyrics: "", duration: "3:10"},
                {title: "Leave", lyrics: "", duration: "3:39"},
                {title: "Social Path (Feat. LiSA)(Korean Ver.)", lyrics: "", duration: "3:17"},
                {title: "LALALALA (Rock Ver.)", lyrics: "", duration: "3:07"},
            ],
        },
        {name: "5-STAR", imgSrc: "https://upload.wikimedia.org/wikipedia/en/5/52/Stray_Kids_-_5-Star.png", year: "2023",
            songs: [
                {title: "Hall Of Fame", lyrics: "", duration: "2:50"},
                {title: "S-Class", lyrics: "", duration: "3:14"},
                {title: "ITEM", lyrics: "", duration: "3:11"},
                {title: "Super Bowl", lyrics: "", duration: "3:03"},
                {title: "TOPLINE (Feat. Tiger JK)", lyrics: "", duration: "3:23"},
                {title: "DLC", lyrics: "", duration: "3:06"},
                {title: "GET LIT", lyrics: "", duration: "2:50"},
                {title: "Collision", lyrics: "", duration: "2:37"},
                {title: "FNF", lyrics: "", duration: "2:51"},
                {title: "Youtiful", lyrics: "", duration: "3:28"},
                {title: "THE SOUND (Korean Ver.)", lyrics: "", duration: "2:57"},
                {title: "Mixtape: Time Out", lyrics: "", duration: "2:54"},
            ],
        },
        {name: "THE SOUND", imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8BrE4-VFPq_Wz1gDqxD52LVReLxtyVKPhYA&s", year: "2023",
            songs: [
                {title: "THE SOUND", lyrics: "", duration: "3:00"},
                {title: "Battle Ground", lyrics: "", duration: "3:33"},
                {title: "Lost Me", lyrics: "", duration: "3:09"},
                {title: "DLMLU", lyrics: "", duration: "3:14"},
                {title: "Novel", lyrics: "", duration: "3:08"},
                {title: "Case 143 -Japanese ver.-", lyrics: "", duration: "3:13"},
                {title: "CHILL -Japanese ver.-", lyrics: "", duration: "3:17"},
                {title: "Scars", lyrics: "", duration: "3:19"},
                {title: "Thunderous -Japanese ver.-", lyrics: "", duration: "3:05"},
                {title: "There", lyrics: "", duration: "3:34"},
            ],
        },
        {name: "SKZ-REPLAY: Disc 1", imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKDtoa1enR1ZpPRWTVReIbRoSCDxhqhrkAnA&s", year: "2022",
            songs: [
                {title: "Fam (Korean ver.)", lyrics: "", duration: "3:32"},
                {title: "Connected (Bang Chan)", lyrics: "", duration: "2:51"},
                {title: "Limbo (Lee Know)", lyrics: "", duration: "3:16"},
                {title: "DOODLE (Changbin)", lyrics: "", duration: "3:04"},
                {title: "Love Untold (Hyunjin)", lyrics: "", duration: "3:30"},
                {title: "RUN (HAN)", lyrics: "", duration: "2:58"},
                {title: "Deep end (Felix)", lyrics: "", duration: "3:28"},
                {title: "Stars and Raindrops (Seungmin)", lyrics: "", duration: "3:48"},
                {title: "Hug Me (I.N)", lyrics: "", duration: "3:00"},
                {title: "#LoveStay", lyrics: "", duration: "3:17"},
                {title: "Up All Night", lyrics: "", duration: "3:21"},
                {title: "Drive (Bang Chan, Lee Know)", lyrics: "", duration: "2:43"},
                {title: "ice.cream (Hyunjin)", lyrics: "", duration: "2:50"}
            ],
        },
        {name: "SKZ-REPLAY: Disc 2", imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKDtoa1enR1ZpPRWTVReIbRoSCDxhqhrkAnA&s", year: "2022",
            songs:[
                {title: "ZONE (Bang Chan, Changbin, HAN)", lyrics: "", duration: "3:32"},
                {title: "Close (HAN)", lyrics: "", duration: "3:45"},
                {title: "Streetlight (Changbin)", lyrics: "", duration: "3:09"},
                {title: "i hate to admit (Bang Chan)", lyrics: "", duration: "2:49"},
                {title: "I GOT IT (HAN)", lyrics: "", duration: "2:50"},
                {title: "miss you (Hyunjin)", lyrics: "", duration: "3:08"},
                {title: "Maknae on Top (I.N)", lyrics: "", duration: "2:33"},
                {title: "Alien (HAN)", lyrics: "", duration: "3:19"},
                {title: "Because (Changbin, Felix)", lyrics: "", duration: "3:16"},
                {title: "Piece of a Puzzle (Changbin, Seungmin)", lyrics: "", duration: "2:53"},
                {title: "Wish You Back (HAN)", lyrics: "", duration: "3:18"},
                {title: "HaPpY (HAN)", lyrics: "", duration: "3:29"},
            ]
        },
        {name: "MAXIDENT", imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ3qPhrXTa9nZdGFQuqNLqNcYGKf-RzKPWGQ&s", year: "2022",
            songs: [
                {title: "", lyrics: "", duration: ""},
            ],
        },
        {name: "ODDINARY", imgSrc: "https://m.media-amazon.com/images/I/615SjH+Fp7L._UF1000,1000_QL80_.jpg", year: "2022",
            songs: [
                {title: "", lyrics: "", duration: ""},
            ],
        },
        {name: "Mixtape: OH", imgSrc: "https://upload.wikimedia.org/wikipedia/en/7/74/Stray_Kids_-_Mixtape_Oh.jpeg", year: "2021",
            songs: [
                {title: "Mixtape: OH", lyrics: "", duration: "3:32"}
            ],
        },
        {name: "SKZ2021", imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDvPP_r1A0ZmAuDuTqqfQR4JPT1dm-hMOCtg&s", year: "2021",
            songs: [
                {title: "", lyrics: "", duration: ""},
            ],
        },
        {name: "NOEASY", imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtF_k7i6JKVoBNwnv5d9aEjk53r5MYJQwruA&s", year: "2021",
            songs: [
                {title: "", lyrics: "", duration: ""},
            ],
        },
        {name: "ALL IN", imgSrc: "https://upload.wikimedia.org/wikipedia/en/2/2b/Stray_Kids_-_All_In_%28Regular%29.jpg", year: "2020",
            songs: [
                {title: "", lyrics: "", duration: ""},
            ],
        },
        {name: "IN LIFE", imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQffrQqtVwqdC55S2LB4BK2mqAj2eUtDmSDXA&s", year: "2020",
            songs: [
                {title: "", lyrics: "", duration: ""},
            ],
        },
        {name: "GO LIVE", imgSrc: "https://upload.wikimedia.org/wikipedia/en/2/2b/Stray_Kids_-_Go_Live.png", year: "2020",
            songs: [
                {title: "", lyrics: "", duration: ""},
            ],
        },
        {name: "SKZ2020", imgSrc: "https://m.media-amazon.com/images/I/71A3RYbyXeL._UF1000,1000_QL80_.jpg", year: "2020",
            songs: [
                {title: "", lyrics: "", duration: ""},
            ],
        },
        {name: "Cle: LEVANTER", imgSrc: "https://upload.wikimedia.org/wikipedia/en/1/1c/Stray_Kids_-_Cl%C3%A9_Levanter.jpg", year: "2019",
            songs: [
                {title: "", lyrics: "", duration: ""},
            ],
        },
        {name: "Cle 2: Yellow Wood", imgSrc: "https://upload.wikimedia.org/wikipedia/en/7/71/Stray_Kids_Yellow_Wood.jpg", year: "2019",
            songs: [
                {title: "", lyrics: "", duration: ""},
            ],
        },
        {name: "Cle: MIROH", imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKW615Fq1Y63xLKOd1ZvoyX69giC-DwCXCnw&s", year: "2019",
            songs: [
                {title: "", lyrics: "", duration: ""},
            ],
        },
        {name: "I am YOU", imgSrc: "https://upload.wikimedia.org/wikipedia/en/1/11/I_Am_You_Album_Cover.jpeg", year: "2018",
            songs: [
                {title: "", lyrics: "", duration: ""},
            ],
        },
        {name: "I am WHO", imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuqLnChB6WF9olUuBieZql9Wq8CjQWPJUoFg&s", year: "2018",
            songs: [
                {title: "", lyrics: "", duration: ""},
            ],
        },
        {name: "I am NOT", imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg16M7wxV4x5S1hbGPAHBJ1olrDabuSXHu8Q&s", year: "2018",
            songs: [
                {title: "", lyrics: "", duration: ""},
            ],
        },
        {name: "Mixtape", imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9LanW6029tVxpChGpGtKj3CXBQabCaPWznQ&s", year: "2018",
            songs: [
                {title: "", lyrics: "", duration: ""},
            ],
        },
        {name: "SLASH (From \"Deadpool & Wolverine\")", imgSrc: "https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Stray_Kids_-_Slash.png/220px-Stray_Kids_-_Slash.png", year: "2024",
            songs: [
                {title: "SLASH (From \"Deadpool & Wolverine\")", lyrics: "", duration: "3:11"}
            ],
        },
        {name: "Lose my Breath (Feat. Charlie Puth)", imgSrc: "https://i.scdn.co/image/ab67616d0000b2735ba0dedb513880cf318f15cb", year: "2024",
            songs: [
                {title: "Lose my Breath (Feat. Charlie Puth)", lyrics: "", duration: "2:46"}
            ],
        },
        {name: "Social Path (Feat. LiSA)", imgSrc: "https://i.scdn.co/image/ab67616d0000b273270ec2f0731d60117f1c8315", year: "2023",
            songs: [
                {title: "Social Path (Feat. LiSA)", lyrics: "", duration: "3:18"}
            ],
        },
        {name: "Going Dumb (Feat. Alesso, CORSAK)", imgSrc: "https://upload.wikimedia.org/wikipedia/en/f/fc/Alesso_x_Corsak_x_Stray_Kids_-_Going_Dumb.jpeg", year: "2021",
            songs: [
                {title: "Going Dumb (Feat. Alesso, CORSAK)", lyrics: "", duration: "2:49"}
            ],
        },
        {name: "Christmas EveL", imgSrc: "https://upload.wikimedia.org/wikipedia/en/9/9f/Stray_Kids_-_Christmas_EveL.jpeg", year: "2021",
            songs: [
                {title: "", lyrics: "", duration: ""}
            ],
        },
        {name: "POP OUT BOY!Part.1", imgSrc: "https://i.scdn.co/image/ab67616d0000b273553d50e9713ced284dd254a3", year: "2020",
            songs: [
                {title: "Hello Stranger", lyrics: "", duration: "3:58"},
                {title: "Hello Stranger (Inst.)", lyrics: "", duration: "3:58"}
            ],
        },
        {name: "TOP", imgSrc: "https://upload.wikimedia.org/wikipedia/en/a/a5/Stray_Kids_-_Top_%28Korean_ver.%29.jpg", year: "2020",
            songs: [
                {title: "TOP (\"Tower of God\" OP)", lyrics: "", duration: "3:04"},
                {title: "SLUMP (\"Tower of God\" OP)", lyrics: "", duration: "3:04"},
            ],
        },
        {name: "TOP (English Ver.)", imgSrc: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c6/Stray_Kids_-_Top_%28English_ver.%29.jpg/220px-Stray_Kids_-_Top_%28English_ver.%29.jpg", year: "2020",
            songs: [
                {title: "TOP (English Ver.)", lyrics: "", duration: "3:07"},
            ],
        },
        {name: "TOP -Japanese Ver.-", imgSrc: "https://images.genius.com/2e009581dd6e5538236f9837061073c7.1000x1000x1.jpg", year: "2020",
            songs: [
                {title: "TOP -Japanese Ver.-", lyrics: "", duration: "3:07"},
                {title: "SLUMP -Japanese Ver.-", lyrics: "", duration: "2:16"},
                {title: "TOP (Instrumental)", lyrics: "", duration: "3:07"},
                {title: "SLUMP (Instrumental)", lyrics: "", duration: "2:16"},
            ],
        },
        {name: "Mixtape: On Track", imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGSrFp01MA2sAaaXd8Z02KSbv7EMOY31Vs-A&s", year: "2020",
            songs: [
                {title: "Mixtape: On Track", lyrics: "", duration: "3:27"}
            ],
        },
        {name: "Mixtape: Gone Days", imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOmc7NQZqlRU4CZBIW_YvxdtbFl5sUyhq-gA&s", year: "2019",
            songs: [
                {title: "Mixtape: Gone Days", lyrics: "", duration: "3:16"}
            ],
        },
        {name: "Extraordinary You Pt.7 (OTS)", imgSrc: "https://images.genius.com/a5d29cfafa38319ee167721da668dc61.500x500x1.jpg", year: "2019",
            songs: [
                {title: "끝나지 않을 이야기", lyrics: "", duration: "4:04"},
                {title: "끝나지 않을 이야기 (Inst.)", lyrics: "", duration: "4:04"},
            ],
        },
    ];
        // TEMPLATE FOR ALBUMS:
        // {name: "", imgSrc: "", year: "",
        //     songs: [
        //         {title: "", lyrics: "", duration: ""}
        //     ],
        // },
        //
        // TEMPLATE FOR SONGS:
        //{title: "", lyrics: "", duration: ""}
        //
        //
    const yearFilters = [
        (<div className="menu-option"><div><button className="btn-filter">All</button></div></div>),
        (<div className="menu-option"><div><button className="btn-filter">2024</button></div></div>), 
        (<div className="menu-option"><div><button className="btn-filter">2023</button></div></div>),
        (<div className="menu-option"><div><button className="btn-filter">2022</button></div></div>),
        (<div className="menu-option"><div><button className="btn-filter">2021</button></div></div>),
        (<div className="menu-option"><div><button className="btn-filter">2020</button></div></div>),
        (<div className="menu-option"><div><button className="btn-filter">2019</button></div></div>),
        (<div className="menu-option"><div><button className="btn-filter">2018</button></div></div>)
    ];
    const [previewAlbum, setPreviewAlbum]= useState(albumsList[0]);
    const [songSelected, setSongSelected]= useState(false); //for showing lyrics
    const [albumSelected, setAlbumSelected]=useState(false); //for heading text
    
    const handleChange=(album)=>{
        setPreviewAlbum(album);
        setAlbumSelected(true);
    }

    return (
        <Layout>
            <div className="albums-main-container">
                <div className="heading">
                    <h1>{albumSelected? "Selected Album" : "Featured Album"}</h1>
                </div>
                <div className="preview-container">
                    <div className="left">
                        {!songSelected && <AlbumInfo {...previewAlbum} />}
                    </div>
                    {!songSelected&& previewAlbum&& <AlbumPreview {...previewAlbum} />}
                    {/* Will have to add a component for displaying lyrics, song creds when songSelected here */}
                </div>
                <div className="filter-menu">
                    <div className="a-title">
                        <h2>Albums</h2>
                    </div>
                    <div className="filter-buttons">
                        {yearFilters.map((btn, index)=>(
                        btn
                        ))}
                    </div>
                </div>
                <div className="filter-info">
                    Select an album to view more information about it
                </div>
                <div className="albums-container">
                    <div className="albums">
                        {albumsList.map((album, index)=>(
                            <Album key={index} {...album} previewClicked={()=>handleChange(album)}/>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
}