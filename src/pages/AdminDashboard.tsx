
import { useEffect, useState, useRef } from "react";
import type { FormEvent } from "react";
import { useNavigate } from "react-router-dom";

type Category = {
  id: number;
  name: string;
  description: string;
  image: string;
};

type Product = {
  id: number;
  name: string;
  description: string;
  category_id: number;
  category_name: string | null;
  image: string;
};

type Enquiry = {
  id: number;
  full_name: string;
  company_name: string;
  email: string;
  phone: string;
  destination: string;
  product_category: string;
  enquiry_details: string;
  status: "Pending" | "Replied" | "Closed";
  created_at: string;
};

function AdminDashboard() {
  const navigate = useNavigate();

  const categoryFormRef = useRef<HTMLElement | null>(null);
  const productFormRef = useRef<HTMLElement | null>(null);

  const [checking, setChecking] = useState(true);

  // Category states
  const [categories, setCategories] = useState<Category[]>([]);
  const [loadingCategories, setLoadingCategories] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const [editingId, setEditingId] = useState<number | null>(null);
  const [categoryMessage, setCategoryMessage] = useState("");
  const [duplicateCategoryId, setDuplicateCategoryId] =
  useState<number | null>(null);

  const CATEGORY_API = "http://localhost:5000/api/categories";

  // Product states
  const [products, setProducts] = useState<Product[]>([]);
  const [loadingProducts, setLoadingProducts] = useState(false);

  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productCategoryId, setProductCategoryId] = useState("");
  const [productImage, setProductImage] = useState("");

  const [editingProductId, setEditingProductId] = useState<number | null>(
    null
  );

  const [productMessage, setProductMessage] = useState("");
const [duplicateProductId, setDuplicateProductId] =
  useState<number | null>(null);

  const PRODUCT_API = "http://localhost:5000/api/products";
  // Enquiry Management states
const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
const [loadingEnquiries, setLoadingEnquiries] = useState(false);
const [enquiryMessage, setEnquiryMessage] = useState("");

const ENQUIRY_API = "http://localhost:5000/api/enquiries";

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    const adminUser = localStorage.getItem("adminUser");

    if (!token || !adminUser) {
      navigate("/admin-login", { replace: true });
      return;
    }

    setChecking(false);
    fetchCategories();
    fetchProducts();
    fetchEnquiries();
  }, [navigate]);

  // ================= CATEGORY MANAGEMENT =================

  const fetchCategories = async () => {
    setLoadingCategories(true);

    try {
      const response = await fetch(CATEGORY_API);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to load categories.");
      }

      setCategories(data);
    } catch (error) {
      setCategoryMessage(
        error instanceof Error
          ? error.message
          : "Unable to load categories."
      );
    } finally {
      setLoadingCategories(false);
    }
  };

  const resetCategoryForm = () => {
  setName("");
  setDescription("");
  setImage("");
  setEditingId(null);
  setDuplicateCategoryId(null);
};

  const handleCategorySubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    setCategoryMessage("");

    const token = localStorage.getItem("adminToken");

    if (!token) {
      navigate("/admin-login", { replace: true });
      return;
    }

    const categoryData = {
      name,
      description,
      image,
    };

    try {
      const response = await fetch(
        editingId ? `${CATEGORY_API}/${editingId}` : CATEGORY_API,
        {
          method: editingId ? "PUT" : "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(categoryData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
  setCategoryMessage(data.message || "Category operation failed.");

  setDuplicateCategoryId(
    data.exists && data.id ? Number(data.id) : null
  );

  return;
}

setDuplicateCategoryId(null);

      setCategoryMessage(data.message);
      resetCategoryForm();

      await fetchCategories();
      await fetchProducts();
    } catch (error) {
      setCategoryMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong."
      );
    }
  };

  const handleCategoryEdit = (category: Category) => {
  setEditingId(category.id);
  setName(category.name);
  setDescription(category.description || "");
  setImage(category.image || "");
  setCategoryMessage("");

  categoryFormRef.current?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

  const handleCategoryDelete = async (id: number) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this category?"
    );

    if (!confirmed) return;

    const token = localStorage.getItem("adminToken");

    if (!token) {
      navigate("/admin-login", { replace: true });
      return;
    }

    try {
      const response = await fetch(`${CATEGORY_API}/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to delete category.");
      }

      setCategoryMessage(data.message);

      await fetchCategories();
      await fetchProducts();

      if (editingId === id) {
        resetCategoryForm();
      }
    } catch (error) {
      setCategoryMessage(
        error instanceof Error
          ? error.message
          : "Unable to delete category."
      );
    }
  };

  // ================= PRODUCT MANAGEMENT =================

  const fetchProducts = async () => {
    setLoadingProducts(true);

    try {
      const response = await fetch(PRODUCT_API);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to load products.");
      }

      setProducts(data);
    } catch (error) {
      setProductMessage(
        error instanceof Error
          ? error.message
          : "Unable to load products."
      );
    } finally {
      setLoadingProducts(false);
    }
  };

  

  // ================= ENQUIRY MANAGEMENT =================

  const fetchEnquiries = async () => {
    setLoadingEnquiries(true);
    setEnquiryMessage("");

    const token = localStorage.getItem("adminToken");

    if (!token) {
      navigate("/admin-login", { replace: true });
      return;
    }

    try {
      const response = await fetch(ENQUIRY_API, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to load enquiries.");
      }

      setEnquiries(data);
    } catch (error) {
      setEnquiryMessage(
        error instanceof Error
          ? error.message
          : "Unable to load enquiries."
      );
    } finally {
      setLoadingEnquiries(false);
    }
  };

  const handleEnquiryStatusUpdate = async (
    id: number,
    status: Enquiry["status"]
  ) => {
    const token = localStorage.getItem("adminToken");

    if (!token) {
      navigate("/admin-login", { replace: true });
      return;
    }

    try {
      const response = await fetch(`${ENQUIRY_API}/${id}/status`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to update enquiry status."
        );
      }

      setEnquiryMessage(
        data.message || "Enquiry status updated successfully."
      );

      await fetchEnquiries();
    } catch (error) {
      setEnquiryMessage(
        error instanceof Error
          ? error.message
          : "Unable to update enquiry status."
      );
    }
  };

  // ================= RESET PRODUCT FORM =================

  const resetProductForm = () => {
    setProductName("");
    setProductDescription("");
    setProductCategoryId("");
    setProductImage("");
    setEditingProductId(null);
    setDuplicateProductId(null);
  };


  const handleProductSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    setProductMessage("");

    const token = localStorage.getItem("adminToken");

    if (!token) {
      navigate("/admin-login", { replace: true });
      return;
    }

    const productData = {
      name: productName,
      description: productDescription,
      category_id: Number(productCategoryId),
      image: productImage,
    };

    try {
      const response = await fetch(
        editingProductId
          ? `${PRODUCT_API}/${editingProductId}`
          : PRODUCT_API,
        {
          method: editingProductId ? "PUT" : "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(productData),
        }
      );

      const data = await response.json();

    if (!response.ok) {
  setProductMessage(data.message || "Product operation failed.");

  setDuplicateProductId(
    data.exists && data.id ? Number(data.id) : null
  );

  return;
}

setDuplicateProductId(null);

      setProductMessage(data.message);

      resetProductForm();

      await fetchProducts();
    } catch (error) {
      setProductMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong."
      );
    }
  };

 const handleProductEdit = (product: Product) => {
  setEditingProductId(product.id);
  setProductName(product.name);
  setProductDescription(product.description || "");
  setProductCategoryId(String(product.category_id));
  setProductImage(product.image || "");
  setProductMessage("");

  productFormRef.current?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

  const handleProductDelete = async (id: number) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmed) return;

    const token = localStorage.getItem("adminToken");

    if (!token) {
      navigate("/admin-login", { replace: true });
      return;
    }

    try {
      const response = await fetch(`${PRODUCT_API}/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to delete product.");
      }

      setProductMessage(data.message);

      await fetchProducts();

      if (editingProductId === id) {
        resetProductForm();
      }
    } catch (error) {
      setProductMessage(
        error instanceof Error
          ? error.message
          : "Unable to delete product."
      );
    }
  };

  // ================= LOGOUT =================

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminUser");

    navigate("/admin-login", { replace: true });
  };

  if (checking) {
    return <div style={{ padding: "40px" }}>Checking admin access...</div>;
  }

  return (
    <main
      style={{
        padding: "40px",
        fontFamily: "Arial, sans-serif",
        background: "#f4f7fb",
        minHeight: "100vh",
      }}
    >
      {/* DASHBOARD HEADER */}

      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        <div>
          <h1>Marshal Do Export Admin Dashboard</h1>
          <p>Manage your website categories and products.</p>
        </div>

        <button onClick={handleLogout} style={logoutButtonStyle}>
          Logout
        </button>
      </header>

      <hr style={{ margin: "30px 0" }} />

      {/* ================= CATEGORY FORM ================= */}

      <section ref={categoryFormRef} style={sectionStyle}>
  <h2>{editingId ? "Edit Category" : "Add New Category"}</h2>

        <form
          onSubmit={handleCategorySubmit}
          style={{ display: "grid", gap: "15px", maxWidth: "650px" }}
        >
          <label>
            Category Name
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Enter category name"
              required
              style={inputStyle}
            />
          </label>

          <label>
            Description
            <textarea
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              placeholder="Enter category description"
              rows={4}
              style={inputStyle}
            />
          </label>

          <label>
            Image Path
            <input
              type="text"
              value={image}
              onChange={(event) => setImage(event.target.value)}
              placeholder="/images/Spices.jpg"
              style={inputStyle}
            />
          </label>

          <div style={{ display: "flex", gap: "10px" }}>
            <button type="submit" style={primaryButtonStyle}>
              {editingId ? "Update Category" : "Add Category"}
            </button>

            {editingId && (
              <button
                type="button"
                onClick={resetCategoryForm}
                style={secondaryButtonStyle}
              >
                Cancel
              </button>
            )}
          </div>
        </form>

        {categoryMessage && (
  <p style={messageStyle}>{categoryMessage}</p>
)}

{duplicateCategoryId !== null && (
  <button
    type="button"
    onClick={() => {
      const existingCategory = categories.find(
        (category) => category.id === duplicateCategoryId
      );

      if (existingCategory) {
        handleCategoryEdit(existingCategory);
      }
    }}
    style={secondaryButtonStyle}
  >
    Edit Existing Category
  </button>
)}
      </section>

      {/* ================= EXISTING CATEGORIES ================= */}

      <section style={sectionStyle}>
        <h2>Existing Categories</h2>

        {loadingCategories ? (
          <p>Loading categories...</p>
        ) : categories.length === 0 ? (
          <p>No categories found. Add your first category above.</p>
        ) : (
          <div style={{ display: "grid", gap: "15px" }}>
            {categories.map((category) => (
              <div key={category.id} style={itemStyle}>
                <div>
                  <h3 style={{ margin: "0 0 8px" }}>
                    {category.name}
                  </h3>

                  <p style={{ margin: "0 0 8px", color: "#555" }}>
                    {category.description}
                  </p>

                  <small style={{ color: "#777" }}>
                    Image: {category.image || "No image path"}
                  </small>
                </div>

                <div style={{ display: "flex", gap: "10px" }}>
                  <button
                    onClick={() => handleCategoryEdit(category)}
                    style={secondaryButtonStyle}
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleCategoryDelete(category.id)}
                    style={deleteButtonStyle}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* ================= PRODUCT FORM ================= */}

      <section ref={productFormRef} style={sectionStyle}>
  <h2>
    {editingProductId ? "Edit Product" : "Add New Product"}
  </h2>

        <form
          onSubmit={handleProductSubmit}
          style={{ display: "grid", gap: "15px", maxWidth: "650px" }}
        >
          <label>
            Product Name
            <input
              type="text"
              value={productName}
              onChange={(event) => setProductName(event.target.value)}
              placeholder="Enter product name"
              required
              style={inputStyle}
            />
          </label>

          <label>
            Product Description
            <textarea
              value={productDescription}
              onChange={(event) =>
                setProductDescription(event.target.value)
              }
              placeholder="Enter product description"
              rows={4}
              style={inputStyle}
            />
          </label>

          <label>
            Select Category
            <select
              value={productCategoryId}
              onChange={(event) =>
                setProductCategoryId(event.target.value)
              }
              required
              style={inputStyle}
            >
              <option value="">-- Select Category --</option>

              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </label>

          <label>
            Product Image Path
            <input
              type="text"
              value={productImage}
              onChange={(event) => setProductImage(event.target.value)}
              placeholder="/images/Spices.jpg"
              style={inputStyle}
            />
          </label>

          <div style={{ display: "flex", gap: "10px" }}>
            <button type="submit" style={primaryButtonStyle}>
              {editingProductId ? "Update Product" : "Add Product"}
            </button>

            {editingProductId && (
              <button
                type="button"
                onClick={resetProductForm}
                style={secondaryButtonStyle}
              >
                Cancel
              </button>
            )}
          </div>
        </form>

        {productMessage && (
  <p style={messageStyle}>{productMessage}</p>
)}

{duplicateProductId !== null && (
  <button
    type="button"
    onClick={() => {
      const existingProduct = products.find(
        (product) => product.id === duplicateProductId
      );

      if (existingProduct) {
        handleProductEdit(existingProduct);
      }
    }}
    style={secondaryButtonStyle}
  >
    Edit Existing Product
  </button>
)}
      </section>

      {/* ================= EXISTING PRODUCTS ================= */}

      <section style={sectionStyle}>
        <h2>Existing Products</h2>

        {loadingProducts ? (
          <p>Loading products...</p>
        ) : products.length === 0 ? (
          <p>No products found. Add your first product above.</p>
        ) : (
          <div style={{ display: "grid", gap: "15px" }}>
            {products.map((product) => (
              <div key={product.id} style={itemStyle}>
                <div>
                  <h3 style={{ margin: "0 0 8px" }}>
                    {product.name}
                  </h3>

                  <p style={{ margin: "0 0 8px", color: "#555" }}>
                    {product.description}
                  </p>

                  <p style={{ margin: "0 0 8px", color: "#174ea6" }}>
                    Category: {product.category_name || "Unassigned"}
                  </p>

                  <small style={{ color: "#777" }}>
                    Image: {product.image || "No image path"}
                  </small>
                </div>

                <div style={{ display: "flex", gap: "10px" }}>
                  <button
                    onClick={() => handleProductEdit(product)}
                    style={secondaryButtonStyle}
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleProductDelete(product.id)}
                    style={deleteButtonStyle}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
      
      {/* ================= ENQUIRY MANAGEMENT ================= */}

      <section style={sectionStyle}>
        <h2>Customer Enquiries</h2>

        {enquiryMessage && (
          <p style={{ ...messageStyle, color: "#c62828" }}>
            {enquiryMessage}
          </p>
        )}

        {loadingEnquiries ? (
          <p>Loading enquiries...</p>
        ) : enquiries.length === 0 ? (
          <p>No customer enquiries received yet.</p>
        ) : (
          <div style={{ display: "grid", gap: "15px" }}>
            {enquiries.map((enquiry) => (
              <div key={enquiry.id} style={itemStyle}>
                <div style={{ flex: 1, minWidth: "250px" }}>
                  <h3 style={{ margin: "0 0 10px" }}>
                    {enquiry.full_name}
                  </h3>

                  <p>
                    <strong>Company:</strong>{" "}
                    {enquiry.company_name || "Not provided"}
                  </p>

                  <p>
                    <strong>Email:</strong> {enquiry.email}
                  </p>

                  <p>
                    <strong>Phone:</strong> {enquiry.phone}
                  </p>

                  <p>
                    <strong>Destination:</strong>{" "}
                    {enquiry.destination || "Not provided"}
                  </p>

                  <p>
                    <strong>Product Category:</strong>{" "}
                    {enquiry.product_category}
                  </p>

                  <p>
                    <strong>Enquiry Details:</strong>
                  </p>

                  <p style={{ whiteSpace: "pre-wrap" }}>
                    {enquiry.enquiry_details}
                  </p>

                  
  <div style={{ marginTop: "15px" }}>
    <label>
      <strong>Update Status: </strong>

      <select
        value={enquiry.status}
        onChange={(event) =>
          handleEnquiryStatusUpdate(
            enquiry.id,
            event.target.value as Enquiry["status"]
          )
        }
        style={inputStyle}
      >
        <option value="Pending">Pending</option>
        <option value="Replied">Replied</option>
        <option value="Closed">Closed</option>
      </select>
    </label>
  </div>


                  <small style={{ color: "#777" }}>
                    Received:{" "}
                    {new Date(enquiry.created_at).toLocaleString()}
                  </small>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

    </main>
  );
}

// ================= STYLES =================

const sectionStyle: React.CSSProperties = {
  background: "#fff",
  padding: "25px",
  borderRadius: "12px",
  marginBottom: "30px",
  boxShadow: "0 3px 12px rgba(0,0,0,0.05)",
};

const itemStyle: React.CSSProperties = {
  border: "1px solid #e1e6ef",
  padding: "18px",
  borderRadius: "8px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "15px",
};

const inputStyle: React.CSSProperties = {
  display: "block",
  width: "100%",
  boxSizing: "border-box",
  padding: "12px",
  marginTop: "8px",
  border: "1px solid #ccd3df",
  borderRadius: "6px",
  fontSize: "14px",
};

const primaryButtonStyle: React.CSSProperties = {
  padding: "12px 20px",
  background: "#174ea6",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};

const secondaryButtonStyle: React.CSSProperties = {
  padding: "10px 18px",
  background: "#e8eef8",
  color: "#174ea6",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};

const deleteButtonStyle: React.CSSProperties = {
  padding: "10px 18px",
  background: "#fdeaea",
  color: "#c62828",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};

const logoutButtonStyle: React.CSSProperties = {
  padding: "10px 20px",
  background: "#c62828",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};

const messageStyle: React.CSSProperties = {
  marginTop: "15px",
  color: "#174ea6",
};

export default AdminDashboard;
