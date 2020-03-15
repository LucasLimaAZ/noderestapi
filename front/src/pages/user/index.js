import React, { Component } from 'react'
import api from '../../services/api'

export default class User extends Component {
    state = {
        user: {}
    }

    async componentDidMount(){
        const { id } = this.props.match.params

        const response = await api.get(`/users/retrieve`)

        this.setState({ user: response.data.result })
    }

    render(){
        const { user } = this.state

        return(
            <div className="user-info">
                <h1>{user.name}</h1>
                <h2>{user.email}</h2>
                <h2>********</h2>
            </div>
        )
    }
}