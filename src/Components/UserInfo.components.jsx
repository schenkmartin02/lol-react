import React, { useState, useEffect } from "react";
import axios from "axios";
import League from "./League.components";

function UserInfo({ api, region, data }) {
  const [leagues, setLeagues] = useState([]);

  useEffect(() => {
    searchLeague();
  }, [data]);

  function searchLeague(event) {
    var APICallString =
      "https://" +
      region +
      ".api.riotgames.com/lol/league/v4/entries/by-summoner/" +
      data.id +
      "?api_key=" +
      api;

    axios
      .get(APICallString)
      .then(function (response) {
        setLeagues(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className="basis-2/6 bg-violet-900/40 m-3 p-5 rounded-md grid justify-items-center h-fit">
      <div className="text-center p-2">
        <img
          src={`https://ddragon.leagueoflegends.com/cdn/12.8.1/img/profileicon/${data.profileIconId}.png`}
          alt=""
          className="rounded-md"
          width="150"
          height="150"
        />
        <p className="mt-2 text-2xl font-bold">{data.name}</p>
        <p className="italic">Level: {data.summonerLevel}</p>
        <League data={leagues} />
      </div>
    </div>
  );
}

export default UserInfo;
