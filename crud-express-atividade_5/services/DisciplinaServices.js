const DisciplinaModel = require('../models/DisciplinaModel')
const e = require('express')

let Disciplinas = []
let _id = 0

class DisciplinaService{

    static register(data){
        let Disciplina = new DisciplinaModel(
            _id++,
            data.nome,
            data.curso,
            data.capacidade
        )
        Disciplinas.push(Disciplina)
        return Disciplina
    }

    static list(){
        return Disciplinas
    }

    static update(_id,data){
        for(let d of Disciplinas){
            if(d._id == _id){
                d.nome = data.nome
                d.curso = data.curso
                d.capacidade = data.capacidade
            }
            return d
        }
        return null
    }

    static delete(_id){
        for(let i = 0; i < Disciplinas.length; i++){
            if(Disciplinas[i]._id == _id){
                Disciplinas.splice(i, 1)
                return true
            }
        }
        return false
    }

    static retrieve(_id){
        for(let i = 0; i < Disciplinas.length; i++){
            if(Disciplinas[i]._id == _id){
                return Disciplinas[i]
            }
        }
        return {}
    }

}

module.exports = DisciplinaService