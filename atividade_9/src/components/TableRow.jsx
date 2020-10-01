import React, {Component} from 'react'
import {Link} from 'react-router-dom'


export default class TableRow extends Component{

    constructor(props){
        super(props)
        this.apagar = this.apagar.bind(this)
    }

    apagar(id, nome){
        let res = window.confirm(`Deseja apagar ${nome}, id: ${id}`)
        if(res){
            this.props.firebase.getFirestore().collection('disciplinas').doc(id).delete()
            .then(()=>console.log(`${nome} apagado`))
            .catch(error=>console.log(error))
        }
    }

    render(){
        return(
            <tr>
                <td>
                    {this.props.Disciplina._id}
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
                    <Link to={"/edit/" + this.props.Disciplina._id} className='btn btn-primary'>Editar</Link>
                </td>
                <td style={{texteAling: "center"}}>
                    <button onClick={
                        ()=>this.apagar(this.props.Disciplina._id, this.props.Disciplina.nome)
                    } 
                    className='btn btn-danger'>
                        Apagar
                    </button>
                </td>
            </tr>
        )
    }
}