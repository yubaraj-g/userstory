import React from 'react'

function Footer() {
    return (
        <div className='bg-white rounded-lg shadow flex flex-col md:flex md:items-center justify-center md:p-4 dark:bg-gray-800 gap-2'>
            <span class="text-sm text-gray-400 sm:text-center dark:text-gray-400"
            >© 2022
                <a href="/" class="hover:underline"> UserStory-R-Us™</a>. All
                Rights Reserved.
            </span>
            <span className='text-xs text-gray-400 text-center'>
                Made by Yuvraj G.
            </span>
        </div>
    )
}

export default Footer