"use client"

import { useState } from "react"
import { X, Filter, ChevronUp, ChevronDown } from "lucide-react"

// Sample filter data with counts
const filterData = { 
  bagType: [
    { name: "Shoulder Bags", count: 9427 },
    { name: "Cross Body Bags", count: 7345 },
    { name: "Totes", count: 4891 },
    { name: "Top Handle", count: 4018 },
    { name: "Clutches", count: 1492 },
    { name: "Hobos", count: 1187 },
    { name: "Satchels", count: 960 },
    { name: "Messenger", count: 855 },
    { name: "Backpacks", count: 737 },
    { name: "Bucket", count: 623 },
  ],
  categories: [
    { name: "Electronics", count: 2543 },
    { name: "Clothing", count: 8921 },
    { name: "Home & Garden", count: 1876 },
    { name: "Sports & Outdoors", count: 3421 },
  ],
  types: [
    { name: "New Arrivals", count: 234 },
    { name: "Best Sellers", count: 567 },
    { name: "Featured", count: 123 },
    { name: "Limited Edition", count: 89 },
  ],
  conditions: [
    { name: "New", count: 5432 },
    { name: "Like New", count: 2341 },
    { name: "Very Good", count: 1876 },
    { name: "Good", count: 987 },
  ],
  priceRanges: [
    { name: "Under $25", count: 1234 },
    { name: "$25 - $50", count: 2345 },
    { name: "$50 - $100", count: 3456 },
    { name: "$100 - $200", count: 2987 },
    { name: "$200 - $500", count: 1876 },
  ],
  colors: [
    { name: "Black", value: "#000000", count: 2341 },
    { name: "White", value: "#FFFFFF", count: 1987 },
    { name: "Red", value: "#EF4444", count: 876 },
    { name: "Blue", value: "#3B82F6", count: 1234 },
  ],
  collections: [
    { name: "Summer 2024", count: 456 },
    { name: "Winter Collection", count: 789 },
    { name: "Premium Line", count: 234 },
  ],
  offRetail: [
    { name: "10% Off", count: 234 },
    { name: "20% Off", count: 456 },
    { name: "30% Off", count: 123 },
  ],
}

export default function Component() {
  const [selectedFilters, setSelectedFilters] = useState({
    bagType: [],
    categories: [],
    types: [],
    conditions: [],
    priceRanges: [],
    colors: [],
    collections: [],
    offRetail: [],
  })

  // Add state to track which sections are expanded
  const [expandedSections, setExpandedSections] = useState({
    bagType: true,
    categories: true,
    types: true,
    conditions: true,
    price: true,
    colors: true,
    collections: true,
    offRetail: true,
  })

  // Toggle section expanded state
  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const handleFilterChange = (filterType, value) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [filterType]: prev[filterType].includes(value)
        ? prev[filterType].filter((item) => item !== value)
        : [...prev[filterType], value],
    }))
  }

  const removeFilter = (filterType, value) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [filterType]: prev[filterType].filter((item) => item !== value),
    }))
  }

  const clearAllFilters = () => {
    setSelectedFilters({
      bagType: [],
      categories: [],
      types: [],
      conditions: [],
      priceRanges: [],
      colors: [],
      collections: [],
      offRetail: [],
    })
  }

  const getTotalActiveFilters = () => {
    return Object.values(selectedFilters).flat().length
  }

  const formatCount = (count) => {
    return count.toLocaleString()
  }

  const renderFilterSection = (title, filterType, items, isColor = false) => (
    <div className="filter-section">
      <div className="section-header" onClick={() => toggleSection(filterType)} style={{ cursor: "pointer" }}>
        <span className="section-title">{title}</span>
        {expandedSections[filterType] ? (
          <ChevronUp size={16} className="chevron-icon" />
        ) : (
          <ChevronDown size={16} className="chevron-icon" />
        )}
      </div>

      {expandedSections[filterType] && (
        <div className="section-content">
          <div className="filter-list">
            {items.map((item) => (
              <label key={item.name} className="filter-item">
                <input
                  type="checkbox"
                  checked={selectedFilters[filterType].includes(item.name)}
                  onChange={() => handleFilterChange(filterType, item.name)}
                  className="checkbox"
                />
                <div className="filter-label">
                  {isColor && <div className="color-swatch" style={{ backgroundColor: item.value }} />}
                  <span className="filter-name">{item.name}</span>
                  <span className="filter-count">({formatCount(item.count)})</span>
                </div>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  )

  return (
    <div className="sidebar">
      <style jsx>{`
        .sidebar {
          width: 320px;
          background: white;
          border-right: 1px solid #e5e7eb;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .sidebar-content {
          padding: 24px;
        }

        .header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 24px;
        }

        .header-left {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .header-title {
          font-size: 18px;
          font-weight: 600;
          margin: 0;
        }

        .badge {
          background: #3b82f6;
          color: white;
          padding: 2px 8px;
          border-radius: 12px;
          font-size: 12px;
          font-weight: 500;
        }

        .clear-btn {
          background: none;
          border: none;
          color: #6b7280;
          cursor: pointer;
          font-size: 14px;
          padding: 4px 8px;
          border-radius: 4px;
        }

        .clear-btn:hover {
          color: #374151;
          background: #f3f4f6;
        }

        .active-filters {
          margin-bottom: 24px;
        }

        .active-filters h3 {
          font-size: 14px;
          font-weight: 500;
          margin: 0 0 12px 0;
        }

        .filter-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .filter-tag {
          display: flex;
          align-items: center;
          gap: 4px;
          background: #f3f4f6;
          padding: 4px 8px;
          border-radius: 6px;
          font-size: 12px;
        }

        .remove-tag {
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          display: flex;
          align-items: center;
        }

        .separator {
          height: 1px;
          background: #e5e7eb;
          margin: 16px 0;
        }

        .filter-section {
          margin-bottom: 32px;
          position: relative;
        }

        .section-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
          padding-bottom: 8px;
          transition: all 0.2s ease;
        }
        
        .section-header:hover {
          color: #3b82f6;
        }

        .section-title {
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: #111827;
        }

        .chevron-icon {
          color: #6b7280;
          transition: transform 0.2s ease;
        }

        .section-content {
          position: relative;
          animation: fadeIn 0.3s ease;
        }
        
        @keyframes fadeIn {
          from { opacity: 0.8; transform: translateY(-5px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .filter-list {
          width: 100%;
        }

        .filter-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 8px 0;
          cursor: pointer;
          font-size: 14px;
          border-bottom: 1px solid #f8fafc;
        }

        .filter-item:hover {
          background: #f8fafc;
          margin: 0 -8px;
          padding-left: 8px;
          padding-right: 8px;
          border-radius: 4px;
        }

        .checkbox {
          width: 16px;
          height: 16px;
          cursor: pointer;
          accent-color: #3b82f6;
        }

        .filter-label {
          display: flex;
          align-items: center;
          gap: 8px;
          flex: 1;
          justify-content: space-between;
        }

        .filter-name {
          color: #111827;
          font-weight: 400;
        }

        .filter-count {
          color: #6b7280;
          font-size: 13px;
        }

        .color-swatch {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          border: 1px solid #d1d5db;
          flex-shrink: 0;
        }

        .apply-btn {
          width: 100%;
          background: #3b82f6;
          color: white;
          border: none;
          padding: 12px;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
          margin-top: 24px;
        }

        .apply-btn:hover {
          background: #2563eb;
        }

        .price-info {
          margin-bottom: 16px;
        }

        .highest-price {
          color: #6b7280;
          font-size: 14px;
          margin: 0;
          font-weight: 400;
        }

        .price-inputs {
          display: flex;
          gap: 12px;
        }

        .price-input-group {
          flex: 1;
        }

        .price-label {
          display: block;
          font-size: 14px;
          color: #6b7280;
          margin-bottom: 8px;
          font-weight: 400;
        }

        .price-input {
          width: 100%;
          padding: 12px 16px;
          border: 1px solid #d1d5db;
          border-radius: 6px;
          font-size: 14px;
          background: white;
          outline: none;
          transition: border-color 0.2s ease;
        }

        .price-input:focus {
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .price-input::placeholder {
          color: #9ca3af;
        }
      `}</style>

      <div className="sidebar-content">
        {/* Header */}
        <div className="header">
          <div className="header-left">
            <Filter size={20} />
            <h2 className="header-title">Filters</h2>
            {getTotalActiveFilters() > 0 && <span className="badge">{getTotalActiveFilters()}</span>}
          </div>
          {getTotalActiveFilters() > 0 && (
            <button className="clear-btn" onClick={clearAllFilters}>
              Clear All
            </button>
          )}
        </div>

        {/* Active Filters */}
        {getTotalActiveFilters() > 0 && (
          <div className="active-filters">
            <h3>Active Filters</h3>
            <div className="filter-tags">
              {Object.entries(selectedFilters).map(([filterType, values]) =>
                values.map((value) => (
                  <div key={`${filterType}-${value}`} className="filter-tag">
                    {value}
                    <button className="remove-tag" onClick={() => removeFilter(filterType, value)}>
                      <X size={12} />
                    </button>
                  </div>
                )),
              )}
            </div>
            <div className="separator" />
          </div>
        )}

        {/* Filter Sections */}
        <div className="filters">
          {/* Bag Type - Matching the provided image */}
          {renderFilterSection("BAG TYPE", "bagType", filterData.bagType)}

          {/* Categories */}
          {renderFilterSection("CATEGORY", "categories", filterData.categories)}

          {/* Types */}
          {renderFilterSection("TYPES", "types", filterData.types)}

          {/* Conditions */}
          {renderFilterSection("CONDITIONS", "conditions", filterData.conditions)}

          {/* Custom Price Range */}
          <div className="filter-section">
            <div className="section-header" onClick={() => toggleSection("price")} style={{ cursor: "pointer" }}>
              <span className="section-title">PRICE</span>
              {expandedSections.price ? (
                <ChevronUp size={16} className="chevron-icon" />
              ) : (
                <ChevronDown size={16} className="chevron-icon" />
              )}
            </div>

            {expandedSections.price && (
              <div className="section-content">
                <div className="price-info">
                  <p className="highest-price">The highest price is Rs. 7,499</p>
                </div>

                <div className="price-inputs">
                  <div className="price-input-group">
                    <label className="price-label">From</label>
                    <input type="number" placeholder="" className="price-input" min="0" max="7499" />
                  </div>

                  <div className="price-input-group">
                    <label className="price-label">To</label>
                    <input type="number" placeholder="" className="price-input" min="0" max="7499" />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Colors */}
          {renderFilterSection("COLORS", "colors", filterData.colors, true)}

          {/* Collections */}
          {renderFilterSection("COLLECTIONS", "collections", filterData.collections)}

          {/* Off Retail */}
          {renderFilterSection("OFF RETAIL", "offRetail", filterData.offRetail)}
        </div>

        {/* Apply Filters Button */}
        <button className="apply-btn">Apply Filters ({getTotalActiveFilters()})</button>
      </div>
    </div>
  )
}
