import React from 'react'

export default (props) =>{
    return (
        <div class="card" style={{}}>
            <img class="card-img-top" src='https://cdn.wikimg.net/en/strategywiki/images/3/3e/Sengoku_Basara_SH_character_Yukimura.png' alt="Card image cap"></img>
            <div class="card-body">
                <h5 class="card-title">{props.name}</h5>
                <p class="card-text">Guerreiro Lendario, utiliza 6 espadas em batalha.</p>

            </div>
        </div>
    );
}