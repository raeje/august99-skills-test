import React from "react";

const getDateYear = (date) => {
  return date.substring(0, 4);
};
const FlightCard = ({ data }) => {
  return (
    <div className="flex gap-4 bg-white border-2 border-gray-50 p-4">
      {/* Image */}
      <img
        src={data.links.patch.small}
        alt="small-patch"
        className="w-20 h-20"
      />
      {/* Flight Details */}
      <div className="flex flex-col gap-2">
        {/* Header */}
        <div className="font-bold flex gap-2 text-lg">
          <span>{data.flight_number}:</span>
          <span>{data.name}</span>
          <span>({getDateYear(data.date_local)})</span>
        </div>

        <span className="text-sm text-gray-500">Details: {data.details}</span>
      </div>
    </div>
  );
};

export default FlightCard;
