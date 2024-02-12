// Product.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3001/protduc/getall");
        setProducts(response.data);
        console.log(response.data)
      } catch (error) {
        console.error("Error fetching products", error);
      }
    };

    fetchProducts();
  }, []);

  const handleDeleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/products/${id}`);
      // Remove the deleted product from the state
      setProducts(products.filter((product) => product.id !== id));
    } catch (error) {
      console.error("Error deleting product", error);
    }
  };

  const handleEditProduct = (product) => {
    setSelectedProduct(product);
  };

  const handleUpdateProduct = async (updatedProduct) => {
    try {
      await axios.put(
        `http://localhost:5000/api/products/${updatedProduct.id}`,
        updatedProduct
      );
      // Update the product in the state
      setProducts(
        products.map((product) =>
          product.id === updatedProduct.id ? updatedProduct : product
        )
      );
      setSelectedProduct(null);
    } catch (error) {
      console.error("Error updating product", error);
    }
  };

  const handleAddProduct = async (newProduct) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/products",
        newProduct
      );
      setProducts([...products, response.data]);
    } catch (error) {
      console.error("Error adding product", error);
    }
  };

  return (
    <>
      <div>
        <h2 className="text-2xl font-bold mb-4">Products</h2>
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Product Name</th>
              <th className="py-2 px-4 border-b">model</th>
              <th className="py-2 px-4 border-b">Price</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td className="py-2 px-4 border-b">{product.product_name}</td>
                <td className="py-2 px-4 border-b">{product.model}</td>
                <td className="py-2 px-4 border-b">{product.price}</td>
                <td className="py-2 px-4 border-b">
                  <button onClick={() => handleEditProduct(product)}>
                    Edit
                  </button>
                  <button onClick={() => handleDeleteProduct(product.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {selectedProduct && (
          <div className="modal">
            <h2>{selectedProduct.id ? "Edit Product" : "Add Product"}</h2>
            <input
              type="text"
              value={selectedProduct.name}
              onChange={(e) =>
                setSelectedProduct({ ...selectedProduct, name: e.target.value })
              }
              placeholder="Product Name"
            />
            <input
              type="text"
              value={selectedProduct.category}
              onChange={(e) =>
                setSelectedProduct({
                  ...selectedProduct,
                  category: e.target.value,
                })
              }
              placeholder="Category"
            />
            <input
              type="number"
              value={selectedProduct.price}
              onChange={(e) =>
                setSelectedProduct({
                  ...selectedProduct,
                  price: e.target.value,
                })
              }
              placeholder="Price"
            />
            <button
              onClick={() => {
                if (selectedProduct.id) {
                  handleUpdateProduct(selectedProduct);
                } else {
                  handleAddProduct(selectedProduct);
                }
              }}
            >
              {selectedProduct.id ? "Save Changes" : "Add Product"}
            </button>
            <button onClick={() => setSelectedProduct(null)}>Cancel</button>
          </div>
        )}
      </div>
    </>
  );
};

export default Product;
