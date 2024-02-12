import React from "react";
import axios from "axios";
import SearchCard from "./SearchCard";

const Search = ({ setOpenSearch, isOpenSearch }) => {

  const [searchInput, setSearchInput] = React.useState("");
  const [dataOfSearch, setdataOfSearch] = React.useState([]);

  // window.addEventListener("click", (event) => {
  //   // Check if the target element is one of the excluded components
  //   // const excludedComponent1 = document.getElementById("navBar");
  //   // const excludedComponent2 = document.getElementById("searchButton");
  //   // const excludedComponent3 = document.getElementById("SearchComponent");
  //   // const excludedComponent4 = document.getElementsByClassName("osama");
  //   const excludedComponent5 = document.getElementById("osamaraed");
  //   const excludedComponent6 = document.getElementById("default-search");

  //   if ( event.target !== excludedComponent5 && isOpenSearch == true) {
  //     if (event.target !== excludedComponent6 && isOpenSearch == true) {
  //       // if (event.target !== excludedComponent6 && isOpenSearch == true) {
  //         
  //       // }
  //     }
  //   }
  // });

  const handleSearch = (e) => {
    setSearchInput(e);
    axios
      .get(`http://localhost:3001/protduc/getall`)
      .then((response) => {
        const responseData = response.data;
        setdataOfSearch(responseData);
        console.log("dataOfSearch", dataOfSearch);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Search Input:", searchInput);
  };

  

  return (
    <>
    <button
    className="absolute top-2 right-4 text-[30px] text-white" 
    onClick={()=>{setOpenSearch(false)}}
     >X</button>
      <div
        id="SearchComponent"
        className=" bg-transparent flex flex-col w-7/12  h-96 content-center "
      >
        <h1 className="flex justify-center text-6xl text-white">
          What are you looking for?
        </h1>
        <form className="mx-5 mt-4" onSubmit={(e) => handleSubmit(e)}>
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only "
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 pl-10 text-sm  text-gray-900 border border-gray-300 rounded-xl bg-white focus:bg-white"
              placeholder="Search"
              required=""
              value={searchInput}
              onChange={(e) => handleSearch(e.target.value)}
              onClick={() => {
                setOpenSearch(true);
              }}
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
        <div
          id="osamaraed"
          className="flex flex-col mx-6 overflow-y-auto rounded-b-xl"
        >
          <SearchCard dataOfSearch={dataOfSearch} />
        </div>
      </div>
    </>
  );
};

export default Search;
