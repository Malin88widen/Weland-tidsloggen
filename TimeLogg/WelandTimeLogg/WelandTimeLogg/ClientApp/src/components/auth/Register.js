import React, { Component } from "react";
import ReactDOM from 'react-dom'
import Form from "react-bootstrap/Form";
import { render } from "@testing-library/react";

import Login from './Login';




export default class Register extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    }


    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card card-signin my-5">
                            <div className="card-body">

                                <form onSubmit={this.handleSubmit} className="white">
                                    <h3>Registrera nytt konto</h3>
                                    <br />
                                    <div className="form-group">
                                        <label htmlFor="firstName">F&#246;rnamn</label>
                                        <input type="text" id="firstName" className="form-control" placeholder="F&#246;rnamn" onChange={this.handleChange} required />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="lastName">Efternamn</label>
                                        <input type="text" id="lastName" className="form-control" placeholder="Efternamn" onChange={this.handleChange} required/>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" id="email" className="form-control" placeholder="Email" onChange={this.handleChange} required/>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="password">L&#246;senord</label>
                                        <input type="password" id="password" className="form-control" placeholder="L&#246;senord" onChange={this.handleChange} required />
                                    </div>
                                    <br />
                                    <button type="submit" className="btn btn-primary btn-block">Registrera konto</button>
                                    <br />
                                    <p className="forgot-password">
                                        Har du redan ett konto:
                                        <br />
                                        <a href="Login">Logga in</a>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }

}





