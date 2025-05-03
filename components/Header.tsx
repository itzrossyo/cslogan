"use client"
import React from 'react'
import { ClerkLoaded, SignedIn, SignInButton, UserButton, useUser } from '@clerk/nextjs'
import Link from 'next/link'
import { PackageIcon, TrolleyIcon } from '@sanity/icons'

function Header() {
    const { user } = useUser();
    return (
        <header className="flex flex-wrap justify-between items-center px-4 py-2">
            <div className="flex w-full flex-wrap justify-between items-center">
                <Link href="/" className="text-2xl font-bold text-blue-500 hover:opacity-50 cursor-pointer mx-auto sm:mx-0">
                    CSLogan
                </Link>

                <form action="/search" className="w-full sm:w-auto sm:flex-1 sm:mx mt-2 sm:mt-0">
                    <input
                        type="text"
                        name="query"
                        placeholder="Search..."
                        className="bg-gray-100 text-gray-800 px-4 py-2 rounded 
                                   focus:outline-none focus:ring-2 focus:ring-blue-500 
                                   focus:ring-opacity-50 border w-full max-w-4xl"
                    />
                </form>

                <div className="flex items-center space-x-2 mt-4 sm:mt-0 flex-1 sm:flex-none">
                    <Link href="/basket" className="flex-1 relative flex justify-center 
                    sm:justify-start sm:flex-none items-center space-x-2 bg-blue-500 hover:bg-blue-700
                     text-white font-bold py-2 px-4 rounded">
                        <TrolleyIcon className="w-4 h-4" />
                        {/* Span item count once global state is implemented */}
                        <span>Basket</span>
                    </Link>

                    <ClerkLoaded>
                        <SignedIn>
                            <Link href="/orders" className="flex-1 relative flex justify-center 
                            sm:justify-start sm:flex-none items-center space-x-2 bg-blue-500 hover:bg-blue-700
                             text-white font-bold py-2 px-4 rounded">
                                <PackageIcon className="w-4 h-4" />
                                <span>My Orders</span>
                            </Link>

                            <div className="flex items-center space-x-2 cursor-pointer">
                                <UserButton />
                                <div className="sm:block text-xs">
                                    <p className="text-gray-500">Welcome Back</p>
                                    <p className="text-gray-500">{user?.fullName}</p>
                                </div>
                            </div>
                        </SignedIn>

                        {!user && (
                            <SignInButton mode="modal" />
                        )}
                    </ClerkLoaded>
                </div>
            </div>
        </header>
    )
}

export default Header
