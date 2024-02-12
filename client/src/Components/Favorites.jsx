import React, { useState, useEffect } from "react";
import axios from "axios";

const Favorites = ({ showFavorites }) => {
  const [favoriteData, setFavoriteData] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/favorites");
        setFavoriteData(response.data);
      } catch (error) {
        console.error("Error fetching favorites", error);
      }
    };

    if (showFavorites) {
      fetchFavorites();
    }
  }, [showFavorites]);

  return (
    <div
      className={`grid gap-4 grid-cols-1 ${showFavorites ? "block" : "hidden"}`}
    >
      {favoriteData.map((favorite, index) => (
        <div className="bg-white p-4 border rounded shadow" key={index}>
          <p>{favorite.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Favorites;
