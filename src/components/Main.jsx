import React, { useState, useEffect } from "react";
import { getLaunchData } from "../spacex_api";
import FlightCard from "./FlightCard";

const Main = () => {
  const [launchData, setLaunchData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await getLaunchData();
      setLaunchData(response);
    })();
  }, []);

  const renderFlights = (flights) => {
    return flights?.map((flightData) => {
      return <FlightCard data={flightData} key={flightData.id} />;
    });
  };

  const handleSearch = (e) => {
    const result = launchData.filter((flight) =>
      flight.name.toUpperCase().includes(e.target.value.toUpperCase())
    );
    setFilteredData(result);
  };

  return (
    <div className="w-screen h-screen px-20 py-10 bg-white flex place-items-center m-auto">
      {/* Content */}
      <div className="w-full h-full bg-gray-100 flex flex-col gap-4 p-2 md:px-40 md:py-10  overflow-auto">
        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Enter keywords"
            className="w-full px-4 py-2 rounded-lg"
            onChange={handleSearch}
          />

          {/* Search Count */}
          {filteredData ? (
            <span className="absolute right-4 top-2 text-gray-500 font-bold">
              {filteredData.length} results
            </span>
          ) : (
            ""
          )}
        </div>

        {/* Flights */}
        <div className="bg-white flex flex-col p-4 md:p-10 gap-4 rounded-lg">
          {filteredData
            ? renderFlights(filteredData)
            : renderFlights(launchData)}
        </div>
      </div>
    </div>
  );
};

export default Main;
