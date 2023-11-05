import React from "react";

const SearchCard = (props) => {
  return (
    <div
      id="osamaraed"
      className="flex flex-col mx-6 overflow-y-auto rounded-b-xl"
    >
      {props.dataOfSearch.map((item) => (
        <div className="osama w-full border border-b-2">
          <div
            key={item.id}
            className="osama relative flex w-full items-center overflow-hidden bg-white p-4 shadow hover:shadow-md"
          >
            <img className=" h-12 w-12 shrink-0" src={item.image}></img>
            <div className="ml-3">
              <p className="font-medium text-gray-800">{item.title}</p>
              <p className="text-sm text-gray-600">
                Scientology Publishing, UK
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchCard;
