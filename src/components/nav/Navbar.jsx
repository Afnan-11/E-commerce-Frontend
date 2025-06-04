import React, { useState } from 'react'
import {
  MenuIcon,
  SparklesIcon,
  XIcon,
  ChevronDownIcon,
} from '../../components/Icons'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [deepSearch, setDeepSearch] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedUserType, setSelectedUserType] = useState('buyer')
  const [userTypeDropdownOpen, setUserTypeDropdownOpen] = useState(false)
  const [storeDropdownOpen, setStoreDropdownOpen] = useState(false)
  const [selectedStore, setSelectedStore] = useState('amazon')

  const getUserTypeLabel = () => {
    switch (selectedUserType) {
      case 'buyer':
        return '👤 I am Buyer'
      case 'dropshipper':
        return '📦 I am Dropshipper'
      case 'wholesaler':
        return '🏢 I am Wholesaler'
      default:
        return '👤 I am Buyer'
    }
  }

  return (
    <>
      <nav className='border-b bg-white/95 backdrop-blur sticky top-0 z-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-16'>
            {/* Logo */}
            <div className='flex items-center space-x-2'>
              <div className='w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center'>
                <SparklesIcon className='w-5 h-5 text-white' />
              </div>
              <Link to='/'>
                <span className='text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent'>
                  FindSimilar
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className='hidden md:flex items-center space-x-8'>
              <Link
                to='/newArrivals'
                className='text-gray-700 hover:text-purple-600 font-medium transition-colors'
              >
                New Arrivals
              </Link>
              <Link
                to='/bags'
                className='text-gray-700 hover:text-purple-600 font-medium transition-colors'
              >
                Bags
              </Link>
              <Link
                to='/shoes'
                className='text-gray-700 hover:text-purple-600 font-medium transition-colors relative'
              >
                Shoes
                <span className='absolute -top-2 -right-8 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full font-semibold'>
                  Hot
                </span>
              </Link>
              <Link
                to='/jewelry'
                className='text-gray-700 hover:text-purple-600 font-medium transition-colors'
              >
                Jewelry
              </Link>
            </div>

            {/* Right side buttons */}
            <div className='flex items-center space-x-3'>
              <div className='relative hidden sm:block'>
                <button
                  className='flex items-center space-x-2 px-4 py-2 border border-purple-200 text-purple-600 hover:text-purple-700 hover:bg-purple-50 bg-transparent rounded-md transition-colors'
                  onClick={() => setUserTypeDropdownOpen(!userTypeDropdownOpen)}
                >
                  <span>{getUserTypeLabel()}</span>
                  <ChevronDownIcon className='w-4 h-4' />
                </button>
                {userTypeDropdownOpen && (
                  <div className='absolute top-full left-0 z-10 mt-1 w-full min-w-48 bg-white border border-gray-200 rounded-md shadow-lg'>
                    <Link to='/'>
                      <div
                        className='px-4 py-2 hover:bg-gray-50 cursor-pointer'
                        onClick={() => {
                          setSelectedUserType('buyer')
                          setUserTypeDropdownOpen(false)
                        }}
                      >
                        👤 I am Buyer
                      </div>
                    </Link>
                    <Link to='/dropshipper'>
                      <div
                        className='px-4 py-2 hover:bg-gray-50 cursor-pointer'
                        onClick={() => {
                          setSelectedUserType('dropshipper')
                          setUserTypeDropdownOpen(false)
                        }}
                      >
                        📦 I am Dropshipper
                      </div>
                    </Link>
                    <Link to='/wholeseller'>
                      <div
                        className='px-4 py-2 hover:bg-gray-50 cursor-pointer'
                        onClick={() => {
                          setSelectedUserType('wholesaler')
                          setUserTypeDropdownOpen(false)
                        }}
                      >
                        🏢 I am Wholesaler
                      </div>
                    </Link>
                  </div>
                )}
              </div>
              <button className='bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-4 py-2 rounded-md font-medium transition-colors'>
                Get Started
              </button>

              {/* Mobile menu button */}
              <button
                className='md:hidden p-2'
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <XIcon className='w-5 h-5' />
                ) : (
                  <MenuIcon className='w-5 h-5' />
                )}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className='md:hidden border-t border-gray-200 bg-white'>
              <div className='flex flex-col space-y-4 py-4'>
                <a
                  href='#'
                  className='text-lg font-medium text-gray-700 hover:text-purple-600 px-4'
                >
                  Discover
                </a>
                <a
                  href='#'
                  className='text-lg font-medium text-gray-700 hover:text-purple-600 px-4'
                >
                  Categories
                </a>
                <a
                  href='#'
                  className='text-lg font-medium text-gray-700 hover:text-purple-600 px-4'
                >
                  Deals
                </a>
                <a
                  href='#'
                  className='text-lg font-medium text-gray-700 hover:text-purple-600 px-4'
                >
                  Compare
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}

export default Navbar
