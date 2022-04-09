import React from 'react';
import { TILE_SIZE } from '../../settings/constants';
import './index.css';

const Hero = () => {
    return (
        <div style={{
        position:'absolute',
        bottom:0,
        width:TILE_SIZE, height:100, 
        backgroundImage: "url(./assets/Hero.png)",backgroundRepeat:'no-repeat',
        animation:'hero-animation 1s steps(4) infinite'
        }}>

        </div>
    );
}

export default Hero;