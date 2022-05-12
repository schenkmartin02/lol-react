import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import UserInfo from "./Components/UserInfo.components";
import Champions from "./Components/Champions.components";
import MatchList from "./Components/Matchs.components";

function App() {
  const [searchField, setSearchField] = useState("");
  const [playerData, setPlayerData] = useState([]);
  const [region, setRegion] = useState("eun1");
  const [show, setShow] = useState(Boolean);
  const API_KEY = "RGAPI-7695ff9d-8f12-4cd4-aab1-681ea1db9a21";

  function summonerAlertShow() {
    document.getElementById("search").focus();
  }

  function searchPlayer(event) {
    if (searchField === "") {
      summonerAlertShow();
      return;
    }
    var APICallString =
      "https://" +
      region +
      ".api.riotgames.com/lol/summoner/v4/summoners/by-name/" +
      searchField +
      "?api_key=" +
      API_KEY;

    axios
      .get(APICallString)
      .then(function (response) {
        console.log(response.data);
        setPlayerData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className="bg-gray-900 w-screen h-full text-white">
      <div className="relative h-20 w-full bg-violet-800/50">
        <h1 className="absolute left-0 top-0 p-7 text-xl font-bold">LoL Players</h1>
        <div className="absolute right-0 top-0 p-5">
          <input
            className="p-2 rounded-lg text-black"
            placeholder="Search..."
            id="search"
            type="search"
            onChange={(e) => setSearchField(e.target.value)}
          />
          <select
            className="p-2 mx-2 bg-white rounded-lg text-black"
            onClick={(e) => setRegion(e.target.value)}
          >
            <option value="eun1">EUNE</option>
            <option value="euw1">EUW</option>
            <option value="na1">NA</option>
          </select>
          <button
            className="rounded-lg bg-sky-600 p-2 font-bold"
            onClick={(e) => {
              setShow(true);
              searchPlayer(e);
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="container mx-auto">
        {JSON.stringify(playerData) === "[]" && show ? (
          <p className="grid place-items-center h-screen text-2xl font-bold">
            Loading...
          </p>
        ) : (
          <div className="flex flex-row">
            {JSON.stringify(playerData) !== "[]" ? (
              <UserInfo api={API_KEY} region={region} data={playerData} />
            ) : (
              <></>
            )}
            {JSON.stringify(playerData) !== "[]" ? (
              <MatchList api={API_KEY} region={region} data={playerData} />
            ) : (
              <></>
            )}
            {JSON.stringify(playerData) !== "[]" ? (
              <Champions api={API_KEY} region={region} data={playerData} />
            ) : (
              <></>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
