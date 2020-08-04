import React from 'react';
import './App.css';

//import Arena from './components/questao1_2/Arena'
//import Hero from './components/questao1_2/Hero'
//import Enemy from './components/questao1_2/Enemy';
//import World from './components/questao3/World'
import Arena4 from './components/questao4/Arena4';
import Hero4 from './components/questao4/Hero4';
import Enemy4 from './components/questao4/Enemy4';


function App() {
  return (
    //questões 1 e 2
    /*<div>
      <Arena/>
    </div>*/
    //questão 3
    /*<World>
      <Arena nameArena='Miyagi'/>
      <Arena nameArena='Yamagata'/>
      <Arena nameArena='Fukushima'/>
    </World>*/
    //questão 4
    <div>
      <Arena4 nameArena='Fukushima'>
        <Hero4 name='Date Masamune'/>
        <Enemy4 name='Sanada Yukimura'/>
      </Arena4>
    </div>

  );
}

export default App;
