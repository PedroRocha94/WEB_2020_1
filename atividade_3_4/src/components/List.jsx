import React, {Component} from 'react'
import Axios from 'axios'

import TableRow from './TableRow'

export default class List extends Component{
    constructor(props){
        super(props)
        this.state = {Disciplina:[]}
        this.apagarElementoPorId = this.apagarElementoPorId.bind(this)
    }

    componentDidMount(){
        Axios.get('http://localhost:3001/Disciplina')
        .then(
            (res)=>{
                this.setState({Disciplina:res.data})

            }
        )
        .catch(
            (error)=>{
                console.log(error)
            }
        )
    }

    montarTabela(){
        if(!this.state.Disciplina) return
        return this.state.Disciplina.map(
            (disc, i)=>{
                return <TableRow Disciplina={disc} key={i} apagarElementoPorId={this.apagarElementoPorId}/>
            }
        )
    }

    apagarElementoPorId(id){
        let tempDisciplina = this.state.Disciplina
        for(let i = 0; i < tempDisciplina.length; i++){
            if(tempDisciplina[i].id === id){
                tempDisciplina.splice(i,1)
            }
                
        }
        this.setState({Disciplina:tempDisciplina})
    }

    render(){
        return(
            <div style={{marginTop:10}}>
                <h3>Listar Disciplinas</h3>
                <table className='table table-striped' style={{marginTop:20}}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Curso</th>
                            <th>Capacidade</th>
                            <th colSpan="2"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.montarTabela()}
                    </tbody>
                </table>
            </div>
        )
    }

}