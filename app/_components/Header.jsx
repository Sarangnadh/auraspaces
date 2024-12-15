"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const Menu = [
        {
            id: 1,
            name: 'Home',
            path: '/'
        },
        {
            id: 2,
            name: 'What We Do',
            path: '/whatwedo'
        },
        {
            id: 3,
            name: 'Career',
            path: '/careers'
        },
        {
            id: 4,
            name: 'Services',
            path: '/services'
        },
        {
            id: 5,
            name: 'About',
            path: '/about'
        },
        {
            id: 6,
            name: 'Contact Us',
            path: '/contact-us'
        }
    ];

    return (
        <>
            <div className='flex items-center justify-between p-4 shadow-sm'>
                {/* Logo Section */}
                <div className='flex items-center gap-10'>
                    <Image 
                        src='/logo.jpg.webp' 
                        alt='logo' 
                        width={180} 
                        height={180} 
                        priority 
                    />

                    {/* Desktop Menu */}
                    <ul className='hidden md:flex gap-8'>
                        {Menu.map((item) => (
                            <Link href={item.path} key={item.id}>
                                <li className='hover:text-primary cursor-pointer hover:scale-105 transition-all ease-in-out'>
                                    {item.name}
                                </li>
                            </Link>
                        ))}
                    </ul>
                </div>

                {/* Mobile Menu Toggle */}
                <button 
                    className='md:hidden text-xl' 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? '✖' : '☰'}
                </button>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className='absolute top-16 left-0 w-full md:hidden'>
                        <ul className='flex flex-col items-center gap-4 py-4'>
                            {Menu.map((item) => (
                                <Link href={item.path} key={item.id}>
                                    <li 
                                        className='hover:text-primary text-lg cursor-pointer transition-all ease-in-out'
                                        onClick={() => setIsMenuOpen(false)} // Close menu on link click
                                    >
                                        {item.name}
                                    </li>
                                </Link>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </>
    );
};

export default Header;
