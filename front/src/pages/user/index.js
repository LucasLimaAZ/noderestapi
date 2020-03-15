import React, { Component } from 'react'
import api from '../../services/api'
import './styles.css'
import { Link } from 'react-router-dom'

export default class User extends Component {
    state = {
        user: {}
    }

    async componentDidMount(){
        const { id } = this.props.match.params

        const response = await api.get(`/user/retrieve/${id}`)

        this.setState({ user: response.data.result[0] })
    }

    render(){
        const { user } = this.state

        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3 user-information">
                        <h4>{user.name}</h4>
                        <h5>{user.email}</h5>
                        <p className="user-paragraph">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ullamcorper arcu augue. Phasellus at nisi vitae lacus lacinia tincidunt vitae eget purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras rutrum cursus ipsum, non lacinia est vulputate a. Ut sed nunc est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nisl augue, volutpat in pharetra vel, dictum ac massa. Nullam maximus rhoncus gravida.
                        </p>
                        <Link className="voltar" to={`/`}>Voltar</Link>
                    </div>
                </div>
            </div>
        )
    }
}