import React from 'react'

export default (props) =>{
    return (
        <div class="card" style={{}}>
            <img class="card-img-top" src={props.image} alt="Card image cap"></img>
            <div class="card-body">
                <h5 class="card-title">{props.name}</h5>
                <p class="card-text">Guerreiro Lendario, utiliza 6 espadas em batalha.</p>

            </div>
        </div>
    );
}