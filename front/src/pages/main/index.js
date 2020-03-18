import React, { Component } from 'react'
import api from '../../services/api'
import './styles.css'
import { Link } from 'react-router-dom'

const styles = {
    transition: "all 0.5s ease-out"
}

export default class Main extends Component{
    constructor(props){
        super(props)

        this.state = {
            success: {
                opacity: "0",
            },
            users: [],
            name: null,
            email: null,
            password: null
        }
    }

    storeUser = (event) => {
        event.preventDefault()
        const dados = this.state
        api.post("http://127.0.0.1:3001/api/user/create", dados)
        .then(response => {
            this.addState([response.data.result])
        })
            

        this.setState({ success: {opacity: "1"} })
        window.setTimeout(() => {this.setState({ success: {opacity: "0"} })}, 1200)
    }

    handleChange = (event) => {
        event.preventDefault()
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    componentDidMount(){
        this.loadUsers()
    }

    loadUsers = async () => {
        const response = await api.get('user/retrieve')

        this.setState({ users: response.data.result})
    }

    addState(dados){
        this.setState({ 
            users: this.state.users.concat([dados[0]])
        })
    }

    render(){
        return (
            <div>

                <div className="store-user">
                    <div className="row">
                        <div className="col-md-6 offset-md-1">
                            <h3 className="store-title">Cadastrar usuário</h3>
                            <form onChange={this.handleChange} id="store-user-form">
                                <input type="text" name="name" placeholder="Seu nome" required/>
                                <input type="email" name="email" placeholder="Seu email" required/>
                                <input type="password" name="password" placeholder="Sua senha" required/>
                                <p style={{...styles, opacity: this.state.success.opacity}} className="cadastrado-sucesso">Cadastrado com sucesso!</p>
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
                            </div>
                        </div>
                    </div>
                </div>

                <div className="users-list container">
                    { this.state.users.map((user, index) => (
                        <article className="col-md-6 offset-md-3" key={index}>
                            <ul>
                                <li><b>Nome: </b>{ user.name }</li>
                                <li><b>Email: </b>{ user.email }</li>
                                <li><b>Senha: </b>********</li>
                            </ul>
                            <Link className="acessar" to={`/user/${user._id}`}>Acessar</Link>
                        </article>
                    )) }
                </div> 

            </div>
        )
    }
}