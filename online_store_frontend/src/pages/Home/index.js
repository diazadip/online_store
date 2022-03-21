import * as React from 'react';
import categories from './categories'
import Header from './Header';
import Masterlayout from './Masterlayout';
import Footer from './Footer';

export default function Home() {
    return (
        <>
            <Header />
            <Masterlayout />
            <Footer />
        </>
    )
}