import React, {Component} from 'react';
import './App.css';

import Navigate from './components/Navigate'
import Multi from './components/Multi'
import Maior from './components/Maior'
import Soma from './components/Soma'

export default class App extends Component{
    render(){
      return (
        <div className="Container">
          <h1>
            Calculadora
          </h1>
          <div className='line'>
            <Navigate/>
          </div>
          <div>
            <Maior/>
            <Soma/>
            <Multi/>
          </div>
        </div>
      )
    }  
}