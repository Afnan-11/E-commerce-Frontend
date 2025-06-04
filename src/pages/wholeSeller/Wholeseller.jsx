"use client"

import { useState } from "react"

const Wholesaler = () => {
  const [activeTab, setActiveTab] = useState("overview")
  const [showAddCustomer, setShowAddCustomer] = useState(false)
  const [showBulkOrder, setShowBulkOrder] = useState(false)

  // Mock data
  const stats = [
    { title: "Total Revenue", value: "$125,450.00", change: "+15.2%", color: "green", icon: "💰" },
    { title: "Active Retailers", value: "89", change: "+12", color: "blue", icon: "🏪" },
    { title: "Bulk Orders", value: "156", change: "+23%", color: "orange", icon: "📦" },
    { title: "Inventory Value", value: "$89,230.00", change: "+8.1%", color: "purple", icon: "📊" },
  ]

  const recentOrders = [
    {
      id: "#WO-3210",
      retailer: "Tech Store Plus",
      items: "25 items",
      amount: "$2,450.00",
      status: "Processing",
      date: "2024-01-15",
    },
    {
      id: "#WO-3209",
      retailer: "Electronics Hub",
      items: "50 items",
      amount: "$4,890.00",
      status: "Shipped",
      date: "2024-01-14",
    },
    {
      id: "#WO-3208",
      retailer: "Gadget World",
      items: "15 items",
      amount: "$1,250.00",
      status: "Delivered",
      date: "2024-01-13",
    },
    {
      id: "#WO-3207",
      retailer: "Mobile Center",
      items: "35 items",
      amount: "$3,200.00",
      status: "Processing",
      date: "2024-01-12",
    },
  ]

  const topRetailers = [
    { name: "Tech Store Plus", orders: 45, revenue: "$15,680.00", credit: "$5,000", status: "Active" },
    { name: "Electronics Hub", orders: 38, revenue: "$12,450.00", credit: "$3,500", status: "Active" },
    { name: "Gadget World", orders: 29, revenue: "$9,870.00", credit: "$2,000", status: "Active" },
    { name: "Mobile Center", orders: 22, revenue: "$7,650.00", credit: "$1,500", status: "Pending" },
  ]

  const inventory = [
    { product: "iPhone 15 Pro", stock: 150, reserved: 25, available: 125, price: "$899.00", category: "Smartphones" },
    {
      product: "Samsung Galaxy S24",
      stock: 200,
      reserved: 40,
      available: 160,
      price: "$749.00",
      category: "Smartphones",
    },
    { product: "MacBook Air M3", stock: 75, reserved: 15, available: 60, price: "$1,199.00", category: "Laptops" },
    { product: "iPad Pro 12.9", stock: 100, reserved: 20, available: 80, price: "$999.00", category: "Tablets" },
  ]

  const pricingTiers = [
    { tier: "Bronze", minOrder: "1-49 units", discount: "5%", retailers: 25 },
    { tier: "Silver", minOrder: "50-99 units", discount: "10%", retailers: 18 },
    { tier: "Gold", minOrder: "100-199 units", discount: "15%", retailers: 12 },
    { tier: "Platinum", minOrder: "200+ units", discount: "20%", retailers: 8 },
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

  const getTierColor = (tier) => {
    switch (tier.toLowerCase()) {
      case "bronze":
        return "#cd7f32"
      case "silver":
        return "#c0c0c0"
      case "gold":
        return "#ffd700"
      case "platinum":
        return "#e5e4e2"
      default:
        return "#6b7280"
    }
  }

  const cardStyle = {
    backgroundColor: "white",
    borderRadius: "12px",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    padding: "24px",
    marginBottom: "16px",
  }

  const buttonStyle = {
    padding: "10px 20px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "600",
    transition: "all 0.2s",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  }

  const primaryButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#3b82f6",
    color: "white",
  }

  const successButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#10b981",
    color: "white",
  }

  const warningButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#f59e0b",
    color: "white",
  }

  const outlineButtonStyle = {
    ...buttonStyle,
    backgroundColor: "transparent",
    color: "#374151",
    border: "2px solid #d1d5db",
  }

  const tabStyle = {
    padding: "12px 24px",
    border: "none",
    backgroundColor: "transparent",
    cursor: "pointer",
    fontSize: "15px",
    fontWeight: "600",
    borderBottom: "3px solid transparent",
    transition: "all 0.2s",
  }

  const activeTabStyle = {
    ...tabStyle,
    borderBottom: "3px solid #3b82f6",
    color: "#3b82f6",
    backgroundColor: "#eff6ff",
  }

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    backgroundColor: "white",
  }

  const thStyle = {
    padding: "16px 12px",
    textAlign: "left",
    borderBottom: "2px solid #e5e7eb",
    fontWeight: "700",
    color: "#374151",
    fontSize: "14px",
  }

  const tdStyle = {
    padding: "16px 12px",
    borderBottom: "1px solid #f3f4f6",
    color: "#6b7280",
    fontSize: "14px",
  }

  const badgeStyle = {
    padding: "6px 12px",
    borderRadius: "20px",
    fontSize: "12px",
    fontWeight: "600",
    color: "white",
    display: "inline-block",
  }

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f8fafc" }}>
      {/* Header */}
      <header
        style={{ backgroundColor: "white", borderBottom: "2px solid #e2e8f0", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}
      >
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "72px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <h1 style={{ fontSize: "28px", fontWeight: "bold", color: "#1e293b", margin: 0 }}>🏭 WholeSale Pro</h1>
              <span
                style={{
                  backgroundColor: "#3b82f6",
                  color: "white",
                  padding: "4px 12px",
                  borderRadius: "12px",
                  fontSize: "12px",
                  fontWeight: "600",
                }}
              >
                WHOLESALE
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <button style={outlineButtonStyle}>
                🔔 <span>Notifications</span>
              </button>
              <button style={primaryButtonStyle}>
                ⚙️ <span>Settings</span>
              </button>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: "#3b82f6",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "16px",
                }}
              >
                WS
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ maxWidth: "1400px", margin: "0 auto", padding: "32px 24px" }}>
        <div style={{ marginBottom: "32px" }}>
          <h2 style={{ fontSize: "32px", fontWeight: "bold", color: "#1e293b", margin: 0 }}>
            Welcome back, Wholesaler! 🎯
          </h2>
          <p style={{ color: "#64748b", marginTop: "8px", fontSize: "16px" }}>
            Manage your wholesale business, track bulk orders, and grow your retailer network.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div
          style={{
            display: "flex",
            marginBottom: "32px",
            borderBottom: "2px solid #e2e8f0",
            backgroundColor: "white",
            borderRadius: "12px 12px 0 0",
          }}
        >
          {["overview", "orders", "retailers", "inventory", "pricing"].map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)} style={activeTab === tab ? activeTabStyle : tabStyle}>
              {tab === "overview" && "📊"} {tab === "orders" && "📦"} {tab === "retailers" && "🏪"}{" "}
              {tab === "inventory" && "📋"} {tab === "pricing" && "💰"} {tab.charAt(0).toUpperCase() + tab.slice(1)}
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
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "24px",
                marginBottom: "32px",
              }}
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  style={{ ...cardStyle, background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)" }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "12px",
                    }}
                  >
                    <h3 style={{ fontSize: "14px", fontWeight: "600", color: "#64748b", margin: 0 }}>{stat.title}</h3>
                    <span style={{ fontSize: "24px" }}>{stat.icon}</span>
                  </div>
                  <div style={{ fontSize: "28px", fontWeight: "bold", color: "#1e293b", marginBottom: "8px" }}>
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontSize: "14px",
                      color: stat.color === "green" ? "#10b981" : "#ef4444",
                      fontWeight: "600",
                    }}
                  >
                    {stat.color === "green" ? "📈" : "📉"} {stat.change} from last month
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "24px", marginBottom: "32px" }}>
              {/* Recent Bulk Orders */}
              <div style={cardStyle}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "20px",
                  }}
                >
                  <h3 style={{ fontSize: "20px", fontWeight: "700", color: "#1e293b", margin: 0 }}>
                    📦 Recent Bulk Orders
                  </h3>
                  <button onClick={() => setShowBulkOrder(true)} style={primaryButtonStyle}>
                    ➕ New Order
                  </button>
                </div>
                <div style={{ overflowX: "auto" }}>
                  <table style={tableStyle}>
                    <thead>
                      <tr>
                        <th style={thStyle}>Order ID</th>
                        <th style={thStyle}>Retailer</th>
                        <th style={thStyle}>Items</th>
                        <th style={thStyle}>Amount</th>
                        <th style={thStyle}>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentOrders.slice(0, 4).map((order) => (
                        <tr key={order.id}>
                          <td style={{ ...tdStyle, fontWeight: "600", color: "#1e293b" }}>{order.id}</td>
                          <td style={tdStyle}>{order.retailer}</td>
                          <td style={tdStyle}>{order.items}</td>
                          <td style={{ ...tdStyle, fontWeight: "600", color: "#059669" }}>{order.amount}</td>
                          <td style={tdStyle}>
                            <span style={{ ...badgeStyle, backgroundColor: getStatusColor(order.status) }}>
                              {order.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Quick Actions */}
              <div style={cardStyle}>
                <h3 style={{ fontSize: "20px", fontWeight: "700", color: "#1e293b", marginBottom: "20px" }}>
                  ⚡ Quick Actions
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <button style={primaryButtonStyle}>
                    🏪 <span>Add New Retailer</span>
                  </button>
                  <button style={successButtonStyle}>
                    📦 <span>Process Orders</span>
                  </button>
                  <button style={warningButtonStyle}>
                    📊 <span>Update Inventory</span>
                  </button>
                  <button style={{ ...buttonStyle, backgroundColor: "#8b5cf6", color: "white" }}>
                    💰 <span>Set Pricing</span>
                  </button>
                  <button style={{ ...buttonStyle, backgroundColor: "#06b6d4", color: "white" }}>
                    📈 <span>View Reports</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Top Retailers */}
            <div style={cardStyle}>
              <h3 style={{ fontSize: "20px", fontWeight: "700", color: "#1e293b", marginBottom: "20px" }}>
                🏆 Top Performing Retailers
              </h3>
              <div
                style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "16px" }}
              >
                {topRetailers.map((retailer, index) => (
                  <div
                    key={index}
                    style={{
                      padding: "16px",
                      border: "2px solid #e2e8f0",
                      borderRadius: "8px",
                      backgroundColor: "#f8fafc",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "8px",
                      }}
                    >
                      <h4 style={{ fontSize: "16px", fontWeight: "600", color: "#1e293b", margin: 0 }}>
                        {retailer.name}
                      </h4>
                      <span style={{ ...badgeStyle, backgroundColor: getStatusColor(retailer.status) }}>
                        {retailer.status}
                      </span>
                    </div>
                    <div style={{ fontSize: "14px", color: "#64748b", marginBottom: "4px" }}>
                      Orders: <strong>{retailer.orders}</strong>
                    </div>
                    <div style={{ fontSize: "14px", color: "#64748b", marginBottom: "4px" }}>
                      Revenue: <strong style={{ color: "#059669" }}>{retailer.revenue}</strong>
                    </div>
                    <div style={{ fontSize: "14px", color: "#64748b" }}>
                      Credit Limit: <strong>{retailer.credit}</strong>
                    </div>
                  </div>
                ))}
              </div>
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
                <h3 style={{ fontSize: "24px", fontWeight: "700", color: "#1e293b", margin: 0 }}>
                  📦 Bulk Order Management
                </h3>
                <p style={{ color: "#64748b", margin: 0, fontSize: "16px" }}>Track and manage wholesale orders</p>
              </div>
              <div style={{ display: "flex", gap: "12px" }}>
                <button style={outlineButtonStyle}>📊 Export Orders</button>
                <button style={outlineButtonStyle}>🔍 Filter</button>
                <button onClick={() => setShowBulkOrder(true)} style={primaryButtonStyle}>
                  ➕ Create Bulk Order
                </button>
              </div>
            </div>

            {/* Bulk Order Modal */}
            {showBulkOrder && (
              <div
                style={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 1000,
                }}
              >
                <div
                  style={{
                    backgroundColor: "white",
                    padding: "32px",
                    borderRadius: "12px",
                    width: "100%",
                    maxWidth: "600px",
                    maxHeight: "80vh",
                    overflowY: "auto",
                  }}
                >
                  <h3 style={{ fontSize: "24px", fontWeight: "700", marginBottom: "20px", color: "#1e293b" }}>
                    Create Bulk Order
                  </h3>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "20px" }}>
                    <div>
                      <label style={{ display: "block", marginBottom: "8px", fontWeight: "600", color: "#374151" }}>
                        Retailer
                      </label>
                      <select
                        style={{
                          width: "100%",
                          padding: "12px",
                          border: "2px solid #d1d5db",
                          borderRadius: "8px",
                          fontSize: "14px",
                        }}
                      >
                        <option>Select Retailer</option>
                        <option>Tech Store Plus</option>
                        <option>Electronics Hub</option>
                        <option>Gadget World</option>
                      </select>
                    </div>
                    <div>
                      <label style={{ display: "block", marginBottom: "8px", fontWeight: "600", color: "#374151" }}>
                        Order Type
                      </label>
                      <select
                        style={{
                          width: "100%",
                          padding: "12px",
                          border: "2px solid #d1d5db",
                          borderRadius: "8px",
                          fontSize: "14px",
                        }}
                      >
                        <option>Regular Order</option>
                        <option>Rush Order</option>
                        <option>Scheduled Order</option>
                      </select>
                    </div>
                  </div>
                  <div style={{ marginBottom: "20px" }}>
                    <label style={{ display: "block", marginBottom: "8px", fontWeight: "600", color: "#374151" }}>
                      Products
                    </label>
                    <div style={{ border: "2px solid #d1d5db", borderRadius: "8px", padding: "16px" }}>
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "2fr 1fr 1fr auto",
                          gap: "12px",
                          alignItems: "center",
                          marginBottom: "12px",
                        }}
                      >
                        <select style={{ padding: "8px", border: "1px solid #d1d5db", borderRadius: "6px" }}>
                          <option>iPhone 15 Pro</option>
                          <option>Samsung Galaxy S24</option>
                          <option>MacBook Air M3</option>
                        </select>
                        <input
                          type="number"
                          placeholder="Quantity"
                          style={{ padding: "8px", border: "1px solid #d1d5db", borderRadius: "6px" }}
                        />
                        <input
                          type="text"
                          placeholder="Unit Price"
                          style={{ padding: "8px", border: "1px solid #d1d5db", borderRadius: "6px" }}
                        />
                        <button style={{ ...buttonStyle, backgroundColor: "#ef4444", color: "white", padding: "8px" }}>
                          🗑️
                        </button>
                      </div>
                      <button style={{ ...outlineButtonStyle, width: "100%" }}>➕ Add Product</button>
                    </div>
                  </div>
                  <div style={{ marginBottom: "20px" }}>
                    <label style={{ display: "block", marginBottom: "8px", fontWeight: "600", color: "#374151" }}>
                      Special Instructions
                    </label>
                    <textarea
                      placeholder="Any special delivery or handling instructions..."
                      rows={3}
                      style={{
                        width: "100%",
                        padding: "12px",
                        border: "2px solid #d1d5db",
                        borderRadius: "8px",
                        fontSize: "14px",
                        resize: "vertical",
                      }}
                    />
                  </div>
                  <div style={{ display: "flex", justifyContent: "flex-end", gap: "12px" }}>
                    <button onClick={() => setShowBulkOrder(false)} style={outlineButtonStyle}>
                      Cancel
                    </button>
                    <button onClick={() => setShowBulkOrder(false)} style={primaryButtonStyle}>
                      Create Order
                    </button>
                  </div>
                </div>
              </div>
            )}

            <div style={cardStyle}>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thStyle}>Order ID</th>
                    <th style={thStyle}>Retailer</th>
                    <th style={thStyle}>Items</th>
                    <th style={thStyle}>Amount</th>
                    <th style={thStyle}>Status</th>
                    <th style={thStyle}>Date</th>
                    <th style={thStyle}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {recentOrders.map((order) => (
                    <tr key={order.id}>
                      <td style={{ ...tdStyle, fontWeight: "600", color: "#1e293b" }}>{order.id}</td>
                      <td style={tdStyle}>{order.retailer}</td>
                      <td style={tdStyle}>{order.items}</td>
                      <td style={{ ...tdStyle, fontWeight: "600", color: "#059669" }}>{order.amount}</td>
                      <td style={tdStyle}>
                        <span style={{ ...badgeStyle, backgroundColor: getStatusColor(order.status) }}>
                          {order.status}
                        </span>
                      </td>
                      <td style={tdStyle}>{order.date}</td>
                      <td style={tdStyle}>
                        <div style={{ display: "flex", gap: "8px" }}>
                          <button style={{ ...outlineButtonStyle, padding: "6px 12px", fontSize: "12px" }}>
                            👁️ View
                          </button>
                          <button style={{ ...outlineButtonStyle, padding: "6px 12px", fontSize: "12px" }}>
                            📝 Edit
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Retailers Tab */}
        {activeTab === "retailers" && (
          <div>
            <div
              style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}
            >
              <div>
                <h3 style={{ fontSize: "24px", fontWeight: "700", color: "#1e293b", margin: 0 }}>
                  🏪 Retailer Management
                </h3>
                <p style={{ color: "#64748b", margin: 0, fontSize: "16px" }}>Manage your retail partners</p>
              </div>
              <button onClick={() => setShowAddCustomer(true)} style={primaryButtonStyle}>
                ➕ Add Retailer
              </button>
            </div>

            {/* Add Customer Modal */}
            {showAddCustomer && (
              <div
                style={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 1000,
                }}
              >
                <div
                  style={{
                    backgroundColor: "white",
                    padding: "32px",
                    borderRadius: "12px",
                    width: "100%",
                    maxWidth: "500px",
                  }}
                >
                  <h3 style={{ fontSize: "24px", fontWeight: "700", marginBottom: "20px", color: "#1e293b" }}>
                    Add New Retailer
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                    <input
                      type="text"
                      placeholder="Business Name"
                      style={{
                        padding: "12px",
                        border: "2px solid #d1d5db",
                        borderRadius: "8px",
                        fontSize: "14px",
                      }}
                    />
                    <input
                      type="text"
                      placeholder="Contact Person"
                      style={{
                        padding: "12px",
                        border: "2px solid #d1d5db",
                        borderRadius: "8px",
                        fontSize: "14px",
                      }}
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      style={{
                        padding: "12px",
                        border: "2px solid #d1d5db",
                        borderRadius: "8px",
                        fontSize: "14px",
                      }}
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      style={{
                        padding: "12px",
                        border: "2px solid #d1d5db",
                        borderRadius: "8px",
                        fontSize: "14px",
                      }}
                    />
                    <select
                      style={{
                        padding: "12px",
                        border: "2px solid #d1d5db",
                        borderRadius: "8px",
                        fontSize: "14px",
                      }}
                    >
                      <option>Select Pricing Tier</option>
                      <option>Bronze (5% discount)</option>
                      <option>Silver (10% discount)</option>
                      <option>Gold (15% discount)</option>
                      <option>Platinum (20% discount)</option>
                    </select>
                    <input
                      type="number"
                      placeholder="Credit Limit ($)"
                      style={{
                        padding: "12px",
                        border: "2px solid #d1d5db",
                        borderRadius: "8px",
                        fontSize: "14px",
                      }}
                    />
                  </div>
                  <div style={{ display: "flex", justifyContent: "flex-end", gap: "12px", marginTop: "24px" }}>
                    <button onClick={() => setShowAddCustomer(false)} style={outlineButtonStyle}>
                      Cancel
                    </button>
                    <button onClick={() => setShowAddCustomer(false)} style={primaryButtonStyle}>
                      Add Retailer
                    </button>
                  </div>
                </div>
              </div>
            )}

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "24px" }}>
              {topRetailers.map((retailer, index) => (
                <div key={index} style={{ ...cardStyle, border: "2px solid #e2e8f0" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "16px",
                    }}
                  >
                    <h4 style={{ fontSize: "20px", fontWeight: "700", color: "#1e293b", margin: 0 }}>
                      🏪 {retailer.name}
                    </h4>
                    <span style={{ ...badgeStyle, backgroundColor: getStatusColor(retailer.status) }}>
                      {retailer.status}
                    </span>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "16px" }}>
                    <div>
                      <div style={{ fontSize: "12px", color: "#64748b", marginBottom: "4px" }}>Total Orders</div>
                      <div style={{ fontSize: "18px", fontWeight: "700", color: "#1e293b" }}>{retailer.orders}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: "12px", color: "#64748b", marginBottom: "4px" }}>Revenue</div>
                      <div style={{ fontSize: "18px", fontWeight: "700", color: "#059669" }}>{retailer.revenue}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: "12px", color: "#64748b", marginBottom: "4px" }}>Credit Limit</div>
                      <div style={{ fontSize: "18px", fontWeight: "700", color: "#3b82f6" }}>{retailer.credit}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: "12px", color: "#64748b", marginBottom: "4px" }}>Status</div>
                      <div style={{ fontSize: "14px", fontWeight: "600", color: getStatusColor(retailer.status) }}>
                        {retailer.status}
                      </div>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "8px" }}>
                    <button style={{ ...outlineButtonStyle, flex: 1, fontSize: "12px", padding: "8px" }}>
                      📞 Contact
                    </button>
                    <button style={{ ...primaryButtonStyle, flex: 1, fontSize: "12px", padding: "8px" }}>
                      📝 Edit
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Inventory Tab */}
        {activeTab === "inventory" && (
          <div>
            <div
              style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}
            >
              <div>
                <h3 style={{ fontSize: "24px", fontWeight: "700", color: "#1e293b", margin: 0 }}>
                  📋 Inventory Management
                </h3>
                <p style={{ color: "#64748b", margin: 0, fontSize: "16px" }}>Track stock levels and reservations</p>
              </div>
              <div style={{ display: "flex", gap: "12px" }}>
                <button style={outlineButtonStyle}>📊 Export Inventory</button>
                <button style={warningButtonStyle}>⚠️ Low Stock Alert</button>
              </div>
            </div>

            <div style={cardStyle}>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thStyle}>Product</th>
                    <th style={thStyle}>Category</th>
                    <th style={thStyle}>Total Stock</th>
                    <th style={thStyle}>Reserved</th>
                    <th style={thStyle}>Available</th>
                    <th style={thStyle}>Wholesale Price</th>
                    <th style={thStyle}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {inventory.map((item, index) => (
                    <tr key={index}>
                      <td style={{ ...tdStyle, fontWeight: "600", color: "#1e293b" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>📱 {item.product}</div>
                      </td>
                      <td style={tdStyle}>{item.category}</td>
                      <td style={{ ...tdStyle, fontWeight: "600" }}>{item.stock}</td>
                      <td style={{ ...tdStyle, color: "#f59e0b", fontWeight: "600" }}>{item.reserved}</td>
                      <td style={{ ...tdStyle, color: item.available < 50 ? "#ef4444" : "#10b981", fontWeight: "600" }}>
                        {item.available}
                      </td>
                      <td style={{ ...tdStyle, fontWeight: "600", color: "#059669" }}>{item.price}</td>
                      <td style={tdStyle}>
                        <div style={{ display: "flex", gap: "8px" }}>
                          <button style={{ ...outlineButtonStyle, padding: "6px 12px", fontSize: "12px" }}>
                            📝 Update
                          </button>
                          <button style={{ ...primaryButtonStyle, padding: "6px 12px", fontSize: "12px" }}>
                            📦 Reorder
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Pricing Tab */}
        {activeTab === "pricing" && (
          <div>
            <div
              style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}
            >
              <div>
                <h3 style={{ fontSize: "24px", fontWeight: "700", color: "#1e293b", margin: 0 }}>💰 Pricing Tiers</h3>
                <p style={{ color: "#64748b", margin: 0, fontSize: "16px" }}>Manage wholesale pricing structure</p>
              </div>
              <button style={primaryButtonStyle}>➕ Create New Tier</button>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
              {pricingTiers.map((tier, index) => (
                <div
                  key={index}
                  style={{
                    ...cardStyle,
                    border: `3px solid ${getTierColor(tier.tier)}`,
                    background: `linear-gradient(135deg, #ffffff 0%, ${getTierColor(tier.tier)}10 100%)`,
                  }}
                >
                  <div style={{ textAlign: "center", marginBottom: "20px" }}>
                    <div
                      style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "50%",
                        backgroundColor: getTierColor(tier.tier),
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto 12px",
                        fontSize: "24px",
                      }}
                    >
                      {tier.tier === "Bronze" && "🥉"}
                      {tier.tier === "Silver" && "🥈"}
                      {tier.tier === "Gold" && "🥇"}
                      {tier.tier === "Platinum" && "💎"}
                    </div>
                    <h4 style={{ fontSize: "24px", fontWeight: "700", color: "#1e293b", margin: 0 }}>{tier.tier}</h4>
                  </div>
                  <div style={{ textAlign: "center", marginBottom: "20px" }}>
                    <div style={{ fontSize: "14px", color: "#64748b", marginBottom: "8px" }}>Minimum Order</div>
                    <div style={{ fontSize: "18px", fontWeight: "600", color: "#1e293b", marginBottom: "12px" }}>
                      {tier.minOrder}
                    </div>
                    <div style={{ fontSize: "14px", color: "#64748b", marginBottom: "8px" }}>Discount</div>
                    <div style={{ fontSize: "32px", fontWeight: "700", color: getTierColor(tier.tier) }}>
                      {tier.discount}
                    </div>
                  </div>
                  <div style={{ textAlign: "center", paddingTop: "16px", borderTop: "2px solid #e2e8f0" }}>
                    <div style={{ fontSize: "14px", color: "#64748b", marginBottom: "4px" }}>Active Retailers</div>
                    <div style={{ fontSize: "20px", fontWeight: "700", color: "#1e293b" }}>{tier.retailers}</div>
                  </div>
                  <div style={{ marginTop: "20px" }}>
                    <button style={{ ...outlineButtonStyle, width: "100%" }}>⚙️ Manage Tier</button>
                  </div>
                </div>
              ))}
            </div>

            {/* Pricing Rules */}
            <div style={{ ...cardStyle, marginTop: "32px" }}>
              <h4 style={{ fontSize: "20px", fontWeight: "700", color: "#1e293b", marginBottom: "16px" }}>
                📋 Pricing Rules & Benefits
              </h4>
              <div
                style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "16px" }}
              >
                <div
                  style={{
                    padding: "16px",
                    backgroundColor: "#f8fafc",
                    borderRadius: "8px",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  <h5 style={{ fontSize: "16px", fontWeight: "600", color: "#1e293b", marginBottom: "8px" }}>
                    🎯 Volume Discounts
                  </h5>
                  <p style={{ fontSize: "14px", color: "#64748b", margin: 0 }}>
                    Automatic discounts based on order quantity
                  </p>
                </div>
                <div
                  style={{
                    padding: "16px",
                    backgroundColor: "#f8fafc",
                    borderRadius: "8px",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  <h5 style={{ fontSize: "16px", fontWeight: "600", color: "#1e293b", marginBottom: "8px" }}>
                    💳 Credit Terms
                  </h5>
                  <p style={{ fontSize: "14px", color: "#64748b", margin: 0 }}>
                    Flexible payment terms for qualified retailers
                  </p>
                </div>
                <div
                  style={{
                    padding: "16px",
                    backgroundColor: "#f8fafc",
                    borderRadius: "8px",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  <h5 style={{ fontSize: "16px", fontWeight: "600", color: "#1e293b", marginBottom: "8px" }}>
                    🚚 Free Shipping
                  </h5>
                  <p style={{ fontSize: "14px", color: "#64748b", margin: 0 }}>
                    Free shipping on orders above minimum threshold
                  </p>
                </div>
                <div
                  style={{
                    padding: "16px",
                    backgroundColor: "#f8fafc",
                    borderRadius: "8px",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  <h5 style={{ fontSize: "16px", fontWeight: "600", color: "#1e293b", marginBottom: "8px" }}>
                    🎁 Exclusive Products
                  </h5>
                  <p style={{ fontSize: "14px", color: "#64748b", margin: 0 }}>
                    Access to exclusive products for premium tiers
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export default Wholesaler
