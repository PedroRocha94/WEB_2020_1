import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Axios from 'axios'

export default class TableRow extends Component{

    constructor(props){
        super(props)
        this.apagar = this.apagar.bind(this)
    }

    apagar(){
        Axios.delete('http://localhost:3001/Disciplina/' + this.props.Disciplina.id)
        .then(res=>this.props.apagarElementoPorId(this.props.Disciplina.id))
        .catch(error=>console.log(error))
    }

    render(){
        return(
            <tr>
                <td>
                    {this.props.Disciplina.id}
                </td>
                <td>
                    {this.props.Disciplina.nome}
                </td>
                <td>
                    {this.props.Disciplina.curso}
                </td>
                <td>
                    {this.props.Disciplina.capacidade}
                </td>
                <td style={{texteAling: "center"}}>
                    <Link to={"/edit/" + this.props.Disciplina.id} className='btn btn-primary'>Editar</Link>
                </td>
                <td style={{texteAling: "center"}}>
                    <button onClick={this.apagar} className='btn btn-danger'>Apagar</button>
                </td>
            </tr>
        )
    }
}