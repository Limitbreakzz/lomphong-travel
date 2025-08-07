import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const menuItems = [
        { name: 'หน้าหลัก', link: '/' },
        { name: 'ที่เที่ยว', link: '/Collection' },
        { name: 'ติดต่อเรา', link: '/Contact' }
    ]

    return (
        <>
            <header className='bg-yellow-600 text-gray-900 p-4'>
                <div className='container mx-auto py-2'>
                    <div className='flex item-center justify-between'>
                        <div className='flex items-center'>
                            <img src="https://cdn-icons-png.flaticon.com/512/4283/4283062.png" alt="" className='inline-block mr-2 w-10' />
                            <h1 className='text-2xl font-bold'>Art and Cultural Tourism</h1>
                        </div>

                        {/* Hamburger Icon */}
                        <button className='block lg:hidden cursor-pointer' onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                 <i className={`bi ${isMenuOpen ? 'bi-x' : 'bi-list'} text-3xl`}></i>
                        </button>

                        {/* Desktop Navigation Menu */}
                        <nav className='hidden lg:flex items-center space-x-8'>
                            {menuItems.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.link}
                                    className='text-lg hover:text-gray-100 transition-all duration-300 font-semibold hover:underline'
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>

                        {/* Mobile Navigation Menu */}
                        <nav className={`lg:hidden absolute left-0 top-0 w-2/3 bg-yellow-600 text-gray-900 h-full ${isMenuOpen ? 'block' : 'hidden'} z-50`}>
                            <div className='p-4'>
                                {menuItems.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.link}
                                        className='block text-lg py-2 hover:text-gray-100 transition-all duration-300 font-semibold hover:underline'
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header