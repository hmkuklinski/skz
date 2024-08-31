import './App.css';
import React, {useState} from "react";
import BlogEntry from './BlogEntry.js';
import MemberCard from './MemberCard.js';


function App() {
  const bangchan = {
    img: "/bangchan.png",
    name: "Bangchan",
    realName: "Christopher Bang",
    birthday: "October 3, 1997",
    nationality: "Korean-Australian",
    position: "LEADER",
    position2: "Producer",
    position3: "Vocal",
    skzooName: "WolfChan",
    description: 
    "Christopher Bangh (aka BangChan) is the leader of Stray Kids. He trained under JYP Entertainment for seven years and was responsible for selecting the members for the group himself. He is a member of the producing subunit called 3Racha and is one of the higest credited producer and songwriter amongst the 4th generation KPOP idols, with more than 150 songs.",
    insta: "gnabnahc",
    instaImg: "https://pbs.twimg.com/media/F-KO5ZPX0AABnRG.jpg",
    players: "https://youtu.be/cESg37OFeso?si=3YyD_FGcBOU9TZfv",
    playersImg: "https://i.ytimg.com/vi/CAJB3BCZSZM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC5-bO-jgh1iwpA4xhgXDPUDKSySw",
    players2: "https://www.youtube.com/watch?v=3P-wT723kYs",
    playersImg2: "https://i.ytimg.com/vi/3P-wT723kYs/maxresdefault.jpg",
    players3:"https://www.youtube.com/watch?v=b4zq-KJLUf0",
    playersImg3: "https://i.ytimg.com/vi/b4zq-KJLUf0/maxresdefault.jpg",
    skzoo: "https://i.pinimg.com/originals/08/78/c3/0878c34107194977ec472edaade5a775.jpg",
    backgroundImage: "https://kpopping.com/documents/09/2/1500/230525-Stray-Kids-Bang-Chan-Photoshoot-by-NAVER-x-Dispatch-documents-3.jpeg?v=4bf12"
  };
  const leeknow = {
    img:"/leeknow.png",
    name: "LeeKnow",
    realName: "Lee Minho",
    birthday: "October 25, 1998",
    nationality: "Korean",
    position: "DANCER",
    position2: "Vocal",
    position3: "Visual",
    skzooName: "LeeBit",
    description: 
    "Lee Know is the main dancer of Stray Kids. He started his career as a backup dancer for BTS and later became a trainee at JYP Entertainment. He is known for his exceptional dance skills and his playful yet enigmatic personality. He is also nicknamed the Butt Hunter because he likes to slap other member's butts during performances. He's a member of DanceRACHA.",
    insta: "t.leeknowsaurus",
    instaImg: "https://pbs.twimg.com/media/GJem-IUWMAAf5D8.jpg",
    players: "https://www.youtube.com/watch?v=tUYJdNxrSyk&list=PL87ThDGJnwEY4AWGzakdmbbGfIbmWHefX&index=11",
    playersImg: "https://i.ytimg.com/vi/Om8fwdGquSs/maxresdefault.jpg",
    players2: "https://www.youtube.com/watch?v=foksbrsj_ag",
    playersImg2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSonx_tZswC78v_AJbD1m3fY73muKsbFvAKwQ&s",
    players3:"https://www.youtube.com/watch?app=desktop&v=DbY6VKNEoAw",
    playersImg3: "https://i.ytimg.com/vi/DbY6VKNEoAw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDpX-3XmgpWnTkrTOiuJ8Ui606Rwg",
    skzoo: "https://i.pinimg.com/originals/7b/ce/d0/7bced0d1dd1da2ca80aff1d097332aed.jpg",
    backgroundImage: "https://pbs.twimg.com/media/ELUCJBSUUAA3dfw?format=jpg&name=large"
  };
  const changbin = {
    img: "/changbin.png",
    name: "Changbin",
    realName: "Seo Changbin",
    birthday: "August 11, 1999",
    nationality: "Korean",
    position: "RAPPER",
    position2: "Composer",
    position3: "Vocal",
    skzooName: "Dwaekki",
    description: "Changbin is the main rapper of Stray Kids. He is known for his confident and charismatic stage presence and fast rapping abilities. Don't let his muscles confuse you, for he's the member that is known for his aegyo (cuteness) and girl group dance appearances.  He is a member of 3RACHA and has over 120 songs registered with the Korean Music Copyright Association.",
    insta: "jutdwae",
    instaImg: "https://pbs.twimg.com/media/F_ye6lAXoAAyGtP.jpg",
    players: "https://youtu.be/FLoAVCCrp_E?si=hVLDhIo1NPviUTXR",
    playersImg: "https://i.ytimg.com/vi/yC0cevxwdSQ/maxresdefault.jpg",
    players2: "https://www.youtube.com/watch?v=_oCptmj2gIQ",
    playersImg2: "https://i.ytimg.com/vi/pZegtPYL6ys/maxresdefault.jpg",
    players3:"https://www.youtube.com/watch?v=In7JdJUMF_w",
    playersImg3: "https://i.ytimg.com/vi/eUEwXTY7_Do/maxresdefault.jpg",
    //"https://i.ytimg.com/vi/HHNPG_ppHdk/maxresdefault.jpg",
    skzoo: "https://i.pinimg.com/originals/e4/e7/54/e4e754950c0f89d39b53cc99f38354d4.jpg",
    backgroundImage: "https://wallpapercave.com/wp/wp11901653.jpg"
  };
  const hyunjin = {
    img: "/hyunjin.png",
    name: "Hyunjin",
    realName: "Hwang Hyunjin",
    birthday: "March 20, 2000",
    nationality: "Korean",
    position: "RAPPER",
    position2: "Dancer",
    position3: "Visual",
    skzooName: "Jiniret",
    description: "Hyunjin is a main dancer of Stray Kids. He's known for his passionate and artistic personality. With this charming looks and great sense of fashion, he became Versace's leading model in 2023. He loves to draw and paint in his free time. He is a member of DanceRACHA.",
    insta: "hynjinnnn",
    instaImg: "https://pbs.twimg.com/media/F2f8ZUGWIAEOg8S.jpg",
    players: "https://www.youtube.com/watch?v=2bBkSgQisbg&list=PLPb6jTe2XicQfnmT1duXDKCKHV3EdQmIl&index=3",
    playersImg: "https://i.ytimg.com/vi/9AO7JrFR1BQ/maxresdefault.jpg",
    players2: "https://www.youtube.com/watch?v=jzorNBLDIEI",
    playersImg2: "https://i.ytimg.com/vi/jzorNBLDIEI/maxresdefault.jpg",
    players3:"https://www.youtube.com/watch?v=Zb1sZ16uWBk",
    playersImg3: "https://i.ytimg.com/vi/Zb1sZ16uWBk/maxresdefault.jpg",
    skzoo: "https://i.pinimg.com/564x/b9/e3/18/b9e318a2d15f757ed83d210fe54132f0.jpg",
    backgroundImage: "https://altselection.com/wp-content/uploads/2024/03/JYP-annonce-des-mesures-pour-proteger-Hyunjin-de-Stray-Kids-758x506.webp"
  };
  const jisung = {
    img: "/han.png",
    name: "Han",
    realName: "Han Jisung",
    birthday: "September 14, 2000",
    nationality: "Korean",
    position: "RAPPER",
    position2: "Composer",
    position3: "Vocal",
    skzooName: "Han Quokka",
    description: "Han is a main rapper of Stray Kids, known for his rapping, songwriting, and producing skills. He is nicknamed the Ace/Lyrical Genius by members. Stays say that he often resembles a squirrel/quokka because he stuffs his cheeks while eating. He is a member of 3RACHA and the youngest member to be a part of the top ten ranking by the Korean Music Copyright Association.",
    insta: "_doolsetnet",
    instaImg: "https://pbs.twimg.com/media/GJem-EdXMAAICon.jpg",
    players: "https://youtu.be/SB6VJXA5cYw?si=JOPk8M_lMPBO185b",
    playersImg: "https://th.bing.com/th/id/OIP.x0-oLANJFhQOk2Mxie2SrAAAAA?rs=1&pid=ImgDetMain",
    players2: "https://www.youtube.com/watch?v=OjpWWnU8tb0",
    playersImg2: "https://i.ytimg.com/vi/EqxKnA3tEas/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLABgal2dvenEL3zDFmjTB7boahF8g",
    players3:"https://www.youtube.com/watch?v=meQvDHBSxbQ",
    playersImg3: "https://0.soompi.io/wp-content/uploads/2021/01/29073623/han.jpeg",
    skzoo: "https://i.pinimg.com/564x/44/67/64/4467647a62c3925b7bbeb953e6b208a3.jpg",
    backgroundImage: "https://preview.redd.it/han-jisung-season-greetings-photos-v0-8egowi71yj7c1.jpg?width=640&crop=smart&auto=webp&s=1c3e5f60bca5d2908b4118dda452503fa1c5f3ba"
    //  "https://6.soompi.io/wp-content/uploads/image/20240307230245_Han.jpg?s=900x600&e=t"
  };
  const felix = {
    img: "/felix.png",
    name: "Felix",
    realName: "Lee Felix (Yongbok)",
    birthday: "September 15, 2000",
    nationality: "Korean-Australian",
    position: "RAPPER",
    position2: "Dancer",
    position3: "Visual",
    skzooName: "Bokkari",
    description: "Lee Felix is a lead dancer and rapper for Stray Kids. He is know for his deep voice, baking skills, and his outgoing nature. Fans often call him Our Sunshine due to his vibrant personality and smile. He is a member of DanceRACHA.",
    insta: "yong.lixx",
    instaImg: "https://pbs.twimg.com/media/GI60bY4W4AAhnTw.jpg",
    players: "https://youtu.be/ZVHPTVzadCg?si=a_hZvR04NSTp9K3h",
    playersImg: "https://pbs.twimg.com/ext_tw_video_thumb/1605506223310131201/pu/img/ijKxZuB4y8lS8tg5.jpg",
    players2: "https://www.youtube.com/watch?v=KagzGPwDR9w",
    playersImg2: "https://i.ytimg.com/vi/iN9T8Apc1oQ/maxresdefault.jpg",
    players3:"https://www.youtube.com/watch?v=XJNP9l6k688",
    playersImg3: "https://i.pinimg.com/originals/0c/97/37/0c97375ceb7d6908b753ee2e14d4c611.jpg",
    skzoo: "https://th.bing.com/th/id/R.9d7a78fc2b95cd8dbddb63cfbc8c55bd?rik=aYehAN9th1dVaA&pid=ImgRaw&r=0",
    backgroundImage: "https://img.koreaboo.com/tr:n-lg-dt/2024/03/GH7u1mabcAAK4Jj.jpg"
  };
  const seungmin = {
    img: "/seungmin.png",
    name: "Seungmin",
    realName: "Kim Seungmin",
    birthday: "September 22, 2000",
    nationality: "Korean",
    position: "Vocal",
    position2: "Rapper",
    position3: "Visual",
    skzooName: "Puppy M",
    description: "Seungmin is the main vocalist on Stray Kids. Known for his amazing voice and ruthless roasting skills of JYP. He is fluent in English and has hosted multiple tv and radio shows. He is a member of VocalRACHA.",
    insta: "miniverse.__",
    instaImg: "https://pbs.twimg.com/media/F_8b6OLXcAApPyt.jpg",
    players: "https://youtu.be/9ZXTuvbX8DM?si=gLyBmh50x_hWpwAV",
    playersImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbpTGZYsnTxP0QLoFjA31AM5AOxD7o2N9sNg&s",
    players2: "https://www.youtube.com/watch?v=5FpwF-v8_q0",
    playersImg2: "https://i.ytimg.com/vi/5FpwF-v8_q0/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCL4tkZiuLtXuuOLlGQEdRAT5XOnQ",
    players3:"https://www.youtube.com/watch?v=aKn7DbCnn8k",
    playersImg3: "https://i.ytimg.com/vi/NGmE9LVnfYI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBPoXH6892xycLid7ICYZ5v7SM7cA",
    skzoo: "https://i.pinimg.com/originals/b1/f3/19/b1f319d2329ff714eede03fcf03ee6d3.jpg",
    backgroundImage: "https://i.pinimg.com/736x/45/1e/af/451eaf26e861ff20a8211afc613c1ba5.jpg"
    //"https://kpopping.com/documents/ea/4/230424-SEUNGMIN-SKZ-World-Tour-MANIAC-Encore-at-LA-Behind-The-Scenes-documents-1.jpeg?v=4bf12"
    //"https://6.soompi.io/wp-content/uploads/image/5f453b769bf74e07a401c25b9aeed672.jpeg?s=900x600&e=t"
  };
  const maknae = {
    img: "/maknae.png",
    name: "I.N.",
    realName:"Yang Jeongin",
    birthday: "February 8, 2001",
    nationality: "Korean",
    position: "Vocal",
    position2: "Visual",
    position3: "Maknae",
    skzooName: "FoxI.ny",
    description: "I.N is the maknae (youngest member) of Stray Kids. Known for his vocal abilities and love for trot music, which is a traditional Korean genre of music known for its distinctive rhythm and melody. He is known for his cute and charming personality. He has a strong passion for fashion. He is a member of VocalRACHA.",
    insta: "i.2.n.8",
    instaImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqHuESczMXMzZNUqneaI8vsq5OqMfLSipUUA&s",
    players: "https://youtu.be/SjKARrJwqzE?si=1aOUiik49nwK3hLV",
    playersImg: "https://44.media.tumblr.com/757dfe7187f9e0835d01ea727c7bd2e4/ff9f4e3f2febdfa0-7f/s540x810_f1/d17b40b70cc1854e6bc2844928d1e0647422ffd6.gif",
    players2: "https://www.youtube.com/watch?v=RWLkQ_rxLSs",
    playersImg2: "https://i.ytimg.com/vi/fubjSxKj0DQ/mqdefault.jpg",
    players3:"https://www.youtube.com/watch?v=cLj1lmQDGxQ",
    playersImg3: "https://i.ytimg.com/vi/0-vtpQi0tgE/maxresdefault.jpg",
    skzoo: "https://i.pinimg.com/736x/77/5f/a2/775fa2f349f67fe464327a8d59a787a4.jpg",
    backgroundImage: "https://64.media.tumblr.com/ed0de0386f34586defd59eeec203b9bd/3f0fc0d408af05fc-e1/s1280x1920/2f62700a0479572c355ecaccf7b210e4d4eb3ae7.jpg"
  };

  const [currentMember, setCurrentMember] = useState("bangchan");
  const [bangchanActive, setBangchanActive] = useState(true);
  const [leeknowActive, setLeeknowActive] = useState(false);
  const [changbinActive, setChangbinActive] = useState(false);
  const [hyunjinActive, setHyunjinActive] = useState(false);
  const [jisungActive, setJisungActive] = useState(false);
  const [felixActive, setFelixActive] = useState(false);
  const [seungminActive, setSeungminActive] = useState(false);
  const [maknaeActive, setMaknaeActive] = useState(false);

  function changeMember(event, mem){
    event.preventDefault();
    setCurrentMember(mem);
    mem === 'bangchan'? setBangchanActive(true):setBangchanActive(false);
    mem === 'leeknow' ? setLeeknowActive(true): setLeeknowActive(false);
    mem === 'changbin'? setChangbinActive(true): setChangbinActive(false);
    mem === 'hyunjin'? setHyunjinActive(true): setHyunjinActive(false);
    mem === 'jisung'? setJisungActive(true):setJisungActive(false);
    mem === 'felix'? setFelixActive(true):setFelixActive(false);
    mem === 'seungmin'? setSeungminActive(true): setSeungminActive(false);
    mem === 'maknae'? setMaknaeActive(true): setMaknaeActive(false);
  }


  return (
    <div className="App">
      <header className="App-header">
        <nav class="navbar">
            <ul class="nav-links">
              <div className="navbar-logo">
                <img src="https://1000logos.net/wp-content/uploads/2020/02/Stray-Kids-Logo.png" alt="skz-logo" height="95px" width="250px"/>
              </div>
                <li><a href="/">Home</a></li>
                <li><a href="#members">Members</a></li>
                <li><a href="#news">News</a></li>
                <li class="button"><a href="#">Login</a></li>
            </ul>
        </nav>
        <div className="landing">
          <div className="member-container2">
            {/* <div className="skz-logo">
              <img src="https://logos-world.net/wp-content/uploads/2020/12/Stray-Kids-Logo.png" alt="skz logo"></img>
            </div> */}
            <div className="current">
              {currentMember==='bangchan' &&<MemberCard {...bangchan} />}
              {currentMember==='leeknow' &&<MemberCard {...leeknow} />}
              {currentMember==='changbin' &&<MemberCard {...changbin} />}
              {currentMember==='hyunjin' &&<MemberCard {...hyunjin} />}
              {currentMember==='jisung' &&<MemberCard {...jisung} />}
              {currentMember==='felix' &&<MemberCard {...felix} />}
              {currentMember==='seungmin' &&<MemberCard {...seungmin} />}
              {currentMember==='maknae' &&<MemberCard {...maknae} />}
            </div>
          </div>
          <div className="menu">
            <div className={bangchanActive? "menu-member": "menu-member-inactive"}>
              <img src="https://i.pinimg.com/originals/b7/4f/e6/b74fe630995665067f8088b2472ce245.png" alt="bangchan" onClick={(event)=>changeMember(event, "bangchan")} />
            </div>
            <div className={leeknowActive? "menu-member": "menu-member-inactive"}>
              <img src="https://i.pinimg.com/736x/ab/7e/1b/ab7e1bf340f90946c487c2017003f405.jpg" alt="leeknow" onClick={(event)=>changeMember(event, "leeknow")} />
            </div>
            <div className={changbinActive? "menu-member": "menu-member-inactive"}>
              <img src="https://64.media.tumblr.com/7cebe984774ef2e0a8b0e4b3ce4d3c11/c1bc2df6f5b0ef05-2a/s250x400/ada943afc358644eabb3ecad7f3af2b768083ec5.jpg" alt="changbin" onClick={(event)=>changeMember(event,"changbin")} />
            </div>
            <div className={hyunjinActive? "menu-member": "menu-member-inactive"}>
              <img src="https://i.pinimg.com/736x/f0/9c/24/f09c24739acafbd3ae5f04c4fb80a50e.jpg" alt="hyunjin"  onClick={(event)=>changeMember(event, "hyunjin")}/>
            </div>
            <div className={jisungActive? "menu-member": "menu-member-inactive"}>
              <img src="https://i.pinimg.com/736x/d8/57/10/d8571083fc40d489aa8db235601d9b9d.jpg" alt="jisung" onClick={(event)=>changeMember(event, "jisung")}/>
            </div>
            <div className={felixActive? "menu-member": "menu-member-inactive"}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP7evvY5LjPfJG0jjUTkxPRsTgwVxnmvY6B9gNgHpibb-AbspXFJLgMdQjUZyxcTJj2RY&usqp=CAU" alt="felix" onClick={(event)=>changeMember(event, "felix")} />
            </div>
            <div className={seungminActive? "menu-member": "menu-member-inactive"}>
              <img src="https://64.media.tumblr.com/179721f5bfc0971564bfe9988cd8de46/82cfaa4514e90fc6-19/s640x960/e9389fee5ac8b595bb44fad929bf4cbdcaf32113.jpg" alt="seungmin" onClick={(event)=>changeMember(event, "seungmin")} />
            </div>
            <div className={maknaeActive? "menu-member": "menu-member-inactive"}>
              <img src="https://64.media.tumblr.com/08d49379a9fc219959949671687617a8/c1a44f1b4aa52818-86/s640x960/ba42a1547b648a077d934799a56265bf362429a7.jpg" alt="I.N." onClick={(event)=>changeMember(event, "maknae")} />
            </div>
          </div>
        </div>
        <div className="blog">
          <div className="skz-subtitle">
            <h1 id="news">Stray Kids News</h1>
          </div>
          <div className="blog-container">
            <BlogEntry imgsrc={"https://www.rollingstone.com/wp-content/uploads/2024/07/stray-kids.jpg?w=1227&h=920&crop=1"} title={"Deadpool and Wolverine- newest Stray Kids Members?"} date={"August 19th, 2024"} prev={"The friendship of Ryan Reynolds and Bangchan leads to a Deadpool and Wolverine cameo in the Chk Chk Boom MV."} article={"https://www.rollingstone.com/music/music-news/ryan-reynolds-hugh-jackman-stray-kids-chk-chk-boom-video-1235063806/"} sub={"Hannah Kuklinski"} />
            <BlogEntry imgsrc={"https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1oPqIV.img?w=768&h=575&m=6&x=225&y=76&s=821&d=373"} title={"Stray Kids Win ShowChampion Award with Chk Chk Boom"} date={"August 16th, 2024"} prev={"Stray Kids received Show Champion's Song Award for their title track Chk Chk Boom. It is their 3rd straight win on Show Champion."} article={"https://www.msn.com/en-us/money/companies/stray-kids-wins-no1-position-on-show-champion-with-ates-title-track-chk-chk-boom/ar-AA1oPt0Q?ocid=BingNewsSerp"} sub={"Hannah Kuklinski"} />
            <BlogEntry imgsrc={"https://pbs.twimg.com/media/GR-Fa4IbkAABAu5?format=jpg&name=900x900"} title={"Stray Kids announce dominATE World Tour"} date={"July 9th, 2024"} prev={"Shortly after the release of ATE album, Stray Kids announce a World Tour from 2024-2025."} article={"https://www.nme.com/news/music/stray-kids-2024-2025-dominate-world-tour-tickets-dates-more-3773044"} sub={"Hannah Kuklinski"} />
            <BlogEntry imgsrc={"https://www.billboard.com/wp-content/uploads/2024/07/Stray-Kids-ATE-Press-cr-JYP-Entertainment-01-2024-billboard-1548.jpg?w=942&h=623&crop=1"} title={"Stray Kids hit #1 on Billboard Music Chart"} date={"June 13th, 2024"} prev={"The 5-STAR album received max ratings from listeners, who ended up pushing the album to the top spot of the Billboard 200 shortly after its release."} article={"https://www.billboard.com/music/music-news/stray-kids-thank-fans-5-star-number-1-billboard-200-1235352544/"} sub={"Hannah Kuklinski"} />
            <BlogEntry imgsrc={"https://dispatch.cdnser.be/cms-content/uploads/2024/05/10/7d395b57-2fde-42e3-b72f-192f0a0d6013.png"} title={"Stray Kids Collab with Charlie Puth"} date={"May 14th, 2024"} prev={"Lastest collab spoiled by Tommy Hilfiger - Lose my Breath featuring Charlie Puth"} article={"https://www.billboard.com/music/pop/stray-kids-interview-lose-my-breath-2024-tour-album-1235683299/"} sub={"Hannah Kuklinski"} />
            <BlogEntry imgsrc={"https://www.allkpop.com/upload/2024/04/content/110440/1712824803-stray-kids-asea-2024.jpg"} title={"Stray Kids Win Daesang"} date={"April 11, 2024"} prev={"At the Asian Star Entertainment Awards, Stray Kids took home the Album of the Year award and Best Group award."} article={"https://www.allkpop.com/article/2024/04/stray-kids-triumphs-and-bags-the-daesang-award-at-2024-asea-asia-star-entertainer-awards"} sub={"Hannah Kuklinski"} />
            <BlogEntry imgsrc={"https://staticg.sportskeeda.com/editor/2024/03/6489e-17113942963358-1920.jpg"} title={"Stray Kids celebrate 6th birthday"} date = {"March 25, 2024"} prev={"In a heartfelt tribute to Stays, the group released messages to fans on Instagram and released new content on YouTube."} article ={"https://www.sportskeeda.com/pop-culture/news-stray-kids-celebrate-6th-year-debut-anniversary-special-instagram-posts-message-live-session"} sub={"Hannah Kuklinski"} />
            <BlogEntry imgsrc={"https://staticg.sportskeeda.com/editor/2023/09/6ed23-16945827104068-1920.jpg"} title={"Stray Kids make history at VMAs"} date={"September 17th, 2023"} prev={"For many, Stray Kids winning an award at the VMAs was not the main event. Many were eager to see how other celebrities, particularly Taylor Swift, reacted to their killer performance."} article={"https://www.forbes.com/sites/hughmcintyre/2023/09/13/stray-kids-and-txt-made-the-2023-mtv-vmas-historic-for-k-pop-stars/"} sub={"Hannah Kuklinski"} />
            <BlogEntry imgsrc={"https://www.allkpop.com/upload/2022/10/content/011458/1664650686-image.png"} title={"Why BangChan Stopped Going Live: Will He Return for Stay's Birthday?"} date={"July 24th, 2023"} prev={"It's been approximately 2 months since Stays have last seen BangChan in Channie's Room."} article={"https://www.nme.com/news/music/stray-kids-bang-chan-isnt-allowed-continue-livestream-series-chans-room-3490087"} sub={"Hannah Kuklinski"} />
            <BlogEntry imgsrc={"https://images.lifestyleasia.com/wp-content/uploads/sites/2/2023/07/20140353/Untitled-design-2023-07-20T113238.473-1600x900.jpg"} title={"Hyunjin is Versace's new Global Ambassador!"} date={"July 24th, 2023"} prev={"This 4th generation kpop group has made a big breakthrough in regards to recent sponsorship brands and ambassador titles."} article={"https://www.billboard.com/music/music-news/stray-kids-hyunjin-versace-global-brand-ambassador-1235375281/"} sub={"Hannah Kuklinski"} />
            <BlogEntry imgsrc={"https://lh3.googleusercontent.com/r-bFFeaoc53EF6IkdOhLEV7AewAB3-YMOhNis4Kjbk_4plD24kn0oa-aGSaNG-2ADcOO6juR6m4FTFpcXMWW2con4bMKBex89Tj_Mo5P0HdWZA=w1200-h630-rj-pp-e365"} title={"StrayKids headline Lolapalooza in Paris, France"} date={"July 24th, 2023"} prev={"The first-time appearance of 5STAR songs in a live performance! SKZ tore the stage up (and their pants)."} article={"https://www.soompi.com/article/1564219wpp/stray-kids-to-headline-lollapalooza-paris"} sub={"Hannah Kuklinski"} />
          </div>
        </div>

      </header>
    </div>
  );
}

export default App;
