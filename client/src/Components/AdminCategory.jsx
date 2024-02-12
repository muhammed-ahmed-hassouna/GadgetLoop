import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminCategory = () => {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState("");

  // useEffect(() => {
  //   const fetchCategories = async () => {
  //     try {
  //       const response = await axios.get(
  //         "http://localhost:5000/api/categories"
  //       );
  //       setCategories(response.data);
  //     } catch (error) {
  //       console.error("Error fetching categories", error);
  //     }
  //   };

  //   fetchCategories();
  // }, []);

  const handleAddCategory = async (e) => {
    e.preventDefault();

    // try {
    //   const response = await axios.post(
    //     "http://localhost:5000/api/categories",
    //     { name: newCategory }
    //   );
    //   setCategories([...categories, response.data]);
    //   setNewCategory("");
    // } catch (error) {
    //   console.error("Error adding category", error);
    // }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Categories</h2>
      <form onSubmit={handleAddCategory} className="mb-4">
        <input
          type="text"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          placeholder="New Category"
          className="p-2 border border-gray-300 mr-2"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Category
        </button>
      </form>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default AdminCategory;
