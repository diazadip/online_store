import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Carousel1 from '../../images/carousel/1.png';
import Carousel2 from '../../images/carousel/2.png';
import Carousel3 from '../../images/carousel/3.png';

export default function CarouselComp() {
    return (
        <Carousel showThumbs = {false} showStatus = {false} autoPlay = {true} infiniteLoop = {true}>
            <div>
                <img src={Carousel1} className='max-h-52'/>
            </div>
            <div>
                <img src={Carousel2} className='max-h-52'/>
            </div>
            <div>
                <img src={Carousel3} className='max-h-52'/>
            </div>
        </Carousel>
    );
}