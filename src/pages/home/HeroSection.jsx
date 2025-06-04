import { React, useState } from 'react'
import {
  SearchIcon,
  ImageIcon,
  ChevronDownIcon,
} from '../../components/Icons'

const HeroSection = () => {

  const [deepSearch, setDeepSearch] = useState(false)
  // const [storeDropdownOpen, setStoreDropdownOpen] = useState(false)
  // const [selectedStore, setSelectedStore] = useState('amazon')

//   const getStoreLabel = () => {
//   switch (selectedStore) {
//     case "amazon":
//       return "Amazon"
//     case "wayfair":
//       return "Wayfair"
//     case "target":
//       return "Target"
//     case "walmart":
//       return "Walmart"
//     case "all":
//       return "All Stores"
//     default:
//       return "Amazon"
//   }
// }


  return (
    <>
      <div className='relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-4'>
        <div className='text-center max-w-4xl mx-auto'>
          {/* Hero Text */}
          <div className='mb-12'>
            <h1 className='text-6xl md:text-8xl font-bold mb-6'>
              <span className='bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent'>
                FindSimilar
              </span>
            </h1>
            <p className='text-xl md:text-2xl text-gray-600 font-medium mb-4'>
              Discover amazing alternatives for less
            </p>
            <p className='text-gray-500 max-w-2xl mx-auto'>
              Upload an image or paste a product URL to find similar items at
              better prices across thousands of stores
            </p>
          </div>

          {/* Search Section */}
          <div className='max-w-3xl mx-auto'>
            <div className='bg-white rounded-2xl shadow-xl border border-gray-200 p-6 mb-6'>
              <div className='relative mb-4'>
                <input
                  type='text'
                  placeholder='Paste URL or search for products...'
                  className='w-full h-14 pl-12 pr-4 text-lg border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none'
                />
                <SearchIcon className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
              </div>

              <div className='flex flex-col sm:flex-row items-center justify-between gap-4'>
                <div className='flex items-center space-x-4'>
                  <button className='flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-purple-50 hover:border-purple-300 transition-colors'>
                    <ImageIcon className='w-4 h-4' />
                    <span>Upload Image</span>
                  </button>

                  <div className='flex items-center space-x-2'>
                    <label className='relative inline-flex items-center cursor-pointer'>
                      <input
                        type='checkbox'
                        checked={deepSearch}
                        onChange={() => setDeepSearch(!deepSearch)}
                        className='sr-only peer'
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                    </label>
                    <span className='text-sm text-gray-600'>
                      AI Deep Search
                    </span>
                  </div>
                </div>

                {/* <div className='flex items-center space-x-2'>
                  <span className='text-sm text-gray-500'>Also search:</span>
                  <div className='relative'>
                    <button
                      className='flex items-center justify-center w-32 px-3 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50 transition-colors'
                      onClick={() => setStoreDropdownOpen(!storeDropdownOpen)}
                    >
                      <span>{getStoreLabel()}</span>
                      <ChevronDownIcon className='w-4 h-4 ml-2' />
                    </button>
                    {storeDropdownOpen && (
                      <div className='absolute top-full left-0 z-10 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg'>
                        <div
                          className='px-3 py-2 hover:bg-gray-50 cursor-pointer'
                          onClick={() => {
                            setSelectedStore('amazon')
                            setStoreDropdownOpen(false)
                          }}
                        >
                          Amazon
                        </div>
                        <div
                          className='px-3 py-2 hover:bg-gray-50 cursor-pointer'
                          onClick={() => {
                            setSelectedStore('wayfair')
                            setStoreDropdownOpen(false)
                          }}
                        >
                          Wayfair
                        </div>
                        <div
                          className='px-3 py-2 hover:bg-gray-50 cursor-pointer'
                          onClick={() => {
                            setSelectedStore('target')
                            setStoreDropdownOpen(false)
                          }}
                        >
                          Target
                        </div>
                        <div
                          className='px-3 py-2 hover:bg-gray-50 cursor-pointer'
                          onClick={() => {
                            setSelectedStore('walmart')
                            setStoreDropdownOpen(false)
                          }}
                        >
                          Walmart
                        </div>
                        <div
                          className='px-3 py-2 hover:bg-gray-50 cursor-pointer'
                          onClick={() => {
                            setSelectedStore('all')
                            setStoreDropdownOpen(false)
                          }}
                        >
                          All Stores
                        </div>
                      </div>
                    )}
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection
