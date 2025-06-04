import React from 'react'
import {
  SparklesIcon,
  InstagramIcon,
  TwitterIcon,
} from "../../components/Icons"

const Footer = () => {
  return (
    <>
    <footer className="relative z-10 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white">
            {/* Decorative top border */}
            <div className="h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500"></div>
    
            <div className="max-w-7xl mx-auto px-4 py-16">
              {/* Newsletter Section */}
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4">Stay in the Loop</h2>
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                  Get the latest deals, product launches, and insider tips delivered to your inbox
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 bg-white/10 border border-white/20 text-white placeholder:text-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 px-6 py-2 rounded-md font-medium transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
    
              {/* Main Footer Content */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                {/* Brand Column */}
                <div className="md:col-span-1">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <SparklesIcon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xl font-bold">FindSimilar</span>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Revolutionizing how you discover and compare products across the web.
                  </p>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                    >
                      <InstagramIcon className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                    >
                      <TwitterIcon className="w-5 h-5" />
                    </a>
                  </div>
                </div>
    
                {/* Quick Links */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Platform</h3>
                  <ul className="space-y-2">
                    <li>
                      <a href="#" className="text-gray-300 hover:text-white transition-colors">
                        How it Works
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-300 hover:text-white transition-colors">
                        Pricing
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-300 hover:text-white transition-colors">
                        API Access
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-300 hover:text-white transition-colors">
                        Mobile App
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-300 hover:text-white transition-colors">
                        Browser Extension
                      </a>
                    </li>
                  </ul>
                </div>
    
                {/* Resources */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Resources</h3>
                  <ul className="space-y-2">
                    <li>
                      <a href="#" className="text-gray-300 hover:text-white transition-colors">
                        Help Center
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-300 hover:text-white transition-colors">
                        Community
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-300 hover:text-white transition-colors">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-300 hover:text-white transition-colors">
                        Success Stories
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-300 hover:text-white transition-colors">
                        Webinars
                      </a>
                    </li>
                  </ul>
                </div>
    
                {/* Company */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Company</h3>
                  <ul className="space-y-2">
                    <li>
                      <a href="#" className="text-gray-300 hover:text-white transition-colors">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-300 hover:text-white transition-colors">
                        Careers
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-300 hover:text-white transition-colors">
                        Press Kit
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-300 hover:text-white transition-colors">
                        Contact
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-300 hover:text-white transition-colors">
                        Partners
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
    
              {/* Bottom Section */}
              <div className="border-t border-white/10 pt-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <div className="text-gray-300 text-sm mb-4 md:mb-0">© 2025 FindSimilar. All rights reserved.</div>
                  <div className="flex space-x-6 text-sm">
                    <a href="#" className="text-gray-300 hover:text-white transition-colors">
                      Privacy Policy
                    </a>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors">
                      Terms of Service
                    </a>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors">
                      Cookie Policy
                    </a>
                  </div>
                </div>
                <div className="text-center mt-4 text-xs text-gray-400 font-mono">
                  $FIND: 0xf8d7C0eBa3A42FF9E5D7C2c2Fd629B8eC3E0b9C
                </div>
              </div>
            </div>
    
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
              <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"></div>
              <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-xl"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-teal-500/5 rounded-full blur-2xl"></div>
            </div>
          </footer>
    </>
  )
}

export default Footer