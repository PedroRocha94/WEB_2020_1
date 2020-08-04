import React from 'react'

import Hero from './Hero'
import Enemy from './Enemy'
import {Masamune, Yukimura} from '../assests/Const_image'


function Arena(props){
    return (
        <div class='arena'> 
            <h1>Arena: {props.nameArena}</h1>
            <div class='bodyCard'>
                <Hero name='Date Masamune' image={Masamune}/>
                <Enemy name='Sanada Yukimura' image={Yukimura}/>
            </div>
        </div>
        
    );
}

export default Arena;