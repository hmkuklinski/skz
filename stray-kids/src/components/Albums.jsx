import Layout from "./Layout";
import Album from "../Album";
import {useState} from "react";
import AlbumPreview from "../AlbumPreview";
import AlbumInfo from "../AlbumInfo";
import Lyrics from "../Lyrics";

export default function Albums(){
    let albumsList = [
        {name: "ATE", imgSrc: "https://i.scdn.co/image/ab67616d0000b27351700837cdbc6adddb88560a", year: "2024",
            songs: [
                {title: "MOUNTAINS", lyrics: "Woah woah\nWoah woah\nHead above the clouds, stand tall for the hell of it\nTower over crowds, don't pause 'cause I'm lovin' it\nHeavy and I'm proud, backbone never suffering\n더 높이 길게 뻗어 가는 mountains\n끄떡없지 거친 바람의 pounding\n정상 위에 올라 더 크게 shouting\n내가 뱉은 말은 지켜 치켜세울 필요 없지\n흘린 땀은 결국 돌려받지 메아리 (메아리)\n꿋꿋이 버텨 내 굳건해진 내 자리 (내 자리)\n강산풍월주인 누군가에게는 fantasy\nFantasy fantastic 4계절의 때깔이\n기세등등 꺾이지 않는 내 pride now\nI rule this place nobody can handle me, hands off\n높아지는 average 걸음은 stomp stomp\n자세는 낮고 힘차게 I'mma go up\nMountains mountains I woke up on the mountains\nAin't nobody stopping me I'm walking like a titan\nMountains mountains I step up on the mountains\nAyo (ayo)\nI dominate the ground, the echoing surrounds\nJust feel the air vibrating oh so loud (so loud)\nMountains mountains I step up on the mountains\nAyo (ayo)\n힐끗힐끗 훔쳐보던 자리에 앉아 빗금\n긋고 새로 쓰는 bucket list, no matter 다시금\n의지 불태워, 투지 굳세어\n내 바람이 이끄는 대로 I follow 저 깃발을 채고\n눈 하나 깜빡 안 해 I'm keeping it real (oh)\nCall me a changer, I'll replace this game zone\n우리가 곧 우리의 꿈 Call us 'Pantheon'\n저 산꼭대기 위로 하늘 뚫을 기세로\n그동안의 악몽과는 전부 다 반대로\n이 모든 시련 biscuit 운명을 틀어 다 twist it\n위기를 기회로 fill it up 산중호걸 기립\n내 피리에 따라 break it 이 길에 수많은 미끼\n다 뛰어넘어 가고 직진 I tear it up 전부 비키지\nSwish\n기세등등 꺾이지 않는 내 pride now\nI rule this place nobody can handle me, hands off\n높아지는 average 걸음은 stomp stomp\n자세는 낮고 힘차게 I'mma go up\nMountains mountains I woke up on the mountains\nAin't nobody stopping me I'm walking like a titan\nMountains mountains I step up on the mountains\nAyo (ayo)\nI dominate the ground, the echoing surrounds\nJust feel the air vibrating oh so loud (so loud)\nMountains mountains I step up on the mountains\nAyo (ayo)\nHead above the clouds, stand tall for the hell of it\nTower over crowds, don't pause 'cause I'm lovin' it\nHeavy and I'm proud, backbone never suffering\nAyo (ayo)\nHead above the clouds, stand tall for the hell of it\nTower over crowds, don't pause 'cause I'm lovin' it\nHeavy and I'm proud, backbone never suffering\nAyo (ayo)\nIf you're feelin' high all hands go up\nThis is cloud nine we're at the top\nIf you're feelin' high all hands go up\nAyo (ayo)\nIf you're feelin' high all hands go up\nThis is cloud nine we're at the top\nIf you're feelin' high all hands go up\n", duration: "3:07"},
                {title: "Chk Chk Boom", lyrics: "Boom Boom Chk Chk Boom\n정중앙 흑색의 저 점도\n맞춰 내 재빠른 계획도\n허점 없이 완벽한 판도\n위에서 춤춰 내 plan대로 keep going\nSick of this life, it's regular\n승리를 너무 과식했지 배불러\n산책도 할 겸 허리띠 매 둘러\n우린 우주로 나머지 전부 kneel, I'm strong\nYeah yeah yeah yeah\n안 되는 것 없이 I do it\nJust pull out my trigger I got that\nI'mma pop pop pop take a shot yeah\nShoot down my goals one by one, I snipe them\nFilling up my truck yeah you want that ride\n(Boom)\nHit you like a truck I'mma make you fly\nBoom\nVamos, I know that you want it\nBoom\nLobos, we cannot stop hunting\nBoom\nRatatata I'mma make it\nBoom Boom Chk Chk Boom\nBoom\nVamos, I know that you want it\nBoom\nChaos, we so catastrophic\nBoom\nRatatata I'mma make it\nBoom Boom Chk Chk Boom\n클리셰 파괴 자체가 더 클리셰\n나에 대한 견해 전부 유지해\n바뀐 건 없어 I'm not a changed man\n내 행보는 여전히 그다음 level에만 대입해\n목표치에 한 발씩\n한발치 더 다다랐지\nI'm the owner of my goal 주인 잘 만난 복\nI make it right 영점 조준 clear\n정적을 깨 버리지 나의 trigger, fire (fire)\n저 끝까지 과녁을 더 위로 올려\nMy amigo\nFilling up my truck yeah you want that ride\n(Boom)\nHit you like a truck I'mma make you fly\nBoom\nVamos, I know that you want it\nBoom\nLobos, we cannot stop hunting\nBoom\nRatatata I'mma make it\nBoom Boom Chk Chk Boom\nBoom\nVamos, I know that you want it\nBoom\nChaos, we so catastrophic\nBoom\nRatatata I'mma make it\nBoom Boom Chk Chk Boom\n깊이 더 파고들어\nMy bullet goes 탕탕탕\n이건 La Vida Loca\n이건, good shot shot shot\n깊이 더 파고들어\nMy bullet goes 탕탕탕\n이건 La Vida Loca\nBoom Boom Chk Chk Boom", duration: "2:28"},
                {title: "JJAM", lyrics: "재미 좀 볼 때 발라 버려, honey jam, ayy\nFinger lickin', yeah, 실컷 찍어라 직캠\n다채로움을 모아 새로 조화롭게\n자, 찬란한 목소리, 현란한 춤사위, 모여 같이, jam, jam\n오늘의 topic, 걍 잼있게 놀기\n이 음악도 솔깃해, you can't stop it\n굵직한 bass line에 맞춰 body shake\n그래, okay, 컷 바라던 대로 take\nCome and join the crew, get closer now\nIt's time to make a move, get lit, so loud\nWe know we'll never lose, get trophies now\n숨겨둔 흥을 터트려 시선들은 멈춰, yeah\nPeanut butter jelly time\nWe stick together day and night, yeah\nFill up our jars every time\nJust spread it out\n찍어 발라 버려, jam\nSticky, sticky, sticky jam, yeah, our jam got them\nI got no 잼? You got no 잼? We gotta jam (촵촵)\nLook at our jam, come on and 도리도리, 잼잼\nStick it up now, put your, put your hands up (ooh)\nIt's our playground, 북적북적해져 (ah)\n재미재미져, 재미재미, catch up\nLook at our jam, come on and 도리도리, 잼잼 (sing)\nCome on, 억눌러 봤자 불필요\n버려 고민들 털고 움직여\n꽉 막힌 road, just take it slow\n여긴 언제나 open, our home\n붉은 headlights 속에서\n불러 힘껏, sing this song\nNo one can escape this feeling\n빠질 수 없어 (dance)\nI gotta move, look at my groove\nJam, jam, jam, jam\nSay whoa (ha), say ooh\nI know, you know, Lee Know (rap)\nKick snare, hi-hat, drum and bass\n환상적 케미 peanut butter jelly\n개나, 소나, 쟤나, 걔나, 얘나 다\n불러와, 재미 보고, 흥미를, take it\n움츠러들 필요 따윈 없지\n필요한 건 오로지 패기와 객기\n재빠른 재치 catch\n노잼 allergy 기침 재채기 에취\nSticking together day and night, yeah\nFilling up jars, oh, every time\nSo just spread it out (right now)\n찍어 발라 버려, jam\nSticky, sticky, sticky jam, yeah, our jam got them\nI got no 잼? You got no 잼? We gotta jam (촵촵)\nLook at our jam, come on and 도리도리, 잼잼\nEverybody, every, everybody-body, jam\n(Jam)\n(Jam, jam) stick it up now, put your, put your hands up (yeah, ooh)\nIt's our playground, 북적북적해져 (ah)\n재미재미져, 재미재미, catch up\nLook at our jam, come on and 도리도리, 잼잼 (jam, jam)", duration: "3:05"},
                {title: "I Like It", lyrics: "'Cops & Robbers' chase each other\nFull of energy\nPushing me further, pulling me closer\nSome sorta chemistry\nI think I'm addicted to the title 'You & Me'\nDon't ask, 'What are we?'\nOoh ooh I like it baby\n이 관계를 정의하지 마\n사랑은 모르겠고 좋아하는 사이\n간단히 점선과 실선의 차이\n알잖아 지금 내가 말하는 vibe (hey)\n넘고 싶음 넘어 근데 난 안 넘어\n지금이 더 좋을 거니까\n서로 부담은 덜고 지금처럼 걸어\n상처도 덜할 테니까\nBefore we love, we love this feeling babe\n'Cause it's enough, enough, keep it this way\nBefore we love, we love this feeling babe\nYeah I love that I like you but I don't wanna love\nOoh I like it ooh ooh I like it like it\nOoh I like it ooh ooh I like it like it\nOoh I like it ooh ooh I like it like it\nLove that I like you yeah yeah yeah\n진전 없이 just stay tuned\n예고편이 제일 재미있거든\n어떤 식의 역할극이든\n잠깐 발 담고 빼지 no reason\n진심은 no thanks, so keep it\n진실은 언제나 too deep해\n한 발 오면 두 발 도망가지\n작전 없는 사이 I want it\nStill got so much to find out\nWe playing 'Hide & Seek'\nDon't wanna end this game\nHope it goes for eternity\nLet's not go official, we can keep the 'You & Me'\nDon't ask, 'What are we?'\nOoh ooh I like it baby\nOh 서로 가까워졌다가도\nOh 먼발치 물러서는 우리 섣불리 착각 않길\nYeah I love that I like you but I don't wanna love\nBefore we love, we love this feeling babe\n'Cause it's enough, enough, keep it this way\nBefore we love, we love this feeling babe\nYeah I love that I like you but I don't wanna love\nOoh I like it ooh ooh I like it like it\nOoh I like it ooh ooh I like it like it\nOoh I like it ooh ooh I like it like it\nLove that I like you yeah yeah yeah\nI like it ooh ooh I like it like it\nOoh I like it ooh ooh I like it like it\nOoh I like it ooh ooh I like it like it\nOoh I like it ooh ooh I like it like it\n", duration: "2:28"},
                {title: "Runners", lyrics: "Yeah yeah yeah \nOh woah\nYeah yeah yeah\nI'm looking at the city down below me\nHeaven knows I made my own surroundings\nI'm just getting started yeah I know\nI'm on my way 'cause this is all about me, 'bout me\nCybernetic system, yeah I felt like a machine\nDoing this, doing that\nTaking orders like I'm Winter Soldier (bah bah)\nCracked the shell then I fled\nI'm running on the edge screaming\nWoah woah\nDeeper and deeper, I'm sinking, I'm drowning\nOne little trip and I know that I'll fall in\nDeeper and deeper, I'm thinking, I'm crying\nToo many thoughts in my head, gotta let it go\nI'm chasing that light tonight\nAnother step on my tightrope\nI know that I'll be alright\nI won't stop running, I know that I'm becoming\nG.O.A.T I'm stunning, let me show the world\nI'm feeling edgy, watch me take it all\nCome and try to push me off\nWe'll all be running, don't care about the warnings\nG.O.A.T we're stunning, let us show the world\nWe're feeling edgy, watch us take it all\nOn the edge we'll never fall 'cause we're the Runners\nHold up, hold my hand 'cause we're taking off\nHorizon at the end, yeah we're gonna touch\n'Cause wherever, whoever, whenever, forever\nWe go zoom zoom zoom zoom\nThey say I took an L for challenging myself\nBut I don't give a hell, I know that I can tell that they are jelly jelly\nWobbly I'm on a cliff singing, dancing, grinning\n'Cause already I know I can hear the W's (W's)\nDeeper and deeper, I'm sinking, I'm drowning\nOne little trip and I know that I'll fall in\nDeeper and deeper, I'm thinking, I'm crying\nToo many thoughts in my head, gotta let it go\nI'm chasing that light tonight\nAnother step on my tightrope\nI know that I'll be alright\nI won't stop running, I know that I'm becoming\nG.O.A.T I'm stunning, let me show the world\nI'm feeling edgy, watch me take it all\nCome and try to push me off\nWe'll all be running, don't care about the warnings\nG.O.A.T we're stunning, let us show the world\nWe're feeling edgy, watch us take it all\nOn the edge we'll never fall 'cause we're the Runners\nWe're running till the end all day and night, we fly\nWe're running till the end all day and night, we fly\nWe'll all be running, don't care about the warnings\nG.O.A.T we're stunning, let us show the world\nWe're feeling edgy, watch us take it all\nOn the edge we'll never fall 'cause we're the Runners\n(On the edge we'll never fall 'cause we're the Runners)\nOn the edge we'll never fall 'cause we're the Runners\n", duration: "3:16"},
                {title: "twilight", lyrics: "내 하루는 누구보다 짧은 것 같아\n네 생각을 하다 보면 또다시 밤\n우연히 남겨 놓은 발자국을 따라\n가다 보면 너가 있을 것 같아\n그때에 너의 따듯했던 말들과\n나를 설레게 했던 눈빛들 다\n식었다 너와 내 온도는 뜨겁게 타올라 재가 돼 버렸나\n흔적도 없이 검은 재만 남아\n우리만 아는 그런 슬픈 기억이 됐다\n지웠나도 생각했지만 네 생각이 나면 어김없이 울다\n지쳐 잠이 들고 나서 일어나 보면\n하늘은 저물고 내 방은 또다시 밤\n♪\n너와의 기억이 깃든\n사진 속에 그대는 짙은\n미소를 띤 채 날 바라보고 난\n그때의 날 보며 질투\n이젠 우리 이름에 빗금\n영원이라 말하던 믿음\n의 균열이 어긋나 툭 치면\n부서질 위험한 감정이 들어\n내 눈물은 늘었고 잠은 더 줄어\n서투른 감정이 키운 실수\n사랑한다는 맘에 찌질한 원망이 뒤끝\n예쁜 happy ending은 없을까\n이 혼잣말은 끝없이 허공을 맴돌아\n식었다 너와 내 온도는 뜨겁게 타올라 재가 돼 버렸나\n흔적도 없이 검은 재만 남아\n우리만 아는 그런 슬픈 기억이 됐다\n지웠나도 생각했지만 네 생각이 나면 어김없이 울다\n지쳐 잠이 들고 나서 일어나 보면\n하늘은 저물고 내 방엔 또다시 밤\n저 하늘에 뜬 별보다\n널 찾기 더 힘들더라\n구름에 가려진 걸까 oh 난\n보이지가 않아 꿈속에서라도\n너의 흔적이 내게 보일까\n싶지만 이미 떠난 너의 발자국은 다\n식었다 너와 내 온도는 뜨겁게 타올라 재가 돼 버렸나\n흔적도 없이 검은 재만 남아\n우리만 아는 그런 슬픈 기억이 됐다\n지웠나도 생각했지만 네 생각이 나면 어김없이 울다\n지쳐 잠이 들고 나서 일어나 보면\n아름다운 공허함이 남겨진 내 방엔\n또다시 밤\n", duration: "3:12"},
                {title: "Stray Kids", lyrics: "We're gonna go our way\nTo places still unknown\nWe're gonna show the way\nWe made it on our own\nWe do what we wanna do\nThe message through our music\nIt ain't even done, it's true\nYeah our rhythm never stops\n어린 나의 분화구에 터져 나왔던 갈등\n눈이 감길 때쯤 무너져 내렸던 노력들\nEvery part of me 해내야만 했던 그날들의 힘듦\n속에서 버텼네 이젠 자랑스러운 그 이름 'cause\nStray Kids still gonna rock\nOn the Hellevator yeah we head to the top\n(Stray Kids)\nStray Kids run 'til we're done\nDo whatever we want yeah we don't give a what\n(Stray Kids)\nKnow that this is who we are\nThere ain't no last STEP OUT oh we'll never stop\nStray Kids still gonna rock\nOn the Hellevator yeah we head to the top\nGo on and on\nWoah Woah\n♪\nWoah Woah\n♪\n돈과 명예 중 뭘 더 원해\n솔직히 더 많은 걸 바라고 달렸지 욕심 끝에 남은 건 my team\n그 무엇과도 바꿀 수 없는 가치 another me\n어두운 터널을 걸으며 그렸지 우리의 청사진\n청춘을 팔았다 생각 안 해 살 수 없는 꿈에 산 거지\nWe still stray, we always stay on the Lonely St.\n걸어온 이 길을 We don't leave\n영원은 없대도 I believe\nThe time we spent will be remembered forever ever\nOh I won't let me fall down\nSo proud of myself, never doubt\nWho we are\n언제까지나 믿어 날\nStray Kids still gonna rock\nOn the Hellevator yeah we head to the top\n(Stray Kids)\nStray Kids run 'til we're done\nDo whatever we want yeah we don't give a what\n(Stray Kids)\nKnow that this is who we are\nThere ain't no last STEP OUT oh we'll never stop\nStray Kids still gonna rock\nOn the Hellevator yeah we head to the top\nGo on and on\nWoah Woah\nWoah Woah\nStray Kids still gonna rock\nOn the Hellevator yeah we head to the top\n(Stray Kids)\nStray Kids run 'til we're done\nDo whatever we want yeah we don't give a what\n(Stray Kids)\nKnow that this is who we are\nThere ain't no last STEP OUT oh we'll never stop\nStray Kids still gonna rock\nOn the Hellevator yeah we head to the top\nGo on and on", duration: "3:08"},
                {title: "Chk Chk Boom (Fesitval Ver.)", lyrics: "Boom Boom Chk Chk Boom\n정중앙 흑색의 저 점도\n맞춰 내 재빠른 계획도\n허점 없이 완벽한 판도\n위에서 춤춰 내 plan대로 keep going\nSick of this life, it's regular\n승리를 너무 과식했지 배불러\n산책도 할 겸 허리띠 매 둘러\n우린 우주로 나머지 전부 kneel, I'm strong\nYeah yeah yeah yeah\n안 되는 것 없이 I do it\nJust pull out my trigger I got that\nI'mma pop pop pop take a shot yeah\nShoot down my goals one by one, I snipe them\nFilling up my truck yeah you want that ride\n(Boom)\nHit you like a truck I'mma make you fly\nBoom\nVamos, I know that you want it\nBoom\nLobos, we cannot stop hunting\nBoom\nRatatata I'mma make it\nBoom Boom Chk Chk Boom\nBoom\nVamos, I know that you want it\nBoom\nChaos, we so catastrophic\nBoom\nRatatata I'mma make it\nBoom Boom Chk Chk Boom\n클리셰 파괴 자체가 더 클리셰\n나에 대한 견해 전부 유지해\n바뀐 건 없어 I'm not a changed man\n내 행보는 여전히 그다음 level에만 대입해\n목표치에 한 발씩\n한발치 더 다다랐지\nI'm the owner of my goal 주인 잘 만난 복\nI make it right 영점 조준 clear\n정적을 깨 버리지 나의 trigger, fire (fire)\n저 끝까지 과녁을 더 위로 올려\nMy amigo\nFilling up my truck yeah you want that ride\n(Boom)\nHit you like a truck I'mma make you fly\nBoom\nVamos, I know that you want it\nBoom\nLobos, we cannot stop hunting\nBoom\nRatatata I'mma make it\nBoom Boom Chk Chk Boom\nBoom\nVamos, I know that you want it\nBoom\nChaos, we so catastrophic\nBoom\nRatatata I'mma make it\nBoom Boom Chk Chk Boom\n깊이 더 파고들어\nMy bullet goes 탕탕탕\n이건 La Vida Loca\n이건, good shot shot shot\n깊이 더 파고들어\nMy bullet goes 탕탕탕\n이건 La Vida Loca\nBoom Boom Chk Chk Boom", duration: ""},
            ],
            id: "07192024", color: "#3C3D37"
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
            id: "11102023",  color: "#E90074"
        },
        {name: "5-STAR", imgSrc: "https://upload.wikimedia.org/wikipedia/en/5/52/Stray_Kids_-_5-Star.png", year: "2023",
            songs: [
                {title: "Hall Of Fame", lyrics: "I write my name into the stars right now\n온 갤러리에 날 남겨\n날 중심으로 돌아가 sunlight\nOh Galileo, 다시 재발견\nYeah I'm the spotlight\nCry, 낮과 밤 돼도 fly\n어딜 가도 받아 환대 감당\n안되진 않아 떳떳한 내 발자국은 박제되고 다음\n선망했던 그 자리에 난 올라\n입이 열 개라도 설명하기 너무 바빠\n위대한 이 역사\n유성펜으로 써 내려가 ey\n전 세계로 전파\n시차를 무시하는 prime time ey\n머리 위에 떠오르는 아이디어는 Thomas Edison의 전구\n내 pace의 끝 가늠할 때쯤 이미 주자들의 선두\nPump pump\n찍어내지 위인전\nI'm gonna stomp stomp\n내 발자국 Armstrong\n(I'm strong)\n정점을 찍는 업적 (whoo)\n입이 떡 벌어지게 만드는 광경 legendary\nHear the people call my name\nHere I'm on the Hall of Fame\nUnveil the rumbling\nTrails of 'hustling'\n찍어 위인전\nShaking the industry\nQuaking reality\nMaking it iconic\nI stack it up now (now)\n더 쌓아 올려 빼곡한 내 일기장과 (now)\n기록들은 making new history now\n빛이 나는 이 자리 발\n딛고 고개 빳빳이\n들어 이젠 nah nah\nCall me Shakespeare\nI'm filling out my papers\n즐겨 고비와의 battle\n이 게임판의 승부를 뒤집을 Faker\nEinstein도 수치화 못하는 패턴\n다음 단계는 훨씬 높지 지금 수준의 거듭제곱\nImmortal like Hawking\nIn black holes I'm walking\nMy scribbles and doodles\nThey're permanent markings\n꽉 채워 적어 my fate (fate)\n어차피 This is my way (way)\n저 너머 세상도 뒤흔드는 난\n동서남북 Grand Slam\nPump pump\n찍어내지 위인전\nI'm gonna stomp stomp\n내 발자국 Armstrong\n(I'm strong)\n정점을 찍는 업적 (whoo)\n입이 떡 벌어지게 만드는 광경 legendary\n'That's one small step for man, one giant leap for mankind'\nI want more\nThe Hall of Fame\nNumerous records, I'll make 'em always\nHear the people call my name\nHereI'm on the Hall of Fame\nUnveil the rumbling\nTrails of 'hustling'\n찍어 위인전\n'Cause you knowI'm\nShaking the industry\nQuaking reality\nMaking it iconic\n정점을 찍어 stomp stomp\nShaking the industry\nQuaking reality\n입이 떡 벌어지게 만드는 광경 legendary", duration: "2:50"},
                {title: "S-Class", lyrics: "여긴 서울특별시\n수많은 기적을 일으켰지\n가려진 별들 사이 떠오르는 특별\n(별-별-별-별)\n별난 것투성이\n변함없지\n번화하는 거리\n거리거리마다 걸리적거리는 거\nClean it up, clean it up\nGet back\n겉만 번지르르 텅텅 빈 깡통\nKick it, kick it\nKick it\nSwerving\nI'm speeding on Serpent Road\nLuxurious, like I'm an S-class, best of the best on first class\nI'm up above the world so high\nI'll be there shining day and night\nThey wonder how my spotlight is so bright\nCounting stars\n특별의 별의 별의 별의 별의 별의 별의 별난 놈\nThat's me\n별의 별의 별의 별의 별의 별의별 일이 my work (bling bling)\n(Everyday) 빛깔 뻔쩍\n빛깔 뻔쩍\n빛깔 뻔쩍해 class는 특\n빛깔 뻔쩍\n빛깔 뻔쩍\n빛이 번져 더욱 빛나는 (star)\n힙합 스텝 큼지막이 밟지 특출난 게 특기\n내 집처럼 드나들지 특집\n작업실은 안 부러워 특실\n득실득실거려 독보적인 특징\n두리번두리번 어중떠중 띄엄띄엄 보는 애들이\n뻔쩍뻔쩍 빛나는 것들만 보면 달려 버릇이\nNo, no\n빛나는 걸 쫓기보단 빛나는 쪽이 되는 게 훨씬 폼 잡기 편해\nShine like a diamond, 'kay?\nSwerving\nI'm speeding on Serpent Road\nLuxurious like I'm an S-Class, best of the best on first class\nI'm up above the world so high\nI'll be there shining day and night\nThey wonder how my spotlight is so bright\nCounting stars\n특별의 별의 별의 별의 별의 별의 별의 별난 놈\nThat's me\n별의 별의 별의 별의 별의 별의별 일이 my work (bling bling)\n(Everyday) 빛깔 뻔쩍\n빛깔 뻔쩍\n빛깔 뻔쩍해 class는 특\n빛깔 뻔쩍\n빛깔 뻔쩍\n빛이 번져 더욱 빛나는 star\nI feel like the brightest star, 빛이 쏟아지는 밤\n하늘을 바라보면\n내 모습 수놓아져 있어 yeah, yeah\n떨어지지 않고\n한 자리에서 거뜬하게 stay해 yeah\n빛날 광에 사람 인 그게 바로 우리 소개말, we're special, yeah\nStray Kids\n내 뒤의 팀은 특수부대\n스테이지 위 그 자체로 이건 특별 무대\n관중들은\n따로 필요 없지 축제\n절제 따위 필요 없이 고삐 풀 때\nLimited edition\n특이한 건 특별해져\n불투명함은 분명하게 바꿔 거듭 되새겨\n눈에 띄는 텐션\n몰입하는 객석\n우리 빛이 하나가 돼 여기 모든 곳을 밝혀\nCounting stars 특\n(Counting stars 특)\nFeeling extra (everyday)\n빛깔 뻔쩍\n빛깔 뻔쩍\n빛깔 뻔쩍해 class는 특\n빛깔 뻔쩍\n빛깔 뻔쩍\n빛이 번져 더욱 빛나는 star\n", duration: "3:14"},
                {title: "ITEM", lyrics: "ITEM ITEM\nI ate them, Pac-Man\nITEM ITEM\nI ate them all, game set\n아이템빨? 이건 내빨\n풀옵 장착 가득 찬\n가방 만땅\n대박, 난 이득 봐\n모험을 동네 앞 슈퍼 가듯이\n망설임 없이 그대로 dash\n패기와 객기로 대신해 cash\n진실 성실 겸손 삼위일체\n올인해도 절대 안 봐 손해\n재능 flex 원하는 건 두 손에\n여기저기서 탐내 my ITEM\nGot the best of the best\nNothing much, I confess\nAll the stars in my eyes\nMake my galaxy\n모든 색 나의 색\n어딜 가든 colour fest\n아무것도 없어도\nI'm feeling blessed\nStarted from the bottom\nI made it mine, saw the light, I felt divine\n끊임없이\nI make it mine, never die\nITEM ITEM\nI ate them, Pac-Man\nITEM ITEM\nI ate them all, game set\n아이템빨? 이건 내빨\n풀옵 장착 가득 차\n여기저기서 탐내 my ITEM\n몸에 안 받는 아이템 따윈 없지\n닥치는 대로 소화해 몽땅 섭취\n다 쓸어 담아도 안 넘치는 접시\n여기저기서 탐내 my ITEM\nGame Reset (피융)\n처음부터 legendary 명단에 내 이름\n다 뿌리쳐 잡몹 퇴치, 명성 떨침, 다 부리고\n온몸에 넘치는 full MP\n아킬레스건 따윈 존재치 않는 내 죽이는 skill\n내가 손들면 다 올라가지 악 질러 봐라\n내 아래 다 kneel\nYuh celebrate, we gon' elevate\nNo pressure, we ain't gonna taste failure\n능력치 보면 동공 확장해\n여기저기서 탐내 my ITEM\nGot the best of the best\nNothing much, I confess\nAll the stars in my eyes\nMake my galaxy\n모든 색 나의 색\n어딜 가든 colour fest\n아무것도 없어도\nI'm feeling blessed\nStarted from the bottom\nI made it mine, saw the light, I felt divine\n끊임없이\nI make it mine, never die\nITEM ITEM\nI ate them, Pac-Man\nITEM ITEM\nI ate them all, game set\n아이템빨? 이건 내빨\n풀옵 장착 가득 차\n여기저기서 탐내 my ITEM\nI do things that nobody can do\nGod blessed, I'm the one and only\n날 선 말로 상처 내려 해도\nSorry but there's no damage\n재능이 부여서 시기를 사\nI got the power 더 멀리로 가\n티 내진 않지만 내 뒤에서 보이는 light에\n전부 다 홀렸지 봐\n밤 돼도 두 시퍼런\n눈을 뜨고 뜨고 뜨고 버럭\n질러대 mic에다\nYeah it's my ITEM\n몸에 안 받는 아이템 따윈 없지\n닥치는 대로 소화해 몽땅 섭취\n다 쓸어 담아도 안 넘치는 접시\n여기저기서 탐내 my\nITEM ITEM\nI ate them, Pac-Man\nITEM ITEM\nI ate them all, game set\n아이템빨? 이건 내빨\n풀옵 장착 가득 차\n여기저기서 탐내 my ITEM\n", duration: "3:11"},
                {title: "Super Bowl", lyrics: "Cookin' up a storm, piece of cake (cake cake cake)\nSpittin' out that fire feel the blaze (feel the blaze)\nTaking over we don't play by the rules\nIf you wanna feel alive say the name (say the name)\nBellowing speakers mic pop filter\nBass be kicking harder got your head off kilter\nKeep your dirty hands off me\nI'mma show you just wait and see\nDominate everything, we are the ultimate gang\nFresh taste, fresh scent, fresh shape, fresh everything\nCame for a bite, now you're so addicted, yeah thank you come again\nEverything you craving, yeah it's all me\nEverything invented, that was all me yeah\nHell of a line yeah I know it's hella fine\nHell's Kitchen tasting divine\nYou feel it in your system, you want it more\nDifferent new flavours\nOur dish here's so bussin'\nFinger Lickin' yeah we cookin' up a Super Bowl\nIn the kitchen, Michelin, irresistible\nOpen wide, have a bite\nMake it mine, all the time\nFinger Lickin' yeah we cookin' up a Super Bowl\nIn the kitchen, Michelin, irresistible\nFeeling prime, state of mind (shh)\nFinger Lickin' yeah we cookin' up a Super Bowl\nMixin' this and all that, dish be lookin' like 'fusion'\nTake a photo it's bussin' even in lowest resolution\nScrollin' through your feed, you see me cookin' up your timeline\nI eat up everybody's 'like and share'\nHottest trend ha\nEy no pay, just free samples, heyday ey\nProduct sold out we the best in sellin' ey\nOrder so much, trail of receipts blowin' bang bang\nCan't resist it you'll finish every plate of leftovers ah\nHell of a line yeah I know it's hella fine\nHell's Kitchen tasting divine\nYou feel it in your system, you want it more\nDifferent new flavours\nOur dish here's so bussin'\nFinger Lickin' yeah we cookin' up a Super Bowl\nIn the kitchen, Michelin, irresistible\nFeeling prime, state of mind (shh)\nFinger Lickin' yeah we cookin' up a Super Bowl\nCounting stars, I feel the light\nOpen my eyes in the darkest night\nYeah you know that it's true yeah\nYou know it's all for you yeah yeah\nI'll do it again, just the way you want it\nI'll do it again for the days to come\nIf there's a drought, never doubt\n'Cause the clouds are like crowds behind us\nYeah we bring the rain\n(Cooking up a storm piece of cake)\nFinger Lickin' yeah we cookin' up a Super Bowl\nIn the kitchen, Michelin, irresistible\nOpen wide, have a bite\nMake it mine, all the time\nFinger Lickin' yeah we cookin' up a Super Bowl\nIn the kitchen, Michelin, irresistible\nFeeling prime, state of mind (shh)\nFinger Lickin' yeah we cookin' up a Super Bowl\n", duration: "3:03"},
                {title: "TOPLINE (Feat. Tiger JK)", lyrics: "우린 선을 그어 TOPLINE\n그 누가 감히 넘봐 TOP CLASS\n더 높이 쌓여가는 KARMA\n♪\n애초에 시작부터 달랐지 the one and only\n행보와 업보로 뒷받침 타당하지 논리\n두 마리의 토끼를 잡아 높이와 거리\n선 넘지 말란 말도 필요 없지\n위를 넘진 못해 밑을 고개를 숙여 지나가\n우리 뒤꽁무니만 보고 따라오다 탈선 빗나가\n긴박한 시간 지난날\n많은 걸 챙길 필요 없어 여유 챙겨\n내 가사는 new line new area 개척\nDrawing, I'm moulding, I'm rolling my waves\nYeah I'm counting wins on the Grand Line\n기준을 올리고 몰리는 모두가 brave\nBut they can't pass me I'm the Red Line\nJust sing along, I'm dancing on the thin line\n더 크게 더, 다 따라 부를 TOPLINE\n밤새도록 gon' play, I can do this all day\n'Cause we don't give a f-\n우린 선을 그어 TOPLINE\n그 누가 감히 넘봐 TOP CLASS\n더 높이 쌓여가는 KARMA (KARMA)\nBOM DIGI DIGI BOM BOM BOM BOM\nTOPLINE 위에 박자 타지 우리 SHOW\nHa hotline 뜨거뜨거 WE ABOUT TO BLOW\nTOPLINE (TOPLINE)\nBOM DIGI DIGI BOM BOM BOM BOM\nNo gravity, 발 닿지 않는 땅 tympanic cavity 속\nWe go 눈 흐려지는 빛 꼬리는 뒤로 흐르는\n시간 속에도 영원한 이 순간 never detour\n두 눈 꽉 감아도 느낄 수 있다\n홀린 듯 따라 부를 TOPLINE에 끄덕거린다\nWe skedaddle intoxicated razzle dazzle\n터지는 방언들은 classic 나 다 내뱉는 대로\n뒤틀린 뫼비우스 띠 비트는 time travel\nLook at me now\nHow 'bout now? You can't deny\nBut we're still running on this way 'cause we're never satisfied\n이미 알 만한 사람 다 끄덕이지만 the reason why\n아직 내 기준 못 미친 탓에 여전히 kept my speed on top\nAin't nobody can do it like us, hurry\n날 따라올람 멀었다 but we're not cocky\nAttention 여전히 넘쳐 passion\n뒤에서 이만함 됐어라고 내뱉음 대답은 얼탱이가 없어 (question)\nDrawing, I'm moulding, I'm rolling my waves\nYeah I'm counting wins on the Grand Line\n기준을 올리고 몰리는 모두가 brave\nBut they can't pass me I'm the Red Line\nJust sing along, I'm dancing on the thin line\n더 크게 더, 다 따라 부를 TOPLINE\n밤새도록 gon' play, I can do this all day\n'Cause we don't give a f-\n우린 선을 그어 TOPLINE\n그 누가 감히 넘봐 TOP CLASS\n더 높이 쌓여가는 KARMA (KARMA)\nBOM DIGI DIGI BOM BOM BOM BOM\nTOPLINE 위에 박자 타지 우리 SHOW\nHa hotline 뜨거뜨거 WE ABOUT TO BLOW\nTOPLINE (TOPLINE)\nBOM DIGI DIGI BOM BOM BOM BOM\n발아래천지가 보여 WE'RE THE TOPLINE\n위만 보다 목이 뻐근하지 넌\n발아래 천지가 보여 WE'RE THE TOPLINE\n위만 보다 목이 뻐근하지 넌\n", duration: "3:23"},
                {title: "DLC", lyrics: "We're only going to dance like crazy\nIt's just that, I like it, la la la\nNobody (hey), nobody (hey)\nPlease don't care about me, it's okay\nLet's go crazy until the sun rises\n동이 트면 햇빛 아래 헤엄칠래 (ayy)\n몸짓은 크게 아무도 날 말릴 수 없게 (ayy)\n바다 위를 날아가는 새야 나 좀 낚아채 줘\n크게만 보였던 세상 작아 보이게 (hey)\n달이 떠도 la la la la\n소리 질러 la la la la la\n아무도 모르게 oh, yeah\nWe're only going to dance like crazy\nIt's just that, I like it, la la la\nNobody (hey), nobody (hey)\nPlease don't care about me, it's okay\nLet's go crazy until the sun rises\nSunrise\nLet's dance like crazy\nYeah, yeah, yeah\nNobody (hey), nobody (hey)\nPlease don't care about me, it's okay\nLet's go crazy until the sun rises\n잊어버리고 싶던, 지워버리고 싶던\n그딴 기억 따위 오늘 전부 날릴 수 있어\n잠이 들기 전 떠오를 good memory\n난 run away, run away, run away, yeah\n다 go away, go away, go away, yeah\n아무도 모르게\nWe're only going to dance like crazy\nIt's just that, I like it, la la la\nNobody (hey), nobody (hey)\nPlease don't care about me, it's okay\nLet's go crazy until the sun rises\nSunrise\nLet's dance like crazy\nYeah, yeah, yeah\nNobody (hey), nobody (hey)\nPlease don't care about me, it's okay\nLet's go crazy until the sun rises\n♪\n좁혀 놨던 이상 속\n그 안에 깊이 갇혀 oh\nI better run, better run\n(Better run, better run)\n걱정들은 점점 더 나를 집어삼켜 oh\nI better run, better run\nRight now, yeah\nLa la la la la la, la la la\n♪\nLike the sun 뜨겁게 불타오르는 별\nDance like a crazy, crazy, crazy in the light\nThree, two, one, let's go\nGot me feeling like la la la la\nGot me feeling like la la la la\nGot me feeling like la la la la\nGot me feeling like la la la la\nGot me feeling like la la la la\nGot me feeling like la la la la\n아무도 모르게 \nLa la la la la la la la \n", duration: "3:06"},
                {title: "GET LIT", lyrics: "Hey, hey, hey\nHey, hey, woah\nHey, hey, hey\nYeah\nThat's okay, 바로 중독\n아직 덜 빠진 애들 행동들이 굼떠 (woo)\n철없게, we're gonna pour it up\n아 물론 건전하게 탄산으로 퍼부어\n더 악 질러 소음공해 전까지 놀아 (wow)\n저기 저 멍청이는 멍때리다, knock down (let's go)\nWe're gonna rock it now, so play like a gangster\nYou can't stop us, 백날 쫓아 봐야 안 된다, yeah\n할일 없이 멍때리네\n미친 것처럼 벽 보고 헛소리, oh, yeah, yeah\n거참 소름 돋게\n또 할 거라고 생기지 일거리 산더미, oh, yeah\nI don't wanna do it, I don't wanna do it\n그냥 다 내려놓고 마냥 미친 듯이 놀래\n넥타이 끈 푼 우린 멋쟁이들\n내일이 오건 말건 걍 다\n죽어보자\nOh, yeah\nWe're not gonna die young\nOh, yeah\n부려 사치, today, I'm so cocky\n오늘 우린 부르주아 어깨 펴고 다녀\n당당히 사람들 앞에서 춤사위도\n발 구르자 폼생폼사여\n간밤에 부던 바람은 춤바람인고\nSwerve, swerve, hey\nSwerve, swerve, woah\nSwerve, swerve, hey\nShhhh\n오늘 컨셉 중요치 않아 술렁\n이네 발걸음부터 Rambo\nDu-du, walk it like I talk it, never limbo\n풀린 눈이 지금 기분 증명하는 symbol\n기분은 오르락내리락 없이 저 위에서 ping-pong\n할일 없이 멍때리네\n미친 것처럼 벽 보고 헛소리, oh, yeah, yeah\n거참 소름 돋게\n또 할 거라고 생기지 일거리 산더미, oh, yeah\nI don't wanna do it, I don't wanna do it\n그냥 다 내려놓고 마냥 미친 듯이 놀래\n넥타이 끈 푼 우린 멋쟁이들\n내일이 오건 말건 걍 다\n죽어보자\nOh, yeah\nWe're not gonna die young\nOh, yeah\n부려 사치, today, I'm so cocky\n오늘 우린 부르주아 어깨 펴고 다녀\n당당히 사람들 앞에서 춤사위도\n발 구르자 폼생폼사여\n간밤에 부던 바람은 춤바람인고\n오늘이 지나면\n내일의 해가 뜨고 또 시작이야\n죽었던 표정 풀어\n오늘만큼은 shall we dance all night? Yeah\n터져 버린 스피커\n폰에서 음악 틀고 놀아 그냥 feel로 (yeah, yeah)\n부숴 버려 킹콩처럼\n꼭대기로 올라 소리 질러\nHa\nLet's go\nHey\nHoo, yeah\nHey\nYes, here we go\n오늘 우린 부르주아 어깨 펴고 다녀\n당당히 사람들 앞에서 춤사위도\n발 구르자 폼생폼사여 (hold up)\n간밤에 부던 바람은 춤바람인고 (휭)\n", duration: "2:50"},
                {title: "Collision", lyrics: "내가 그렇게 미워졌니? 손 한 뼘보다\n가깝게 있던 넌 지금 어디\nI cannot find you now\n두서없는 말로 널 잡기는 힘들 것 같아\n구긴 표정 풀어 내가 더 잘할게 울지 마\n내 품속에 너 대뜸 내게 넌\nBaby, where you from? I said, 'Maybe 너'\nRomantic 했던 추억 회상 소각\n하늘로 흩어져 버린 매연 같다 (woo)\n미안해 그냥 내가 잘못했어 (sorry, babe)\n변명할 생각 없어 다시 한번\n그때로 돌아가 날 사랑한다 말해줘 (young love)\nBabe, I beg you, let's go back to the day we loved\n내가 그렇게 미웠었니? 우린 운명이라\n말했었던 우린 타 저 하늘에 별 같아\n시간이 지나 우린 만나서 부서지더라\n그 흔적이 온 우주 전체를 맴도는 이 밤\n우리 둘 바삐 yeah 충돌, yeah\nYeah, we crash, 파편은 어디\nYeah, 충돌 yeah, 우린 벌써 저기 멀리\nWhy you acting like a fool?\n알잖아, don't be so rude\nCall me 'Baby' like you used to\n원래 그랬던 것처럼\n둘이서 불러 보자고 lovely 애칭으로 자기야\n이제 와 이런 말하기 쉽지 않아\n알잖아 너가 바로 내 자체 삶이야\n밤이고 아침 그리고 끝마침\n네가 시작이고 끝이야 부서진다면 난 마치\n우주에 날리는 먼지마냥 휘날리다 사라져 그건 너도 잘 알지\n행성이 부딪혀 내는 폭발의 굉음보다 크게 나눴던 감정이\n하루아침에 반쪽보다 못하는 사이로 남아 떠난다는 맘이 난 싫지\n미안해 그냥 내가 잘못했어 (sorry, babe)\n변명할 생각 없어 다시 한번\n그때로 돌아가 날 사랑한다 말해줘\nBabe, I beg you, let's go back to the day we loved\n내가 그렇게 미웠었니? 우린 운명이라\n말했었던 우린 타 저 하늘에 별 같아\n시간이 지나 우린 만나서 부서지더라\n그 흔적이 온 우주 전체를 맴도는 이 밤\n우리 둘 바삐 yeah, 충돌, yeah\nYeah, we crash, 파편은 어디\nYeah, 충돌 yeah, 우린 벌써 저기 멀리\n", duration: "2:37"},
                {title: "FNF", lyrics: "I see the ashes up in the sky\n너의 목소리도 들리는 난\n널 향해 손을 뻗어 봤자\n얻는 건 공허한 마음\n겁 없이 달리다 널 놓칠까 봐 I shout shout shout\n수없이 불러 봐도 난 다시 한번 더 외쳐\n난 너의 그림자처럼 붙어 있어도 so far far far\n영원히 이렇게 지낼 수 없는 난\n날 둘러싼 fauna and flora\n먼지가 돼도 I really want you back\n곁에 있던 fauna and flora\n미안한 마음에 다시 쫓아가 now\nI'm catching up\n♪\nI'm catching up\n♪\nI can feel the rage burning up inside my heart\nKnowing you're no longer here\nI can't stop thinking about what I could've done\nBut till this day, I live in fear\nI fell apart, burnt to the ground\nGot nothing but ashes in my eyes\nIt's black and cold as night\nI wish I was there with you by your side\nI don't know if I can sleep well tonight\nThey tell me to keep movin' on\nYeah I'll never be the same\nBut I know that deep in my heart\nI'll carry all the pain\n날 둘러싼 fauna and flora\n먼지가 돼도 I really want you back\n곁에 있던 fauna and flora\n미안한 마음에 다시 쫓아가 now\n겁 없이 달리다 널 놓칠까 봐 I shout shout shout\n수없이 불러 봐도 난 다시 한번 더 외쳐\n난 너의 그림자처럼 붙어 있어도 so far far far\n영원히 이렇게 지낼 수 없는 난\nI'm catching up\n♪\nI'm catching up\n♪\n밤하늘을 봐도\n난 눈을 감아도\n너밖에 안 보여\n달려가 쫓아가 불가능해도 oh\nI'm catching up (oh)\nI'm catching up (좀만 기다려 oh)\nI'm catching up (I'm catching up uh oh)\n달려가 쫓아가 불가능해도 oh\n", duration: "2:51"},
                {title: "Youtiful", lyrics: "Looking at yourself\nA lot goes in your mind\n'I don't know if I'm ready to show myself'\nYou worry day and night\nLook at the stars fall\nThey leave the sky, goodbye\nMust be an oracle, like a waterfall\nThey shower you with love tonight\n'Cause you are\nYou're perfect in my eyes\nYou are\nDon't ever doubt yourself\n(You are) I know that feeling too, I've been inside the dark\nI've never been so empty, hopeless\n(You are) but no, it isn't true\n'Cause know that all the stars are by your side\nYou know whenever there's a chance\nI'll tell you that you're amazing as you are\n'Cause when you give me a glance\nI'm sure that I see the universe in your eyes\nDon't you ever tell yourself that you're not enough\nI am certain that you're truly fine\nYou are a miracle, miracle\nYou are youtiful\nLet me tell a little story\nAbout the star that couldn't shine or blink\nOut of a million, billion\nFelt like an alien, alien\nThen that little star was surely\nGoing to become the biggest thing\nMaking a fantasy family\nBeautiful galaxy, galaxy\n'Cause you are\nMore than beautiful, one of a kind\nYou are\nJust know I'm always by your side\nYou know whenever there's a chance\nI'll tell you that you're amazing as you are\n'Cause when you give me a glance\nI'm sure that I see the universe in your eyes\nDon't you ever tell yourself that you're not enough\nI am certain that you're truly fine\nYou are a miracle, miracle\nYou are youtiful\nAnother day ahead, don't wanna leave the bed\nYou're looking at the mirror, see the tears covered in red\nI know that you've been cold this whole time\nBut now I'm here to make it end\nYou know whenever there's a chance\nI'll tell you that you're amazing as you are (amazing as you are)\n'Cause when you give me a glance\nI'm sure that I see the universe in your eyes (universe in your eyes)\nDon't you ever tell yourself that you're not enough\nI am certain that you're truly fine (certain that you're truly fine)\nYou are a miracle, miracle\nYou are youtiful\n", duration: "3:28"},
                {title: "THE SOUND (Korean Ver.)", lyrics: "시끄럽게 때려 박는 리듬 위에 다\n고막에 치고받는 bass drum과 guitar, 외쳐 분위기에 shout\n처지지 않게 고개를 끄덕여 맞춰 템포 박자\nDriving me crazy 이 음악에 맞춰 딱딱\nLook at me, 더 올라가는 중인 내 텐션\n박자 위 근두운 타고 불러라 anthem\nThe crowd's gonna follow us, 더 불러 힘차게\n더욱 세게, bang, bang, gonna shout it out now (now, now, now)\nOh, nothing better\nYeah, nothing matters\n조명이 꺼진다 해도\n어둠을 밝히는\nThis our 음악장, it's our 음악장\n더 크게 울려 퍼지는\n함성 소리를 들으며 몸을 움직여\n따라와라 다, 따라와라 다\nThis our 음악장, it's our 음악장\n더 멀리 퍼져 나가는\n우리 음악이 들리면 몸을 움직여\n따라와라 다, 따라와라 다\n갈수록 더 벅차오르는 이 감정\n환호가 끝날 때까지 흥분을 못 감춰\n끝이 없는 호흡 뱉고 뱉어\n숨이 가빠 올라도 멈출 수 없어\n이판사판 뛰어놀아 막장 떼창으로 칼답장\n악보는 각자의 머릿속에 리액션으로 풀 장착\n영혼을 담아 cheers, 분위기에 취해, la-la\n남녀노소 다 peers, 이러다가 날밤 깔라 (now, now, now)\nOh, nothing better\nYeah, nothing matters\n조명이 꺼진다 해도\n어둠을 밝히는\nThis our 음악장, it's our 음악장\n더 크게 울려 퍼지는\n함성 소리를 들으며 몸을 움직여\n따라와라 다, 따라와라 다\nThis our 음악장, it's our 음악장\n더 멀리 퍼져 나가는\n우리 음악이 들리면 몸을 움직여\n따라와라 다, 따라와라 다\nOh, whoa, whoa-oh-oh, whoa, whoa-oh-oh\nOh, whoa, whoa-oh-oh, whoa, whoa-oh-oh\n더 커져 가는 목소리 목소리\n울려 퍼지는 멜로디 멜로디\n더 크게 높여 volume up 조금 더\n귓가에는 함성소리가 멀리 퍼져 간다\n공 찰 거면 운동장, 꿀 빨 거면 양봉장\n진짜를 찾는다면 여기 우리 음악장\n타오르는 애간장, 타오르는 승강장\n타오르는 분위기, this is our 음악장\nThis our 음악장, it's our 음악장\n더 크게 울려 퍼지는\n함성 소리를 들으며 몸을 움직여\n따라와라 다, 따라와라 다\nThis our 음악장, it's our 음악장\n더 멀리 퍼져 나가는\n우리 음악이 들리면 몸을 움직여\n따라와라 다, 따라와라 다\n", duration: "2:57"},
                {title: "Mixtape: Time Out", lyrics: "Oh, yeah-eh-eh\nOh, whoa, yeah (one, two, three, let's go)\nBreathe 깨끗한 공기를 마셔, I can feel it in my heart\n내뱉은 한숨의 배로 들이켜 움츠린 몸 일으켜 세워\n지난 일은 지나간 대로, 후회는 과거에 묻어둔 채로\n앞만 보고서 달려, oh-oh, oh, oh\n뻥, 뚫린 해안도로 위를 달리는 거야\n텅 비워놓자 머릿속의 잡것들을 다, bomb, hey\nNobody can touch me\n오늘 밤은 밤새도 피곤할 리 없지\nSo come on\nLet's go, 떠나 다 미루고 어디든 가자 여기서 멀리로\nRun to (run to), run to (run to)\n푸르게 펼쳐진 어딘가로, oh, oh\nSo come on\nPack up, 필요한 건 텅 빈 머리 살랑이는 바람 따라가자\nWe run to (run to), run to (run to)\n복잡히 꼬여버린 생각은 버리고, go, time out\nOne, two, three, four\n안 내면 술래 비기면 또 해 손 들어 가위바위보\n도로 위 톨게이트 지나서 휴게소 가 맘껏 사 들고\n풀장이든 바다와, 바람과, 파란 sky, 팔랑거려, 내 맘 알아\n날씨도 풀렸다 하늘 좀 봐라 자잘한 고민은 다 날리고 가자\nGo, let the stress fly away\nDon't worry 'bout tomorrow\nSo we'll just have some fun right now\n지평선에 석양 배경 삼아 잡아 pose\n뻥, 뚫린 해안도로 위를 달리는 거야\n텅 비워놓자 머릿속의 잡것들을 다, bomb, hey\nNobody can touch me\n오늘 밤은 밤새도 피곤할 리 없지\nOh-oh, oh, oh, 망설일 필요 없어\nOh-oh, oh, oh, 'cause this is our time\nOh-oh, oh, oh, oh, oh\n모든 짐은 내려두고서, here we go\nSo come on\nLet's go, 떠나 다 미루고 어디든 가자 여기서 멀리로\nRun to (run to), run to (run to)\n푸르게 펼쳐진 어딘가로, oh, oh\nSo come on\nPack up, 필요한 건 텅 빈 머리 살랑이는 바람 따라가자\nWe run to (run to), run to (run to)\n복잡히 꼬여버린 생각은 버리고, go, time out\n", duration: "2:54"},
            ],
            id: "06022023",  color: "#ECDFCC"
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
            id: "02222023",  color: "#F7B5CA"
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
            id: "12212022a",  color: "#FFBB70"
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
            id: "12212022b",  color: "#FFBB70"
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
            id: "10072022",  color: "#FFB1B1"
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
            id: "03182022",  color: "#2E073F"
        },
        {name: "Mixtape: OH", imgSrc: "https://upload.wikimedia.org/wikipedia/en/7/74/Stray_Kids_-_Mixtape_Oh.jpeg", year: "2021",
            songs: [
                {title: "Mixtape: OH", lyrics: "", duration: "3:32"}
            ],
            id: "06262021",  color: "#D2E0FB"
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
            id: "12232021",  color: "#FFF4EA"
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
            id: "08232021",  color: "#1230AE"
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
            id: "10272020",  color: "#E0A75E"
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
            id: "09142020",  color: "#E85C0D"
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
            id: "06172020",  color: "#C96868"
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
            id: "03182020",  color: "#FABC3F"
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
            id: "12092019",  color: "#00224D"
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
            id: "06192019",  color: "#FFC94A"
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
            id: "03252019",  color: "#D21312"
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
            id: "10222018",  color: "#E6B9A6"
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
            id: "08062018",  color: "#EEEDEB"
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
            id: "03262018",  color: "#624E88"
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
            id: "01082018",  color: "#EEEDEB"
        },
        {name: "SLASH (\"Deadpool & Wolverine\")", imgSrc: "https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Stray_Kids_-_Slash.png/220px-Stray_Kids_-_Slash.png", year: "2024",
            songs: [
                {title: "SLASH (\"Deadpool & Wolverine\")", 
                lyrics: "(SLASH)\n 간결히 slash \n찰나에 터지는 spark \n흐름을 끊었지 맥 \n깊숙이 새겨진 mark \n쳐도 돼 tap \n풀이 죽었지 pep \n귀여워 pat \n넌 내 상대도 안 되지 쨉 \n손쉽게 처리해 \n어리석지 날 쉽게 봤다면 drop it \n헛수고 멀리해 티끌을 모아서 태산도 chop it \n약점은 안 보여 죽어도 안 죽어 근성은 zombie \n자객이 들지 소문이 돌지 모두 섬칫 \n쥐도 새도 모르는 새 \n빠져나갈 구멍 없네 \n사정거리는 상하좌우 \n빈틈을 바랐다면 꿈 깨 \nAssassinate, quietly dominate \n그림자 속에서 춤을 춰 right now now \nI terminate, rise up, levitate \n붉은 자객의 sword 더 붉게 물들여 \nI'll colour the night stars, the colour of my heart \n'Cause they'll be watching over me tonight \nVictorious silence, they know that I'm violence \nSlash \n철컥 shing (ching-ching) \n현란하게 칼춤 추며 sing \nLa-la-la-la (ching-ching) \n간결하게 slash \n온몸에 붉게 타는 우리 색이 배일 때 \n반항할 수 없게 돼 so you better hack it \n긴 말은 필요 없지 칼같이 slash it \n간결하게 slash, shing, shing \nCome and get me, mission impossible \n아무 기척 없이 소리 낮추고 \n슬금슬금 (슬금) 슬금슬금 (슬금) \nPiece of cake, wanna bet, okay 콜 (콜) \n별일 없이 wake up 다음으로 weapons check it 해 현장 파괴범 \n함부로 뱉다가 싹 되려 다물고 결의에 찬 내게 환호성 \n하는 거 봐, 예술의 경지를 넘어섰다 \n신속히 쳐내지 장해물 뛰어넘어 버리는 모습에 모두가 와 (와) \nAssassinate, quietly dominate \n그림자 속에서 춤을 춰 right now now \nI terminate, rise up, levitate \n붉은 자객의 sword 더 붉게 물들여 \nI'll colour the night stars, the colour of my heart \n'Cause they'll be watching over me tonight \nVictorious silence, they know that I'm violence \nSlash \n(Slash) \nChing-ching \nShing (ching-ching) \n현란하게 칼춤 추며 sing \nLa-la-la-la (ching-ching) \n(간결하게 slash) \n온몸에 붉게 타는 우리 색이 배일 때 \n반항할 수 없게 돼 so you better hack it \n긴 말은 필요 없지 칼같이 slash it \n간결하게 slash, shing, shing", 
                duration: "3:11"}
            ],
            id: "07232024",  color: "#800000"
        },
        {name: "Lose my Breath (Feat. Charlie Puth)", imgSrc: "https://i.scdn.co/image/ab67616d0000b2735ba0dedb513880cf318f15cb", year: "2024",
            songs: [
                {title: "Lose my Breath (Feat. Charlie Puth)", lyrics: "", duration: "2:46"}
            ],
            id: "05102024",  color: "#5B99C2"
        },
        {name: "Social Path (Feat. LiSA)", imgSrc: "https://i.scdn.co/image/ab67616d0000b273270ec2f0731d60117f1c8315", year: "2023",
            songs: [
                {title: "Social Path (Feat. LiSA)", lyrics: "", duration: "3:18"}
            ],
            id: "09062023",  color: "#EEEDEB"
        },
        {name: "Going Dumb (Feat. Alesso, CORSAK)", imgSrc: "https://upload.wikimedia.org/wikipedia/en/f/fc/Alesso_x_Corsak_x_Stray_Kids_-_Going_Dumb.jpeg", year: "2021",
            songs: [
                {title: "Going Dumb (Feat. Alesso, CORSAK)", lyrics: "", duration: "2:49"}
            ],
            id: "03192021",  color: "#2E073F"
        },
        {name: "Christmas EveL", imgSrc: "https://upload.wikimedia.org/wikipedia/en/9/9f/Stray_Kids_-_Christmas_EveL.jpeg", year: "2021",
            songs: [
                {title: "Christmas EveL", lyrics: "", duration: "2:58"},
                {title: "24 to 25", lyrics: "", duration: "3:36"},
                {title: "Winter Falls", lyrics: "", duration: "3:55"},
                {title: "DOMINO (English Ver.)", lyrics: "", duration: "3:18"},
            ],
            id: "11292021",  color: "#D21312"
        },
        {name: "POP OUT BOY!Part.1", imgSrc: "https://i.scdn.co/image/ab67616d0000b273553d50e9713ced284dd254a3", year: "2020",
            songs: [
                {title: "Hello Stranger", lyrics: "", duration: "3:58"},
                {title: "Hello Stranger (Inst.)", lyrics: "", duration: "3:58"}
            ],
            id: "07162020",  color: "#2F58CD"
        },
        {name: "TOP", imgSrc: "https://upload.wikimedia.org/wikipedia/en/a/a5/Stray_Kids_-_Top_%28Korean_ver.%29.jpg", year: "2020",
            songs: [
                {title: "TOP (\"Tower of God\" OP)", lyrics: "", duration: "3:04"},
                {title: "SLUMP (\"Tower of God\" OP)", lyrics: "", duration: "3:04"},
            ],
            id: "05132020",  color: "#00337C"
        },
        {name: "TOP (English Ver.)", imgSrc: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c6/Stray_Kids_-_Top_%28English_ver.%29.jpg/220px-Stray_Kids_-_Top_%28English_ver.%29.jpg", year: "2020",
            songs: [
                {title: "TOP (English Ver.)", lyrics: "", duration: "3:07"},
            ],
            id: "05202020a",  color: "#00337C"
        },
        {name: "TOP -Japanese Ver.-", imgSrc: "https://images.genius.com/2e009581dd6e5538236f9837061073c7.1000x1000x1.jpg", year: "2020",
            songs: [
                {title: "TOP -Japanese Ver.-", lyrics: "", duration: "3:07"},
                {title: "SLUMP -Japanese Ver.-", lyrics: "", duration: "2:16"},
                {title: "TOP (Instrumental)", lyrics: "", duration: "3:07"},
                {title: "SLUMP (Instrumental)", lyrics: "", duration: "2:16"},
            ],
            id: "05202020b",  color: "#00337C"
        },
        {name: "Mixtape: On Track", imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGSrFp01MA2sAaaXd8Z02KSbv7EMOY31Vs-A&s", year: "2020",
            songs: [
                {title: "Mixtape: 바보라도 알아", lyrics: "", duration: "3:27"}
            ],
            id: "03252020",  color: "#E0C097"
        },
        {name: "Mixtape: Gone Days", imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOmc7NQZqlRU4CZBIW_YvxdtbFl5sUyhq-gA&s", year: "2019",
            songs: [
                {title: "Mixtape: Gone Days", lyrics: "", duration: "3:16"}
            ],
            id: "12262019",  color: "#1E5128"
        },
        {name: "Extraordinary You Pt.7 (OTS)", imgSrc: "https://images.genius.com/a5d29cfafa38319ee167721da668dc61.500x500x1.jpg", year: "2019",
            songs: [
                {title: "끝나지 않을 이야기", lyrics: "", duration: "4:04"},
                {title: "끝나지 않을 이야기 (Inst.)", lyrics: "", duration: "4:04"},
            ],
            id: "11092019",  color: "#FFC94A"
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

    let albumsSorted= albumsList.sort((a, b) => b.year - a.year);
    const [albumsDisplay, setAlbumsDisplay]= useState(albumsSorted);

    const [selectedSong, setSelectedSong]= useState(null);
    const [songSelected, setSongSelected]= useState(false); //for showing lyrics 
    
    //for clicking on the album from album card:
    const handleChange=(album)=>{
        setPreviewAlbum(album);
        hideLyrics();
    }
    const showLyrics = (song) => {
        setSelectedSong(song);
        setSongSelected(true);
    };

    // Hide lyrics view
    const hideLyrics = () => {
        setSongSelected(false);
        setSelectedSong(null);
    };
    
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
        <div className="preview-container" id="previews"  style={{border:`5px solid ${previewAlbum.color}`}}>
            <div className="left">
                {!songSelected && <AlbumInfo {...previewAlbum} showLyrics={showLyrics} />}
                {songSelected && selectedSong && (
                    <Lyrics lyrics={selectedSong.lyrics} name={selectedSong.title} closeLyrics={hideLyrics} />
                )}
            </div>
            {previewAlbum&& <AlbumPreview {...previewAlbum} songSelected={songSelected}/>}
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
                    {standardPreview}
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