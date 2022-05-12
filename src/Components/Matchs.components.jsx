import React, { useState, useEffect } from "react";
import axios from "axios";
import MatchOne from "./MatchOne.components";

function MatchList({ api, region, data }) {
  const [match, setMatch] = useState([]);

  useEffect(() => {
    searchMatch();
  }, [data]);

  if (region === "eun1" || region === "euw1") {
    region = "europe";
  } else if (region === "na1") {
    region = "america";
  }

  function searchMatch(event) {
    var APICallString =
      "https://" +
      region +
      ".api.riotgames.com/lol/match/v5/matches/by-puuid/" +
      data.puuid +
      "/ids?start=0&count=5&api_key=" +
      api;

    axios
      .get(APICallString)
      .then(function (response) {
        setMatch(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div
      key={Math.floor(Math.random() * 100)}
      className="basis-2/6 bg-violet-900/40 m-3 p-5 rounded-md grid justify-items-center h-fit"
    >
      {Object.keys(match).map(function (key) {
        return (
          <MatchOne
            key={Math.floor(Math.random() * 100)}
            api={api}
            region={region}
            data={data}
            user={match[key]}
          />
        );
      })}
    </div>
  );
}

export default MatchList;
