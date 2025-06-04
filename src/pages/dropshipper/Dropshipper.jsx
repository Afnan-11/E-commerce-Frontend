"use client"

import { useState } from "react"

const Dropshipper = () => {
  const [activeTab, setActiveTab] = useState("overview")
  const [showAddProduct, setShowAddProduct] = useState(false)

  // Mock data
  const stats = [
    { title: "Total Revenue", value: "$45,231.89", change: "+20.1%", color: "green" },
    { title: "Active Products", value: "2,350", change: "+180", color: "blue" },
    { title: "Pending Orders", value: "573", change: "+19%", color: "orange" },
    { title: "Profit Margin", value: "24.8%", change: "-2.1%", color: "red" },
  ]

  const recentOrders = [
    { id: "#3210", customer: "John Doe", product: "Wireless Headphones", amount: "$89.99", status: "Processing" },
    { id: "#3209", customer: "Sarah Smith", product: "Smart Watch", amount: "$199.99", status: "Shipped" },
    { id: "#3208", customer: "Mike Johnson", product: "Phone Case", amount: "$24.99", status: "Delivered" },
    { id: "#3207", customer: "Emma Wilson", product: "Bluetooth Speaker", amount: "$79.99", status: "Processing" },
  ]

  const products = [
    { name: "Wireless Earbuds", price: "$49.99", stock: "In Stock", sales: 1234, status: "Active" },
    { name: "Smart Phone Case", price: "$24.99", stock: "Low Stock", sales: 987, status: "Active" },
    { name: "Fitness Tracker", price: "$89.99", stock: "In Stock", sales: 756, status: "Active" },
    { name: "Bluetooth Speaker", price: "$79.99", stock: "Out of Stock", sales: 543, status: "Inactive" },
  ]

  const suppliers = [
    { name: "TechSource Co.", products: 145, rating: 4.8, location: "China", status: "Active" },
    { name: "Global Electronics", products: 89, rating: 4.6, location: "USA", status: "Active" },
    { name: "Fashion Hub", products: 234, rating: 4.9, location: "Turkey", status: "Pending" },
  ]

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "delivered":
        return "#10b981"
      case "shipped":
        return "#3b82f6"
      case "processing":
        return "#f59e0b"
      case "active":
        return "#10b981"
      case "inactive":
        return "#ef4444"
      case "pending":
        return "#f59e0b"
      default:
        return "#6b7280"
    }
  }

  const getStockColor = (stock) => {
    switch (stock.toLowerCase()) {
      case "in stock":
        return "#10b981"
      case "low stock":
        return "#f59e0b"
      case "out of stock":
        return "#ef4444"
      default:
        return "#6b7280"
    }
  }

  const cardStyle = {
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    padding: "24px",
    marginBottom: "16px",
  }

  const buttonStyle = {
    padding: "8px 16px",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "500",
    transition: "all 0.2s",
  }

  const primaryButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#3b82f6",
    color: "white",
  }

  const outlineButtonStyle = {
    ...buttonStyle,
    backgroundColor: "transparent",
    color: "#374151",
    border: "1px solid #d1d5db",
  }

  const tabStyle = {
    padding: "12px 24px",
    border: "none",
    backgroundColor: "transparent",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "500",
    borderBottom: "2px solid transparent",
  }

  const activeTabStyle = {
    ...tabStyle,
    borderBottom: "2px solid #3b82f6",
    color: "#3b82f6",
  }

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    backgroundColor: "white",
  }

  const thStyle = {
    padding: "12px",
    textAlign: "left",
    borderBottom: "1px solid #e5e7eb",
    fontWeight: "600",
    color: "#374151",
  }

  const tdStyle = {
    padding: "12px",
    borderBottom: "1px solid #e5e7eb",
    color: "#6b7280",
  }

  const badgeStyle = {
    padding: "4px 8px",
    borderRadius: "12px",
    fontSize: "12px",
    fontWeight: "500",
    color: "white",
  }

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f9fafb" }}>
      {/* Header */}
      <header style={{ backgroundColor: "white", borderBottom: "1px solid #e5e7eb" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 16px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "64px" }}>
            <h1 style={{ fontSize: "24px", fontWeight: "bold", color: "#111827", margin: 0 }}>🚀 DropShip Pro</h1>
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <button style={outlineButtonStyle}>🔔 Notifications</button>
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  backgroundColor: "#3b82f6",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                DS
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "32px 16px" }}>
        <div style={{ marginBottom: "32px" }}>
          <h2 style={{ fontSize: "28px", fontWeight: "bold", color: "#111827", margin: 0 }}>
            Welcome back, Dropshipper! 👋
          </h2>
          <p style={{ color: "#6b7280", marginTop: "8px" }}>
            Here's what's happening with your dropshipping business today.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div style={{ display: "flex", marginBottom: "24px", borderBottom: "1px solid #e5e7eb" }}>
          {["overview", "products", "orders", "suppliers"].map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)} style={activeTab === tab ? activeTabStyle : tabStyle}>
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div>
            {/* Stats Cards */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "24px",
                marginBottom: "32px",
              }}
            >
              {stats.map((stat, index) => (
                <div key={index} style={cardStyle}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "8px",
                    }}
                  >
                    <h3 style={{ fontSize: "14px", fontWeight: "500", color: "#6b7280", margin: 0 }}>{stat.title}</h3>
                    <span style={{ fontSize: "20px" }}>💰</span>
                  </div>
                  <div style={{ fontSize: "24px", fontWeight: "bold", color: "#111827", marginBottom: "4px" }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: "12px", color: stat.color === "green" ? "#10b981" : "#ef4444" }}>
                    {stat.color === "green" ? "↗️" : "↘️"} {stat.change} from last month
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "24px" }}>
              {/* Recent Orders */}
              <div style={cardStyle}>
                <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#111827", marginBottom: "16px" }}>
                  📦 Recent Orders
                </h3>
                <div style={{ space: "16px" }}>
                  {recentOrders.map((order) => (
                    <div
                      key={order.id}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "12px 0",
                        borderBottom: "1px solid #f3f4f6",
                      }}
                    >
                      <div>
                        <p style={{ fontWeight: "500", color: "#111827", margin: 0 }}>{order.customer}</p>
                        <p style={{ fontSize: "12px", color: "#6b7280", margin: 0 }}>{order.product}</p>
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <p style={{ fontWeight: "500", color: "#111827", margin: 0 }}>{order.amount}</p>
                        <span
                          style={{
                            ...badgeStyle,
                            backgroundColor: getStatusColor(order.status),
                          }}
                        >
                          {order.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div style={cardStyle}>
                <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#111827", marginBottom: "16px" }}>
                  ⚡ Quick Actions
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <button style={{ ...primaryButtonStyle, backgroundColor: "#3b82f6" }}>➕ Add New Product</button>
                  <button style={{ ...primaryButtonStyle, backgroundColor: "#10b981" }}>📦 Process Orders</button>
                  <button style={{ ...primaryButtonStyle, backgroundColor: "#f59e0b" }}>🌍 Find Suppliers</button>
                  <button style={{ ...primaryButtonStyle, backgroundColor: "#8b5cf6" }}>📊 View Analytics</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Products Tab */}
        {activeTab === "products" && (
          <div>
            <div
              style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}
            >
              <div>
                <h3 style={{ fontSize: "20px", fontWeight: "600", color: "#111827", margin: 0 }}>
                  📦 Product Management
                </h3>
                <p style={{ color: "#6b7280", margin: 0 }}>Manage your dropshipping products</p>
              </div>
              <button onClick={() => setShowAddProduct(true)} style={primaryButtonStyle}>
                ➕ Add Product
              </button>
            </div>

            {/* Add Product Modal */}
            {showAddProduct && (
              <div
                style={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 1000,
                }}
              >
                <div
                  style={{
                    backgroundColor: "white",
                    padding: "24px",
                    borderRadius: "8px",
                    width: "100%",
                    maxWidth: "400px",
                  }}
                >
                  <h3 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "16px" }}>Add New Product</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    <input
                      type="text"
                      placeholder="Product Name"
                      style={{
                        padding: "8px 12px",
                        border: "1px solid #d1d5db",
                        borderRadius: "6px",
                        fontSize: "14px",
                      }}
                    />
                    <input
                      type="number"
                      placeholder="Price"
                      style={{
                        padding: "8px 12px",
                        border: "1px solid #d1d5db",
                        borderRadius: "6px",
                        fontSize: "14px",
                      }}
                    />
                    <select
                      style={{
                        padding: "8px 12px",
                        border: "1px solid #d1d5db",
                        borderRadius: "6px",
                        fontSize: "14px",
                      }}
                    >
                      <option>Select Supplier</option>
                      <option>TechSource Co.</option>
                      <option>Global Electronics</option>
                      <option>Fashion Hub</option>
                    </select>
                    <textarea
                      placeholder="Product Description"
                      rows={3}
                      style={{
                        padding: "8px 12px",
                        border: "1px solid #d1d5db",
                        borderRadius: "6px",
                        fontSize: "14px",
                        resize: "vertical",
                      }}
                    />
                  </div>
                  <div style={{ display: "flex", justifyContent: "flex-end", gap: "12px", marginTop: "16px" }}>
                    <button onClick={() => setShowAddProduct(false)} style={outlineButtonStyle}>
                      Cancel
                    </button>
                    <button onClick={() => setShowAddProduct(false)} style={primaryButtonStyle}>
                      Add Product
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Products Table */}
            <div style={cardStyle}>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thStyle}>Product</th>
                    <th style={thStyle}>Price</th>
                    <th style={thStyle}>Stock</th>
                    <th style={thStyle}>Sales</th>
                    <th style={thStyle}>Status</th>
                    <th style={thStyle}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product, index) => (
                    <tr key={index}>
                      <td style={tdStyle}>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                          <span style={{ fontSize: "20px" }}>📦</span>
                          <span style={{ fontWeight: "500", color: "#111827" }}>{product.name}</span>
                        </div>
                      </td>
                      <td style={tdStyle}>{product.price}</td>
                      <td style={tdStyle}>
                        <span
                          style={{
                            ...badgeStyle,
                            backgroundColor: getStockColor(product.stock),
                          }}
                        >
                          {product.stock}
                        </span>
                      </td>
                      <td style={tdStyle}>{product.sales}</td>
                      <td style={tdStyle}>
                        <span
                          style={{
                            ...badgeStyle,
                            backgroundColor: getStatusColor(product.status),
                          }}
                        >
                          {product.status}
                        </span>
                      </td>
                      <td style={tdStyle}>
                        <div style={{ display: "flex", gap: "8px" }}>
                          <button style={{ ...outlineButtonStyle, padding: "4px 8px" }}>👁️</button>
                          <button style={{ ...outlineButtonStyle, padding: "4px 8px" }}>✏️</button>
                          <button style={{ ...outlineButtonStyle, padding: "4px 8px" }}>🗑️</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Orders Tab */}
        {activeTab === "orders" && (
          <div>
            <div
              style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}
            >
              <div>
                <h3 style={{ fontSize: "20px", fontWeight: "600", color: "#111827", margin: 0 }}>
                  🛒 Order Management
                </h3>
                <p style={{ color: "#6b7280", margin: 0 }}>Track and manage customer orders</p>
              </div>
              <div style={{ display: "flex", gap: "12px" }}>
                <button style={outlineButtonStyle}>Export Orders</button>
                <button style={outlineButtonStyle}>🔍 Filter</button>
              </div>
            </div>

            <div style={cardStyle}>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thStyle}>Order ID</th>
                    <th style={thStyle}>Customer</th>
                    <th style={thStyle}>Product</th>
                    <th style={thStyle}>Amount</th>
                    <th style={thStyle}>Status</th>
                    <th style={thStyle}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {recentOrders.map((order) => (
                    <tr key={order.id}>
                      <td style={{ ...tdStyle, fontWeight: "500", color: "#111827" }}>{order.id}</td>
                      <td style={tdStyle}>{order.customer}</td>
                      <td style={tdStyle}>{order.product}</td>
                      <td style={tdStyle}>{order.amount}</td>
                      <td style={tdStyle}>
                        <span
                          style={{
                            ...badgeStyle,
                            backgroundColor: getStatusColor(order.status),
                          }}
                        >
                          {order.status}
                        </span>
                      </td>
                      <td style={tdStyle}>
                        <div style={{ display: "flex", gap: "8px" }}>
                          <button style={{ ...outlineButtonStyle, padding: "4px 8px" }}>👁️</button>
                          <button style={{ ...outlineButtonStyle, padding: "4px 8px" }}>🚚</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Suppliers Tab */}
        {activeTab === "suppliers" && (
          <div>
            <div
              style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}
            >
              <div>
                <h3 style={{ fontSize: "20px", fontWeight: "600", color: "#111827", margin: 0 }}>
                  🏭 Supplier Management
                </h3>
                <p style={{ color: "#6b7280", margin: 0 }}>Manage your dropshipping suppliers</p>
              </div>
              <button style={primaryButtonStyle}>➕ Add Supplier</button>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "24px",
              }}
            >
              {suppliers.map((supplier, index) => (
                <div key={index} style={cardStyle}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "16px",
                    }}
                  >
                    <h4 style={{ fontSize: "18px", fontWeight: "600", color: "#111827", margin: 0 }}>
                      {supplier.name}
                    </h4>
                    <span
                      style={{
                        ...badgeStyle,
                        backgroundColor: getStatusColor(supplier.status),
                      }}
                    >
                      {supplier.status}
                    </span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <span style={{ color: "#6b7280" }}>Products</span>
                      <span style={{ fontWeight: "500", color: "#111827" }}>{supplier.products}</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <span style={{ color: "#6b7280" }}>Rating</span>
                      <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                        <span>⭐</span>
                        <span style={{ fontWeight: "500", color: "#111827" }}>{supplier.rating}</span>
                      </div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <span style={{ color: "#6b7280" }}>Location</span>
                      <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                        <span>🌍</span>
                        <span style={{ fontWeight: "500", color: "#111827" }}>{supplier.location}</span>
                      </div>
                    </div>
                    <div style={{ paddingTop: "12px", borderTop: "1px solid #f3f4f6" }}>
                      <button style={{ ...outlineButtonStyle, width: "100%" }}>View Products</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export default Dropshipper
