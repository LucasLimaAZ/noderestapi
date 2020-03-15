import React, { Component } from 'react'
import api from '../../services/api'
import './styles.css'
import { Link } from 'react-router-dom'

export default class Main extends Component{
    state = {
        users: [],
    }

    componentDidMount(){
        this.loadUsers()
    }

    loadUsers = async () => {
        const response = await api.get('user/retrieve')

        this.setState({ users: response.data.result})
    }

    render(){
        return (
            <div className="users-list container">
                { this.state.users.map(user => (
                    <article className="col-md-6 offset-md-3" key={ user._id }>
                        <ul>
                            <li><b>Nome: </b>{ user.name }</li>
                            <li><b>Email: </b>{ user.email }</li>
                            <li><b>Senha: </b>********</li>
                        </ul>
                        <Link className="acessar" to={`/user/${user._id}`}>Acessar</Link>
                    </article>
                )) }
            </div>
        )
    }
}