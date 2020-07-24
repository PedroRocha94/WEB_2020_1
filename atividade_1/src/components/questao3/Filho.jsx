import React from 'react'

import Pai from './Pai'

export default props => {
    const msgRecebida = msg =>alert(`Recebi: ${msg}`);
    return (
        <div>
            <Pai notificarFilho={msgRecebida}/>
        </div>
    )
}