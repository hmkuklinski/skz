import Layout from "./Layout";
import Album from "../Album";
import {useState} from "react";
import AlbumPreview from "../AlbumPreview";
import AlbumInfo from "../AlbumInfo";

export default function Albums(){
    let albumsList = [
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
            id: "07192024"
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
            id: "11102023"
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
            id: "06022023"
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
            id: "02222023"
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
            id: "12212022a"
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
            ],
            id: "12212022b"
        },
        {name: "MAXIDENT", imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ3qPhrXTa9nZdGFQuqNLqNcYGKf-RzKPWGQ&s", year: "2022",
            songs: [
                {title: "CASE 143", lyrics: "", duration: "3:11"},
                {title: "CHILL", lyrics: "", duration: "3:14"},
                {title: "Give Me Your TMI", lyrics: "", duration: "3:18"},
                {title: "SUPER BOARD", lyrics: "", duration: "3:05"},
                {title: "3RACHA (Bang Chan, Changbin, HAN)", lyrics: "", duration: "3:28"},
                {title: "TASTE (Lee Know, Hyunjin, Felix)", lyrics: "", duration: "3:35"},
                {title: "Can't Stop (Seungmin, I.N)", lyrics: "", duration: "3:29"},
                {title: "CIRCUS (Korean Ver.)", lyrics: "", duration: "3:14"},
            ],
            id: "10072022"
        },
        {name: "ODDINARY", imgSrc: "https://m.media-amazon.com/images/I/615SjH+Fp7L._UF1000,1000_QL80_.jpg", year: "2022",
            songs: [
                {title: "VENOM", lyrics: "", duration: "3:14"},
                {title: "MANIAC", lyrics: "", duration: "3:03"},
                {title: "Charmer", lyrics: "", duration: "3:08"},
                {title: "FREEZE", lyrics: "", duration: "2:58"},
                {title: "Lonely St.", lyrics: "", duration: "2:44"},
                {title: "Waiting for Us", lyrics: "", duration: "3:39"},
                {title: "Muddy Water", lyrics: "", duration: "3:17"},
            ],
            id: "03182022"
        },
        {name: "Mixtape: OH", imgSrc: "https://upload.wikimedia.org/wikipedia/en/7/74/Stray_Kids_-_Mixtape_Oh.jpeg", year: "2021",
            songs: [
                {title: "Mixtape: OH", lyrics: "", duration: "3:32"}
            ],
            id: "06262021"
        },
        {name: "SKZ2021", imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDvPP_r1A0ZmAuDuTqqfQR4JPT1dm-hMOCtg&s", year: "2021",
            songs: [
                {title: "Scars (Korean Ver.)", lyrics: "", duration: "3:19"},
                {title: "Awaken", lyrics: "", duration: "3:13"},
                {title: "ROCK", lyrics: "", duration: "3:12"},
                {title: "3rd Eye", lyrics: "", duration: "4:03"},
                {title: "Placebo", lyrics: "", duration: "3:54"},
                {title: "Insomnia", lyrics: "", duration: "3:26"},
                {title: "Behind the Light", lyrics: "", duration: "4:29"},
                {title: "My Side", lyrics: "", duration: "3:36"},
                {title: "N/S", lyrics: "", duration: "3:43"},
                {title: "0325", lyrics: "", duration: "3:38"},
                {title: "For You", lyrics: "", duration: "4:09"},
                {title: "Maze of Memories", lyrics: "", duration: "2:55"},
                {title: "Broken Compass", lyrics: "", duration: "3:40"},
                {title: "Hoodie Season", lyrics: "", duration: "3:53"},
            ],
            id: "12232021"
        },
        {name: "NOEASY", imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtF_k7i6JKVoBNwnv5d9aEjk53r5MYJQwruA&s", year: "2021",
            songs: [
                {title: "CHEESE", lyrics: "", duration: "3:02"},
                {title: "Thunderous", lyrics: "", duration: "3:03"},
                {title: "DOMINO", lyrics: "", duration: "3:18"},
                {title: "SSICK", lyrics: "", duration: "3:10"},
                {title: "The View", lyrics: "", duration: "3:21"},
                {title: "Sorry, I Love You", lyrics: "", duration: "2:57"},
                {title: "Silent Cry", lyrics: "", duration: "3:29"},
                {title: "Secret Secret", lyrics: "", duration: "3:29"},
                {title: "Star Lost", lyrics: "", duration: "3:35"},
                {title: "Red Lights (Bang Chan, Hyunjin)", lyrics: "", duration: "3:09"},
                {title: "Surfin'(Lee Know, Changbin, Felix)", lyrics: "", duration: "3:11"},
                {title: "Gone Away (HAN, Seungmin, I.N)", lyrics: "", duration: "4:01"},
                {title: "WOLFGANG", lyrics: "", duration: "3:10"},
                {title: "Mixtape: OH", lyrics: "", duration: "3:31"},
            ],
            id: "08232021"
        },
        {name: "ALL IN", imgSrc: "https://upload.wikimedia.org/wikipedia/en/2/2b/Stray_Kids_-_All_In_%28Regular%29.jpg", year: "2020",
            songs: [
                {title: "ALL IN", lyrics: "", duration: ""},
                {title: "FAM", lyrics: "", duration: ""},
                {title: "One Day", lyrics: "", duration: ""},
                {title: "God's Menu -Japanese ver.-", lyrics: "", duration: ""},
                {title: "Back Door -Japanese ver.-", lyrics: "", duration: ""},
                {title: "TOP -Japanese Ver.-", lyrics: "", duration: "3:07"},
                {title: "SLUMP -Japanese Ver.-", lyrics: "", duration: "2:16"},
            ],
            id: "10272020"
        },
        {name: "IN LIFE", imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQffrQqtVwqdC55S2LB4BK2mqAj2eUtDmSDXA&s", year: "2020",
            songs: [
                {title: "The Tortoise and the Hare", lyrics: "", duration: "3:44"},
                {title: "Back Door", lyrics: "", duration: "3:09"},
                {title: "B Me", lyrics: "", duration: "3:25"},
                {title: "Any", lyrics: "", duration: "2:49"},
                {title: "Ex", lyrics: "", duration: "3:37"},
                {title: "We Go (Bang Chan, Changbin, HAN)", lyrics: "", duration: "2:38"},
                {title: "Wow (Lee Know, Felix, Hyunjin)", lyrics: "", duration: "3:13"},
                {title: "My Universe (Seungmin, I.N)", lyrics: "", duration: "3:23"},
                {title: "God's Menu", lyrics: "", duration: "2:47"},
                {title: "Easy", lyrics: "", duration: "3:03"},
                {title: "Pace Maker", lyrics: "", duration: "3:10"},
                {title: "Airplane", lyrics: "", duration: "3:34"},
                {title: "Another Day", lyrics: "", duration: "2:46"},
                {title: "Phobia", lyrics: "", duration: "3:32"},
                {title: "Blueprint", lyrics: "", duration: "4:11"},
                {title: "TA", lyrics: "", duration: "3:28"},
                {title: "Haven", lyrics: "", duration: "3:20"},
                
            ],
            id: "09142020"
        },
        {name: "GO LIVE", imgSrc: "https://upload.wikimedia.org/wikipedia/en/2/2b/Stray_Kids_-_Go_Live.png", year: "2020",
            songs: [
                {title: "GO LIVE", lyrics: "", duration: "1:49"},
                {title: "God's Menu", lyrics: "", duration: "2:47"},
                {title: "Easy", lyrics: "", duration: "3:03"},
                {title: "Pace Maker", lyrics: "", duration: "3:10"},
                {title: "Airplane", lyrics: "", duration: "3:34"},
                {title: "Another Day", lyrics: "", duration: "2:46"},
                {title: "Phobia", lyrics: "", duration: "3:32"},
                {title: "Blueprint", lyrics: "", duration: "4:11"},
                {title: "TA", lyrics: "", duration: "3:28"},
                {title: "Haven", lyrics: "", duration: "3:20"},
                {title: "TOP (\"Tower of God\" OP)", lyrics: "", duration: "3:04"},
                {title: "SLUMP (\"Tower of God\" OP)", lyrics: "", duration: "3:04"},
            ],
            id: "06172020"
        },
        {name: "SKZ2020", imgSrc: "https://m.media-amazon.com/images/I/71A3RYbyXeL._UF1000,1000_QL80_.jpg", year: "2020",
            songs: [
                {title: "Hellevator", lyrics: "", duration: "3:58"},
                {title: "BEWARE", lyrics: "", duration: "3:10"},
                {title: "Spread My Wings", lyrics: "", duration: "3:21"},
                {title: "YAYAYA", lyrics: "", duration: "3:22"},
                {title: "District 9", lyrics: "", duration: "3:33"},
                {title: "Mirror", lyrics: "", duration: "3:42"},
                {title: "Grow Up", lyrics: "", duration: "3:32"},
                {title: "My Pace", lyrics: "", duration: "3:10"},
                {title: "Voices", lyrics: "", duration: "3:21"},
                {title: "Question", lyrics: "", duration: "3:04"},
                {title: "M.I.A", lyrics: "", duration: "3:31"},
                {title: "Awkward Silence", lyrics: "", duration: "3:14"},
                {title: "I am YOU", lyrics: "", duration: "3:26"},
                {title: "Get Cool", lyrics: "", duration: "3:16"},
                {title: "MIROH", lyrics: "", duration: "3:28"},
                {title: "Victory Song", lyrics: "", duration: "3:17"},
                {title: "Boxer", lyrics: "", duration: "3:22"},
                {title: "Chronosaurus", lyrics: "", duration: "3:20"},
                {title: "19", lyrics: "", duration: "3:25"},
                {title: "Side Effects", lyrics: "", duration: "3:15"},
                {title: "TMT", lyrics: "", duration: "3:28"},
                {title: "Double Knot", lyrics: "", duration: "3:11"},
                {title: "Levanter", lyrics: "", duration: "3:17"},
                {title: "Astronaut", lyrics: "", duration: "3:00"},
            ],
            id: "03182020"
        },
        {name: "Cle: LEVANTER", imgSrc: "https://upload.wikimedia.org/wikipedia/en/1/1c/Stray_Kids_-_Cl%C3%A9_Levanter.jpg", year: "2019",
            songs: [
                {title: "STOP", lyrics: "", duration: "3:09"},
                {title: "Double Knot", lyrics: "", duration: "3:11"},
                {title: "Levanter", lyrics: "", duration: "3:17"},
                {title: "Booster", lyrics: "", duration: "3:40"},
                {title: "Astronaut", lyrics: "", duration: "3:00"},
                {title: "Sunshine", lyrics: "", duration: "3:42"},
                {title: "You Can STAY", lyrics: "", duration: "3:28"},
            ],
            id: "12092019"
        },
        {name: "Cle 2: Yellow Wood", imgSrc: "https://upload.wikimedia.org/wikipedia/en/7/71/Stray_Kids_Yellow_Wood.jpg", year: "2019",
            songs: [
                {title: "Road Not Taken", lyrics: "", duration: "1:35"},
                {title: "Side Effects", lyrics: "", duration: "3:13"},
                {title: "TMT", lyrics: "", duration: "3:27"},
                {title: "Mixtape #1", lyrics: "", duration: "4:12"},
                {title: "Mixtape #2", lyrics: "", duration: "4:51"},
                {title: "Mixtape #3", lyrics: "", duration: "4:17"},
                {title: "Mixtape #4", lyrics: "", duration: "3:51"},
            ],
            id: "06192019"
        },
        {name: "Cle: MIROH", imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKW615Fq1Y63xLKOd1ZvoyX69giC-DwCXCnw&s", year: "2019",
            songs: [
                {title: "Entrance", lyrics: "", duration: "1:38"},
                {title: "MIROH", lyrics: "", duration: "3:27"},
                {title: "Victory Song", lyrics: "", duration: "3:16"},
                {title: "Maze of Memories", lyrics: "", duration: "2:55"},
                {title: "Boxer", lyrics: "", duration: "3:20"},
                {title: "Chronosaurus", lyrics: "", duration: "3:18"},
                {title: "19", lyrics: "", duration: "3:25"},
            ],
            id: "03252019"
        },
        {name: "I am YOU", imgSrc: "https://upload.wikimedia.org/wikipedia/en/1/11/I_Am_You_Album_Cover.jpeg", year: "2018",
            songs: [
                {title: "YOU.", lyrics: "", duration: "1:17"},
                {title: "I am YOU", lyrics: "", duration: "3:24"},
                {title: "My Side", lyrics: "", duration: "3:36"},
                {title: "Hero's Soup", lyrics: "", duration: "3:32"},
                {title: "Get Cool", lyrics: "", duration: "3:15"},
                {title: "N/S", lyrics: "", duration: "3:43"},
                {title: "0325", lyrics: "", duration: "3:37"},
            ],
            id: "10222018"
        },
        {name: "I am WHO", imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuqLnChB6WF9olUuBieZql9Wq8CjQWPJUoFg&s", year: "2018",
            songs: [
                {title: "WHO?", lyrics: "", duration: "1:44"},
                {title: "My Pace", lyrics: "", duration: "3:09"},
                {title: "Voices", lyrics: "", duration: "3:20"},
                {title: "Question", lyrics: "", duration: "3:02"},
                {title: "Insomnia", lyrics: "", duration: "3:26"},
                {title: "M.I.A", lyrics: "", duration: "3:30"},
                {title: "Awkward Silence", lyrics: "", duration: "3:13"},
            ],
            id: "08062018"
        },
        {name: "I am NOT", imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg16M7wxV4x5S1hbGPAHBJ1olrDabuSXHu8Q&s", year: "2018",
            songs: [
                {title: "NOT!", lyrics: "", duration: "1:22"},
                {title: "District 9", lyrics: "", duration: "3:31"},
                {title: "Mirror", lyrics: "", duration: "3:40"},
                {title: "Awaken", lyrics: "", duration: "3:13"},
                {title: "ROCK", lyrics: "", duration: "3:13"},
                {title: "Grow Up", lyrics: "", duration: "3:30"},
                {title: "3rd Eye", lyrics: "", duration: "4:03"},
            ],
            id: "03262018"
        },
        {name: "Mixtape", imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9LanW6029tVxpChGpGtKj3CXBQabCaPWznQ&s", year: "2018",
            songs: [
                {title: "Hellevator", lyrics: "", duration: "3:58"},
                {title: "BEWARE", lyrics: "", duration: "3:09"},
                {title: "Spread My Wings", lyrics: "", duration: "3:20"},
                {title: "YAYAYA", lyrics: "", duration: "3:21"},
                {title: "GLOW", lyrics: "", duration: "3:23"},
                {title: "School Life", lyrics: "", duration: "3:36"},
                {title: "4419", lyrics: "", duration: "3:12"}
            ],
            id: "01082018"
        },
        {name: "SLASH (\"Deadpool & Wolverine\")", imgSrc: "https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Stray_Kids_-_Slash.png/220px-Stray_Kids_-_Slash.png", year: "2024",
            songs: [
                {title: "SLASH (\"Deadpool & Wolverine\")", lyrics: "", duration: "3:11"}
            ],
            id: "07232024"
        },
        {name: "Lose my Breath (Feat. Charlie Puth)", imgSrc: "https://i.scdn.co/image/ab67616d0000b2735ba0dedb513880cf318f15cb", year: "2024",
            songs: [
                {title: "Lose my Breath (Feat. Charlie Puth)", lyrics: "", duration: "2:46"}
            ],
            id: "05102024"
        },
        {name: "Social Path (Feat. LiSA)", imgSrc: "https://i.scdn.co/image/ab67616d0000b273270ec2f0731d60117f1c8315", year: "2023",
            songs: [
                {title: "Social Path (Feat. LiSA)", lyrics: "", duration: "3:18"}
            ],
            id: "09062023"
        },
        {name: "Going Dumb (Feat. Alesso, CORSAK)", imgSrc: "https://upload.wikimedia.org/wikipedia/en/f/fc/Alesso_x_Corsak_x_Stray_Kids_-_Going_Dumb.jpeg", year: "2021",
            songs: [
                {title: "Going Dumb (Feat. Alesso, CORSAK)", lyrics: "", duration: "2:49"}
            ],
            id: "03192021"
        },
        {name: "Christmas EveL", imgSrc: "https://upload.wikimedia.org/wikipedia/en/9/9f/Stray_Kids_-_Christmas_EveL.jpeg", year: "2021",
            songs: [
                {title: "Christmas EveL", lyrics: "", duration: "2:58"},
                {title: "24 to 25", lyrics: "", duration: "3:36"},
                {title: "Winter Falls", lyrics: "", duration: "3:55"},
                {title: "DOMINO (English Ver.)", lyrics: "", duration: "3:18"},
            ],
            id: "11292021"
        },
        {name: "POP OUT BOY!Part.1", imgSrc: "https://i.scdn.co/image/ab67616d0000b273553d50e9713ced284dd254a3", year: "2020",
            songs: [
                {title: "Hello Stranger", lyrics: "", duration: "3:58"},
                {title: "Hello Stranger (Inst.)", lyrics: "", duration: "3:58"}
            ],
            id: "07162020"
        },
        {name: "TOP", imgSrc: "https://upload.wikimedia.org/wikipedia/en/a/a5/Stray_Kids_-_Top_%28Korean_ver.%29.jpg", year: "2020",
            songs: [
                {title: "TOP (\"Tower of God\" OP)", lyrics: "", duration: "3:04"},
                {title: "SLUMP (\"Tower of God\" OP)", lyrics: "", duration: "3:04"},
            ],
            id: "05132020"
        },
        {name: "TOP (English Ver.)", imgSrc: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c6/Stray_Kids_-_Top_%28English_ver.%29.jpg/220px-Stray_Kids_-_Top_%28English_ver.%29.jpg", year: "2020",
            songs: [
                {title: "TOP (English Ver.)", lyrics: "", duration: "3:07"},
            ],
            id: "05202020a"
        },
        {name: "TOP -Japanese Ver.-", imgSrc: "https://images.genius.com/2e009581dd6e5538236f9837061073c7.1000x1000x1.jpg", year: "2020",
            songs: [
                {title: "TOP -Japanese Ver.-", lyrics: "", duration: "3:07"},
                {title: "SLUMP -Japanese Ver.-", lyrics: "", duration: "2:16"},
                {title: "TOP (Instrumental)", lyrics: "", duration: "3:07"},
                {title: "SLUMP (Instrumental)", lyrics: "", duration: "2:16"},
            ],
            id: "05202020b"
        },
        {name: "Mixtape: On Track", imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGSrFp01MA2sAaaXd8Z02KSbv7EMOY31Vs-A&s", year: "2020",
            songs: [
                {title: "Mixtape: 바보라도 알아", lyrics: "", duration: "3:27"}
            ],
            id: "03252020"
        },
        {name: "Mixtape: Gone Days", imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOmc7NQZqlRU4CZBIW_YvxdtbFl5sUyhq-gA&s", year: "2019",
            songs: [
                {title: "Mixtape: Gone Days", lyrics: "", duration: "3:16"}
            ],
            id: "12262019"
        },
        {name: "Extraordinary You Pt.7 (OTS)", imgSrc: "https://images.genius.com/a5d29cfafa38319ee167721da668dc61.500x500x1.jpg", year: "2019",
            songs: [
                {title: "끝나지 않을 이야기", lyrics: "", duration: "4:04"},
                {title: "끝나지 않을 이야기 (Inst.)", lyrics: "", duration: "4:04"},
            ],
            id: "11092019"
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
    
    const yearFilters = ["All", "2024", "2023", "2022", "2021", "2020", "2019", "2018"];
    const [previewAlbum, setPreviewAlbum]= useState(albumsList[0]);
    const [songSelected, setSongSelected]= useState(false); //for showing lyrics 
    
    const [currentIndex, setCurrentIndex]= useState(0);

    let albumsSorted= albumsList.sort((a, b) => b.year - a.year);
    const [albumsDisplay, setAlbumsDisplay]= useState(albumsSorted);

    
    //for clicking on the album from album card:
    const handleChange=(album)=>{
        setPreviewAlbum(album);
        setCurrentIndex(albumsList.indexOf(album));
    }

    /* ------------------------FOR NAV BUTTONS (PREVIEW LANDING) --------------------------
        hit the -> button (filter through the list of albums w/ preview)
        const handleUp= ()=>{
            let newIndex = (currentIndex + 1) % albumsList.length;
            setCurrentIndex(newIndex);
            setPreviewAlbum(albumsList[newIndex]);
        }
        hit the <- button (filter through the list of albums w/ preview)
        const handleDown= ()=>{
            let newIndex = (currentIndex - 1 + albumsList.length) % albumsList.length
            setCurrentIndex(newIndex);
            setPreviewAlbum(albumsList[newIndex]);
        }
    */
    
    //gets list of filtered objects by year (if button 'All' is selected, will sort in descending order)
    const filterYear= (year)=>{
        if (year==="All"){
            setAlbumsDisplay(albumsSorted);
        }
        else{
            let filteredList = albumsList.filter(album=> album.year === year);
            setAlbumsDisplay(filteredList);
        }

    }

    //layout for the preview card:
    const standardPreview = (
        <div className="preview-container" id="previews">
            <div className="left">
                {!songSelected && <AlbumInfo {...previewAlbum} />}
            </div>
            {!songSelected&& previewAlbum&& <AlbumPreview {...previewAlbum} />}
            {/* Will have to add a component for displaying lyrics, song creds when songSelected here */}
        </div>
    );
    //for the filter options:
    const filter =(
        <div className="filter-menu">
            <div className="a-title">
                <h2>Albums</h2>
            </div>
            <div className="filter-buttons">
                {yearFilters.map((year, index)=>(
                    <div className="menu-option" key={index}><div><button className="btn-filter" onClick={()=>filterYear(year)}>{year}</button></div></div>
                ))}
            </div>
        </div>
    );

    return (
        <Layout>
            <div className="albums-main-container">
                <div className="albums-main">
                    {/* <div className="prev">
                        <button onClick={()=>handleDown()}><ion-icon name="arrow-back-outline"></ion-icon></button>
                    </div> */}
                    {standardPreview}
                    {/* <div className="next">
                        <button onClick={()=>handleUp()}><ion-icon name="arrow-forward-outline"></ion-icon></button>
                    </div> */}
                </div>
                {filter}
                <div className="filter-info">
                    Select an album to view more information about it
                </div>
                <div className="albums-container">
                    <div className="albums">
                        {albumsDisplay.length > 0 ? albumsDisplay.map((album) => (
                            <Album key={album.id} {...album} previewClicked={() => handleChange(album)} />
                        )) : <p>No albums found.</p>
                        }
                    </div>
                </div>
            </div>
        </Layout>
    );
}