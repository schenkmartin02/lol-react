import React, { useEffect } from "react";

function League({ data }) {
  useEffect(() => {});
  return (
    <div>
      {Object.keys(data).map(function (key) {
        return (
          <div key={data[key].leagueId} className="">
            {data[key].queueType === "RANKED_SOLO_5x5" && <p>Solo/Duo</p>}
            {data[key].queueType === "RANKED_FLEX_SR" && <p>Flex</p>}
            <img
              src={require(`./img/${data[key].tier.toLowerCase()}.png`)}
              alt={data[key].tier}
              width="150"
              height="150"
            />
            <p>
              {data[key].tier} - {data[key].rank}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default League;
