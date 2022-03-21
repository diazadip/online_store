import * as React from 'react';
import categories from './categories'
import Header from './Header';
import Masterlayout from './Masterlayout';
import Footer from './Footer';

import { Provider } from 'react-redux';
import store from '../../app/store';

import Register from '../Register/index';

export default function Home() {
    // React.useEffect(() => {
    //     listen();
    //   }, [])
      
    return (
        <>
            <Header />
            <Masterlayout />
            <Footer />
        </>
    )
}