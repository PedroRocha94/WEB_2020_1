import React, { Component } from 'react'

import TableRow from './TableRow'
import FirebaseContext from '../utils/FirebaseContext'

const ListPage = () => (
    <FirebaseContext.Consumer>
        { contexto => <List firebase={contexto} />}
    </FirebaseContext.Consumer>
)

class List extends Component {
    constructor(props) {
        super(props)
        this.state = { Disciplina: [], loading: false }
        this.apagarElementoPorId = this.apagarElementoPorId.bind(this)
    }

    componentDidMount() {
        this.setState({loading: true})
        this.ref = this.props.firebase.getFirestore().collection('disciplinas')
        this.ref.onSnapshot(this.alimentarDisciplinas.bind(this))
    }

    alimentarDisciplinas(query) {
        let disciplinas = []
        query.forEach(
            (doc) => {
                const { nome, curso, capacidade } = doc.data()
                disciplinas.push(
                    {
                        _id: doc.id,
                        nome,
                        curso,
                        capacidade,
                    }
                )
            }
        )
        this.setState({ disciplinas: disciplinas, loading: false })
    }

    montarTabela() {
        if (!this.state.Disciplina) return
        return this.state.Disciplina.map(
            (disc, i) => {
                return <TableRow Disciplina={disc} key={i} apagarElementoPorId={this.apagarElementoPorId} firebase={this.props.firebase} />
            }
        )
    }

    apagarElementoPorId(id) {
        let tempDisciplina = this.state.Disciplina
        for (let i = 0; i < tempDisciplina.length; i++) {
            if (tempDisciplina[i]._id === id) {
                tempDisciplina.splice(i, 1)
            }

        }
        this.setState({ Disciplina: tempDisciplina })
    }

    gerarConteudo() {
        if (this.state.loading) {
            return (
                <tr>
                    <td colSpan='6' style={{textAlign:"center"}}>
                        <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </td>
                </tr>

            )
        } else return this.montarTabela()
    }

    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3>Listar Disciplinas</h3>
                <table className='table table-striped' style={{ marginTop: 20 }}>
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
                        {this.gerarConteudo()}
                    </tbody>
                </table>
            </div>
        )
    }

}

export default ListPage