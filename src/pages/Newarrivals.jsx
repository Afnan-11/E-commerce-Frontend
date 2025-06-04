"use client"
import { useParams } from "react-router-dom"
import EcommerceFilterSidebar from "./ecommerce-filter-sidebar"
import { productsData } from "../Data/Array"

const Newarrivals = () => {
  const params = useParams()
  const filterProducts = productsData.filter((item) => item.category === (params.categoryID || "shoes"))
  console.log(filterProducts)

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="flex-shrink-0 w-80 bg-white border-r border-gray-200">
        <EcommerceFilterSidebar />
      </div>

      {/* Products Section */}
      <div className="flex-1 bg-white overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Page Header */}
          {/* <div className="py-6 border-b border-gray-200 mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">New Arrivals</h1>
            <p className="text-sm text-gray-600">Showing {filterProducts.length} products</p>
          </div> */}

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 pb-6">
            {filterProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <img
                  alt={product.imageAlt}
                  src={product.image[0] || "/placeholder.svg"}
                  className="w-full h-72  bg-gray-50 border-b border-gray-100"
                />
                <div className="p-4">
                  <h3 className="text-base font-medium text-gray-900 mb-2 leading-tight">
                    <a href={product.href} className="hover:text-blue-600 transition-colors duration-200">
                      {product.title}
                    </a>
                  </h3>
                  <p className="text-lg font-semibol">${product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Newarrivals
