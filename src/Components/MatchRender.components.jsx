import React, { useState, useEffect } from "react";

function MatchRender({ api, region, data, user }) {
  useEffect(() => {}, [data]);

  let championWithId = {
    266: "Aatrox",
    103: "Ahri",
    84: "Akali",
    12: "Alistar",
    32: "Amumu",
    34: "Anivia",
    1: "Annie",
    22: "Ashe",
    136: "AurelionSol",
    268: "Azir",
    432: "Bard",
    53: "Blitzcrank",
    63: "Brand",
    201: "Braum",
    51: "Caitlyn",
    164: "Camille",
    69: "Cassiopeia",
    31: "Chogath",
    42: "Corki",
    122: "Darius",
    131: "Diana",
    119: "Draven",
    36: "DrMundo",
    245: "Ekko",
    60: "Elise",
    28: "Evelynn",
    81: "Ezreal",
    9: "Fiddlesticks",
    114: "Fiora",
    105: "Fizz",
    3: "Galio",
    41: "Gangplank",
    86: "Garen",
    150: "Gnar",
    79: "Gragas",
    104: "Graves",
    120: "Hecarim",
    74: "Heimerdinger",
    420: "Illaoi",
    39: "Irelia",
    427: "Ivern",
    40: "Janna",
    59: "JarvanIV",
    24: "Jax",
    126: "Jayce",
    202: "Jhin",
    222: "Jinx",
    145: "Kaisa",
    429: "Kalista",
    43: "Karma",
    30: "Karthus",
    38: "Kassadin",
    55: "Katarina",
    10: "Kayle",
    141: "Kayn",
    85: "Kennen",
    121: "Khazix",
    203: "Kindred",
    240: "Kled",
    96: "KogMaw",
    7: "Leblanc",
    64: "LeeSin",
    89: "Leona",
    127: "Lissandra",
    236: "Lucian",
    117: "Lulu",
    99: "Lux",
    54: "Malphite",
    90: "Malzahar",
    57: "Maokai",
    11: "MasterYi",
    21: "MissFortune",
    82: "Mordekaiser",
    25: "Morgana",
    267: "Nami",
    75: "Nasus",
    111: "Nautilus",
    518: "Neeko",
    76: "Nidalee",
    56: "Nocturne",
    20: "Nunu",
    2: "Olaf",
    61: "Orianna",
    516: "Ornn",
    80: "Pantheon",
    78: "Poppy",
    555: "Pyke",
    246: "Qiyana",
    133: "Quinn",
    497: "Rakan",
    33: "Rammus",
    421: "RekSai",
    58: "Renekton",
    107: "Rengar",
    92: "Riven",
    68: "Rumble",
    13: "Ryze",
    113: "Sejuani",
    35: "Shaco",
    98: "Shen",
    102: "Shyvana",
    27: "Singed",
    14: "Sion",
    15: "Sivir",
    72: "Skarner",
    37: "Sona",
    16: "Soraka",
    50: "Swain",
    517: "Sylas",
    134: "Syndra",
    223: "TahmKench",
    163: "Taliyah",
    91: "Talon",
    44: "Taric",
    17: "Teemo",
    412: "Thresh",
    18: "Tristana",
    48: "Trundle",
    23: "Tryndamere",
    4: "TwistedFate",
    29: "Twitch",
    77: "Udyr",
    6: "Urgot",
    110: "Varus",
    67: "Vayne",
    45: "Veigar",
    161: "Velkoz",
    254: "Vi",
    112: "Viktor",
    8: "Vladimir",
    106: "Volibear",
    19: "Warwick",
    62: "MonkeyKing",
    498: "Xayah",
    101: "Xerath",
    5: "XinZhao",
    157: "Yasuo",
    83: "Yorick",
    350: "Yuumi",
    154: "Zac",
    238: "Zed",
    221: "Zeri",
    115: "Ziggs",
    26: "Zilean",
    142: "Zoe",
    143: "Zyra",
    235: "Senna",
    523: "Aphelios",
    875: "Sett",
    876: "Lillia",
    777: "Yone",
    360: "Samira",
    147: "Seraphine",
    526: "Rell",
    234: "Viego",
    887: "Gwen",
    166: "Akshan",
    711: "Vex",
    888: "RenataGlasc",
  };

  return Object.keys(user.participants).map(function (key) {
    if (user.participants[key].puuid === data.puuid) {
      let participant = user.participants[key];
      let gameType;
      if (user.queueId === 0) {
        gameType = "Custom";
      } else if (user.queueId === 72) {
        gameType = "1v1 Snowdown Showdown";
      } else if (user.queueId === 73) {
        gameType = "2v2 Snowdown Showdown";
      } else if (user.queueId === 75) {
        gameType = "6v6 Hexakill";
      } else if (user.queueId === 76) {
        gameType = "Ultra Rapid Fire";
      } else if (user.queueId === 78) {
        gameType = "One For All: Mirror Mode";
      } else if (user.queueId === 83) {
        gameType = "Co-op vs AI Ultra Rapid Fire";
      } else if (user.queueId === 100) {
        gameType = "5v5 ARAM";
      } else if (user.queueId === 310) {
        gameType = "Nemesis";
      } else if (user.queueId === 313) {
        gameType = "Black Market Brawlers";
      } else if (user.queueId === 317) {
        gameType = "Definitely Not Dominion";
      } else if (user.queueId === 325) {
        gameType = "All Random games";
      } else if (user.queueId === 400) {
        gameType = "5v5 Draft Pick";
      } else if (user.queueId === 420) {
        gameType = "5v5 Ranked Solo";
      } else if (user.queueId === 430) {
        gameType = "5v5 Blind Pick";
      } else if (user.queueId === 440) {
        gameType = "5v5 Ranked Flex";
      } else if (user.queueId === 450) {
        gameType = "5v5 ARAM";
      } else if (user.queueId === 600) {
        gameType = "Blood Hunt Assassin";
      } else if (user.queueId === 610) {
        gameType = "Dark Star: Singularity";
      } else if (user.queueId === 700) {
        gameType = "Clash";
      } else if (user.queueId === 830) {
        gameType = "Co-op vs. AI Intro Bot";
      } else if (user.queueId === 840) {
        gameType = "Co-op vs. AI Beginner Bot";
      } else if (user.queueId === 850) {
        gameType = "Co-op vs. AI Intermediate Bot";
      } else if (user.queueId === 900) {
        gameType = "ARURF";
      } else if (user.queueId === 910) {
        gameType = "Ascension";
      } else if (user.queueId === 920) {
        gameType = "Legend of the Poro King";
      } else if (user.queueId === 940) {
        gameType = "Nexus Siege";
      } else if (user.queueId === 950) {
        gameType = "Doom Bots Voting";
      } else if (user.queueId === 960) {
        gameType = "Doom Bots Standard";
      } else if (user.queueId === 980) {
        gameType = "Star Guardian Invasion: Normal";
      } else if (user.queueId === 990) {
        gameType = "Star Guardian Invasion: Onslaught";
      } else if (user.queueId === 1000) {
        gameType = "PROJECT: Hunters";
      } else if (user.queueId === 1010) {
        gameType = "Snow ARURF";
      } else if (user.queueId === 1020) {
        gameType = "One for All";
      } else if (user.queueId === 1030) {
        gameType = "Oddyssey Extraction: Intro";
      } else if (user.queueId === 1040) {
        gameType = "Oddyssey Extraction: Cadet";
      } else if (user.queueId === 1050) {
        gameType = "Oddyssey Extraction: Crewmember";
      } else if (user.queueId === 1060) {
        gameType = "Oddyssey Extraction: Captain";
      } else if (user.queueId === 1070) {
        gameType = "Oddyssey Extraction: Onslaught";
      } else if (user.queueId === 1090) {
        gameType = "Teamfight Tactics games";
      } else if (user.queueId === 1100) {
        gameType = "Ranked Teamfight Tactics";
      } else if (user.queueId === 1110) {
        gameType = "Teamfight Tactics Tutorial";
      } else if (user.queueId === 1111) {
        gameType = "Teamfight Tactics test";
      } else if (user.queueId === 1300) {
        gameType = "Nexus Blitz";
      } else if (user.queueId === 1400) {
        gameType = "Ultimate Spellbook games";
      } else if (user.queueId === 1900) {
        gameType = "Pick URF";
      } else if (user.queueId === 2000) {
        gameType = "Tutorial 1";
      } else if (user.queueId === 2010) {
        gameType = "Tutorial 2";
      } else if (user.queueId === 2020) {
        gameType = "Tutorial 3";
      } else {
        gameType = "Unknown";
      }
      let endDate = new Date(user.gameEndTimestamp);
      let endDateString = endDate.toLocaleString();
      console.log(participant);
      return (
        <div
          key={Math.floor(Math.random() * 100)}
          className="relative w-full p-2 mb-4 bg-violet-800/40 rounded-md"
        >
          <p className="text-center relative font-semibold">
            {gameType} • {(user.gameDuration - (user.gameDuration % 60)) / 60} min
          </p>
          <p className="text-center relative italic">{endDateString}</p>
          <div className="bg-violet-700/50 p-2 mt-1 rounded-md">
            <img
              src={`https://ddragon.leagueoflegends.com/cdn/12.8.1/img/champion/${
                championWithId[participant.championId]
              }.png`}
              alt=""
              className="relative rounded-md"
              width="50"
              height="50"
            />
            <p className="absolute text-lg left-20 top-16">
              {participant.kills}/{participant.deaths}/{participant.assists}
            </p>
            <p className="absolute left-20 top-20">
              <p className="relative top-2">{participant.lane.toLowerCase()}</p>
            </p>
            <div className="inline-grid grid-cols-7 gap-2 mt-2">
              <img
                src={
                  participant.item0 !== 0 &&
                  `https://ddragon.leagueoflegends.com/cdn/12.8.1/img/item/${participant.item0}.png`
                }
                alt=""
                width="30"
                height="30"
                className="bg-gray-900"
              />
              <img
                src={
                  participant.item1 !== 0 &&
                  `https://ddragon.leagueoflegends.com/cdn/12.8.1/img/item/${participant.item1}.png`
                }
                alt=""
                width="30"
                height="30"
                className="bg-gray-900"
              />
              <img
                src={
                  participant.item2 !== 0 &&
                  `https://ddragon.leagueoflegends.com/cdn/12.8.1/img/item/${participant.item2}.png`
                }
                alt=""
                width="30"
                height="30"
                className="bg-gray-900"
              />
              <img
                src={
                  participant.item3 !== 0 &&
                  `https://ddragon.leagueoflegends.com/cdn/12.8.1/img/item/${participant.item3}.png`
                }
                alt=""
                width="30"
                height="30"
                className="bg-gray-900"
              />
              <img
                src={
                  participant.item4 !== 0 &&
                  `https://ddragon.leagueoflegends.com/cdn/12.8.1/img/item/${participant.item4}.png`
                }
                alt=""
                width="30"
                height="30"
                className="bg-gray-900"
              />
              <img
                src={
                  participant.item5 !== 0 &&
                  `https://ddragon.leagueoflegends.com/cdn/12.8.1/img/item/${participant.item5}.png`
                }
                alt=""
                width="30"
                height="30"
                className="bg-gray-900"
              />
              <img
                src={
                  participant.item6 !== 0 &&
                  `https://ddragon.leagueoflegends.com/cdn/12.8.1/img/item/${participant.item6}.png`
                }
                alt=""
                width="30"
                height="30"
                className="bg-gray-900"
              />
            </div>
            <p>{participant.summonerName}</p>
          </div>
        </div>
      );
    }
  });
}

export default MatchRender;
