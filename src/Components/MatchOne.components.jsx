import React, { useState, useEffect } from "react";
import axios from "axios";
import MatchRender from "./MatchRender.components";

function MatchOne({ api, region, data, user }) {
  const [matchOne, setMatchOne] = useState([]);

  useEffect(() => {
    searchMatch();
  }, [data]);

  function searchMatch(event) {
    var APICallString =
      "https://" +
      region +
      ".api.riotgames.com/lol/match/v5/matches/" +
      user +
      "?api_key=" +
      api;

    axios
      .get(APICallString)
      .then(function (response) {
        setMatchOne(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return Object.keys(matchOne).map(function (key) {
    return (
      <MatchRender
        key={Math.floor(Math.random() * 100)}
        api={api}
        region={region}
        data={data}
        user={matchOne[key]}
      />
    );
  });
}

export default MatchOne;
