import './styles.css'
import React, { Component, useReducer } from 'react'
import api from '../../services/api'
import Main from '../../pages/main'

export default class Store extends Component{

    constructor(props){
        super(props)
        this.state = {
            name: null,
            email: null,
            password: null
        }
    }

    storeUser = (event) => {
        event.preventDefault()
        const dados = this.state
        api.post("http://127.0.0.1:3001/api/user/create", dados, response => {
            console.log(response)
        })
        alert("Cadastrado com sucesso!")
    }

    handleChange = (event) => {
        event.preventDefault()
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
        return(
            <div className="store-user">
                <div className="row">
                    <div className="col-md-6 offset-md-1">
                        <h3 className="store-title">Cadastrar usuário</h3>
                        <form onChange={this.handleChange} id="store-user-form">
                            <input type="text" name="name" placeholder="Seu nome" required/>
                            <input type="email" name="email" placeholder="Seu email" required/>
                            <input type="password" name="password" placeholder="Sua senha" required/>
                        </form>
                    </div>
                    <div className="col-md-4">
                        <div className="users-mount container">
                            <ul>
                                <li>Nome: {this.state.name}</li>
                                <li>Email: {this.state.email}</li>
                                <li>Password: ********</li>
                            </ul>
                            <button onClick={this.storeUser} className="acessar">Cadastrar</button>
                            <button onClick={Main.addState.bind(Main)} className="btn btn-primary">Adicionar State</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}