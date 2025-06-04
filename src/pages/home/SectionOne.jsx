import React from 'react'
import {
  ArrowRightIcon,
  UsersIcon,
  TruckIcon,
  BuildingIcon,
  HeartIcon,
  ShieldIcon,
  ZapIcon,
} from "../../components/Icons"

const SectionOne = () => {
  return (
    <>
    <div className="relative z-10 bg-white py-20">
            <div className="max-w-7xl mx-auto px-4">
              {/* User Types Section */}
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Choose Your Journey</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Whether you're shopping for yourself, running a business, or sourcing products, we've got you covered
                </p>
              </div>
    
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                {/* Buyer Card */}
                <div className="group relative bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="absolute top-6 right-6">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                      <UsersIcon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">I'm a Buyer</h3>
                    <p className="text-gray-600">Find the best deals and alternatives for personal shopping</p>
                  </div>
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">Compare prices across stores</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">Get price drop alerts</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">Save favorite products</span>
                    </div>
                  </div>
                  <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2 group-hover:bg-blue-600">
                    <span>Start Shopping</span>
                    <ArrowRightIcon className="w-4 h-4" />
                  </button>
                </div>
    
                {/* Dropshipper Card */}
                <div className="group relative bg-gradient-to-br from-purple-50 to-pink-100 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="absolute top-6 right-6">
                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                      <TruckIcon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">I'm a Dropshipper</h3>
                    <p className="text-gray-600">Source trending products and analyze market demand</p>
                  </div>
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">Find winning products</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">Supplier connections</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">Profit margin calculator</span>
                    </div>
                  </div>
                  <button className="w-full bg-purple-500 hover:bg-purple-600 text-white py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2 group-hover:bg-purple-600">
                    <span>Start Sourcing</span>
                    <ArrowRightIcon className="w-4 h-4" />
                  </button>
                </div>
    
                {/* Wholesaler Card */}
                <div className="group relative bg-gradient-to-br from-green-50 to-emerald-100 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="absolute top-6 right-6">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                      <BuildingIcon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">I'm a Wholesaler</h3>
                    <p className="text-gray-600">Bulk purchasing and B2B marketplace access</p>
                  </div>
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">Bulk pricing tiers</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">Manufacturer direct</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">Volume discounts</span>
                    </div>
                  </div>
                  <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2 group-hover:bg-green-600">
                    <span>Start Buying</span>
                    <ArrowRightIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>
    
              {/* Trust Indicators */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <ShieldIcon className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Secure & Trusted</h3>
                    <p className="text-gray-600">Bank-level security with verified suppliers and sellers</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <ZapIcon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Lightning Fast</h3>
                    <p className="text-gray-600">AI-powered search delivers results in milliseconds</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <HeartIcon className="w-8 h-8 text-red-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Loved by Users</h3>
                    <p className="text-gray-600">Join 500K+ happy customers saving money daily</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}

export default SectionOne