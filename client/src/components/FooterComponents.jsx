import React from 'react'
import { Link } from "react-router-dom"

const FooterComponents = () => {
    return (
        <div>
            <footer className="bg-white  shadow sm:flex sm:items-center sm:justify-between p-4 sm:p-6 xl:p-8 dark:bg-gray-800 antialiased">
                <p className="mb-4 text-sm text-center text-gray-500 dark:text-gray-400 sm:mb-0">
                    &copy; 2019-2024 <Link to="/" className="hover:underline" target="_blank">Supriyo.com</Link>. All rights reserved.
                </p>
                <div className="flex justify-center items-center space-x-1">
                    <Link to="https://www.facebook.com/" target="_blank"  className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer dark:text-gray-400 dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600">
                        <i class="fa-brands fa-facebook"></i>
                    </Link>
                    <Link to="https://www.twitter.com/" target="_blank"  className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer dark:text-gray-400 dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600">
                    <i class="fa-brands fa-x-twitter"></i>
                    </Link>
                    <Link to="https://www.github.com/" target="_blank"  className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer dark:text-gray-400 dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600">
                    <i class="fa-brands fa-github"></i>
                    </Link>
                    <Link to="https://www.instagram.com/" target="_blank"  className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer dark:text-gray-400 dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600">
                    <i class="fa-brands fa-instagram"></i>
                    </Link>
                </div>
            </footer>
        </div>
    )
}

export default FooterComponents
