import * as React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { fetchProducts, setPage, goToNextPage, goToPrevPage } from '../../features/Products/actions';

export default function Pagination() {
    let dispatch = useDispatch();

    let products = useSelector(state => state.products);

    React.useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch, products.currentPage])

    let jumlahPages = 0;
    let arrayPages = [];
    let rangePages = [];

    if (products.totalItems === -1) {
        jumlahPages = 1;
    }
    else {
        jumlahPages = Math.ceil(products.totalItems / products.perPage);

        for (let i = 1; i <= jumlahPages; i++) {
            arrayPages.push(i)
        }
    }

    if (products.currentPage === 1) {
        rangePages.push(products.currentPage)
        rangePages.push(products.currentPage + 1)
        rangePages.push(products.currentPage + 2)
    }
    else if (products.currentPage === arrayPages.length) {
        rangePages.push(products.currentPage - 2)
        rangePages.push(products.currentPage - 1)
        rangePages.push(products.currentPage)
    }
    else {
        rangePages.push(products.currentPage - 1)
        rangePages.push(products.currentPage)
        rangePages.push(products.currentPage + 1)
    }

    function PaginationMin7() {
        return <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
                <p className="text-sm text-gray-700">
                    Showing <span className="font-medium">{products.currentPage > arrayPages[0] ? (1 + ((products.currentPage - 1) * products.perPage)) : 1}</span> to <span className="font-medium">{products.currentPage === arrayPages.length ? products.totalItems : (products.currentPage * products.perPage)}</span> of{' '}
                    <span className="font-medium">{products.totalItems}</span> results
                </p>
            </div>
            <div>
                {arrayPages.map((pages, index) => {
                    let currentClass = '';

                    products.currentPage === pages ?
                        currentClass = "z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium" :
                        currentClass = "bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"

                    return <button
                        href="#"
                        aria-current="page"
                        className={currentClass}
                        onClick={() => dispatch(setPage(pages))}
                        key={index}
                    >
                        {pages}
                    </button>
                })}
            </div>
        </div>


    }

    function PaginationPlus7() {
        return <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
            <div className="flex-1 flex justify-between sm:hidden">
                <button
                    href="#"
                    className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                    onClick={() => dispatch(setPage(1))}
                >
                    First
                </button>
                <button
                    className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                    onClick={() => dispatch(setPage(arrayPages.length))}
                >
                    Last
                </button>
            </div>
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm text-gray-700">
                        Showing <span className="font-medium">{products.currentPage > arrayPages[0] ? (1 + ((products.currentPage - 1) * products.perPage)) : 1}</span> to <span className="font-medium">{products.currentPage === arrayPages.length ? products.totalItems : (products.currentPage * products.perPage)}</span> of{' '}
                        <span className="font-medium">{products.totalItems}</span> results
                    </p>
                </div>
                <div>
                    <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                        <button
                            href="#"
                            className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                            onClick={() => dispatch(setPage(1))}
                        >
                            First
                        </button>
                        {products.currentPage === 1 ?
                            null :
                            <button
                                href="#"
                                className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                                onClick={() => dispatch(goToPrevPage())}
                            >
                                Prev
                            </button>
                        }
                        {rangePages.map((pages, index) => {
                            let currentClass = '';
                            products.currentPage === pages ?
                                currentClass = "z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium" :
                                currentClass = "bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"

                            return <button
                                aria-current="page"
                                className={currentClass}
                                onClick={() => dispatch(setPage(pages))}
                                key={index}
                            >
                                {pages}
                            </button>
                        })}
                        {products.currentPage === arrayPages.length ?
                            null :
                            <button
                                className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                                onClick={() => dispatch(goToNextPage())}
                            >
                                Next
                            </button>
                        }

                        <button
                            className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                            onClick={() => dispatch(setPage(arrayPages.length))}
                        >
                            Last
                        </button>
                    </nav>
                </div>
            </div>
        </div>
    }

    return (
        <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
            {jumlahPages <= 7 ? <PaginationMin7 /> : <PaginationPlus7 />}
        </div>
    )
}