import React from "react";
import { Link } from "react-router-dom";

const SearchCard = (props) => {
  return (
    <
    >
      {props.dataOfSearch.map((item) => (
        <div className="osama w-full border border-b-2">
        <Link to={`/ProductDetails/${item.id}`}>

          <div
            key={item.id}
            className="osama relative flex w-full items-center overflow-hidden bg-white p-4 shadow hover:shadow-md"
          >
            <img className=" h-12 w-12 shrink-0" src={require(`../../../server/imeges/${item.image_url}`)}></img>
            <div className="ml-3">
              <p className="font-medium text-gray-800">{item.product_name}</p>
              <p className="text-sm text-gray-600">
                {item.model}
              </p>
            </div>
          </div>
          </Link>

        </div>
      ))}
    </>
  );
};

export default SearchCard;
