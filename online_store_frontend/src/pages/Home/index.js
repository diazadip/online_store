import * as React from 'react';
import categories from './categories'

function Sidebar() {
    return (
        <div class="w-60 h-full shadow-md bg-black px-1 absolute">
            <ul class="relative">
                {
                    categories.map((cat) => {
                        return (
                            < li class="relative" >
                                <a class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">
                                    <span>{cat}</span>
                                </a>
                            </li >
                        )
                    })
                }


            </ul>
        </div>
    )
}


export default function Home() {


    return (
        <>
            <Sidebar />
        </>
    )
}