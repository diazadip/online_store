import React from "react";

import { useDispatch, useSelector } from 'react-redux';

import { fetchCategories } from '../../features/Categories/actions';

function SideBar(props) {
    let dispatch = useDispatch();

    let categories = useSelector(state => state.categories);

    React.useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch])

    console.log(categories)
    
    return (
        <>
            <div className="flex flex-no-wrap">
                <div className="w-64 absolute sm:relative bg-gray-800 shadow md:h-full flex-col justify-between hidden sm:flex">
                    <div className="px-8">
                        <ul className="mt-12">
                            {categories.data.map((categories, index) => {
                                    return <p key={index}>{categories}</p>
                                })
                            }
                            {/* <li className="flex w-full justify-between text-gray-300 hover:text-gray-500 cursor-pointer items-center mb-6">
                                 <div className="flex items-center">
                                     <span className="text-sm  ml-2">Dashboard</span>
                                 </div>
                             </li> */}
                        </ul>
                    </div>
                </div>

                <div className="container mx-auto py-10 md:w-4/5 w-11/12 px-6">
                    {props.isi}
                </div>
            </div>
        </>
    );
}

export default SideBar;
