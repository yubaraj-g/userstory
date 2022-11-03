import React, { useState } from 'react'

function Mainbody() {
    const [text, setText] = useState("write a user story with acceptance criteria about crm ");

    function handleOnChange(typing) {
        setText(typing.target.value);
    }

    let shown = text;

    function handleCopy() {
        navigator.clipboard.writeText(shown);
        window.alert('copied.');
    }

    return (
        <div className='px-40 flex flex-col items-center h-fit pb-20'>
            <h2 className='px-32 w-full flex justify-center mt-12 font-semibold text-lg'>Built-in-Public User Story Generator for Product Managers and Designers.</h2>

            <div className='px-32 w-full flex justify-end mb-12'>
                <p className='text-xs text-gray-500'>Powered by a fine-tuned GPT-3 Model.</p>
            </div>

            <h1 className='px-32 font-extrabold text-2xl mt-8 mb-4'>Describe Product or Feature</h1>
            <p className='px-32 font-medium mb-12'>Give a short description about the product or feature you want to write a user story about.</p>

            <form action="/" className='px-32 w-full flex flex-col gap-4 pb-8' method='post'>
                <textarea className='border border-gray-300 w-full h-40 rounded-md outline-1 outline-slate-400 px-4 py-3 text-sm' id='textInput' onChange={handleOnChange} value={text}></textarea>

                <button className='bg-indigo-700 mx-auto text-white font-bold text-md py-2 w-full rounded-md hover:bg-indigo-900 outline-none hover:outline-4 hover:outline-indigo-400 shaodw-lg' type='submit'>Create User Story</button>
            </form>

            <div className='px-32 w-full flex flex-col items-center'>
                <p className='text-gray-400 font-bold text-md w-full flex justify-start'>Result</p>

                <div className='show-results w-full bg-white rounded-md h-56 shadow-md pl-6 pr-12 py-4 overflow-y-auto text-sm font-bold text-gray-700' id='resultbox'>
                    {shown}
                </div>

                <button className='bg-indigo-700 sticky w-10 h-9 flex justify-center items-center rounded-md hover:bg-gray-900 -mt-52 ml-auto mr-4 shadow-sm' onClick={handleCopy}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.66669 3.33332V13.3333C6.66669 13.7754 6.84228 14.1993 7.15484 14.5118C7.4674 14.8244 7.89133 15 8.33335 15H15C15.442 15 15.866 14.8244 16.1785 14.5118C16.4911 14.1993 16.6667 13.7754 16.6667 13.3333V6.03499C16.6667 5.81296 16.6223 5.59317 16.5361 5.38853C16.45 5.18389 16.3238 4.99852 16.165 4.84332L13.4025 2.14166C13.0912 1.8372 12.673 1.66671 12.2375 1.66666H8.33335C7.89133 1.66666 7.4674 1.84225 7.15484 2.15481C6.84228 2.46737 6.66669 2.8913 6.66669 3.33332V3.33332Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M13.3333 15V16.6666C13.3333 17.1087 13.1577 17.5326 12.8452 17.8452C12.5326 18.1577 12.1087 18.3333 11.6667 18.3333H5.00001C4.55798 18.3333 4.13406 18.1577 3.8215 17.8452C3.50894 17.5326 3.33334 17.1087 3.33334 16.6666V7.49998C3.33334 7.05795 3.50894 6.63403 3.8215 6.32147C4.13406 6.00891 4.55798 5.83331 5.00001 5.83331H6.66668" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Mainbody