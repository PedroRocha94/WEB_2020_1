import React, {Component} from 'react'

export default class ClasseApresentacao extends Component{
    render(){
        return (
            <div>
                <h3>{this.props.nome}</h3>
                <h3>{this.props.curso}</h3>
                <h3>{this.props.cidade}</h3>
            </div>
        )
    }
}
