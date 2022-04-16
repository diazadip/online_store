import * as React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { fetchProducts, setPage, goToNextPage, goToPrevPage } from '../../features/Products/actions';

import Pagination from './pagination'

import BounceLoader from 'react-spinners/BounceLoader';

export default function Product() {
    let dispatch = useDispatch();

    let products = useSelector(state => state.products);

    React.useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch, products.currentPage])

    return (
        <>
            {products.status === 'process' && !products.data.length ?
                <div className="flex justify-center">
                    <BounceLoader color="red" />
                </div>
                : null}

            <div className='grid grid-cols-4 gap-4'>
                {products.data.map((product, index) => {
                    return <div key={index} className="flex justify-center">
                        <div className="rounded-lg shadow-lg bg-white max-w-sm">
                            <a href="#!">
                                <img className="rounded-t-lg" src={`${process.env.REACT_APP_API_HOST}/upload/${product.image_url}`} alt="" />
                            </a>
                            <div className="p-6">
                                <h5 className="text-gray-900 text-xl font-medium mb-2">{product.name}</h5>
                                <p className="text-gray-700 text-base mb-4">
                                    Some quick example text to build on the card title and make up the bulk of the card's
                                    content.
                                </p>
                                <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
                            </div>
                        </div>
                    </div>
                })}
            </div>

            <Pagination />


        </>
    )
}