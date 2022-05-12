import React, { useEffect, useState } from "react";
import axios from "axios";
import Champion from "./Champion.compontents";

function Champions({ api, region, data }) {
  const [champion, setChampion] = useState([]);
  useEffect(() => {
    searchChampion();
  }, [data]);

  function searchChampion() {
    var APICallString =
      "https://" +
      region +
      ".api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/" +
      data.id +
      "?api_key=" +
      api;

    axios
      .get(APICallString)
      .then(function (response) {
        setChampion(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className="basis-2/6 bg-violet-900/40 m-3 p-5 rounded-md h-fit">
      <Champion key={champion.length} data={champion} />
    </div>
  );
}

export default Champions;
