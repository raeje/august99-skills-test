import React, { useState, useEffect } from "react";
import { getLaunchData } from "../spacex_api";
import FlightCard from "./FlightCard";

const Main = () => {
  const [launchData, setLaunchData] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await getLaunchData();
      setLaunchData(response);
      console.log(response);
    })();
  }, []);

  return (
    <div className="w-screen h-screen px-20 py-10 bg-white lex place-items-center m-auto">
      {/* Content */}
      <div className="w-full h-full bg-gray-100 flex flex-col gap-4 px-40 py-10 overflow-auto">
        {/* Search Bar */}
        <div>
          <input
            type="text"
            placeholder="Enter keywords"
            className="w-full p-2"
          />
        </div>

        {/* Flights */}
        <div className="bg-white flex flex-col p-10 gap-4">
          {launchData &&
            launchData.map((flightData) => {
              return <FlightCard data={flightData} key={flightData.id} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Main;
