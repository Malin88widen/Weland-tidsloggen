import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { render } from "@testing-library/react";



export default class Login extends Component {
    state = {
        email: '',
        password: ''
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
                                    <h3>Logga in</h3>
                                    <br/>
                                    <div className="form-group">
                                        <label htmlFor="Email">Email:</label>
                                        <input type="email" id="email" className="form-control" placeholder="Email" onChange={this.handleChange} required/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">L&#246;senord:</label>
                                        <input type="password" id="password" className="form-control" placeholder="L&#246;senord" onChange={this.handleChange} required/>
                                    </div>
                                    <br/>
                                    <button type="submit" className="btn btn-primary btn-block">Logga in</button>
                                    <p className="forgot-password">
                                        <br />
                                        Vill du registrera ett nytt konto:
                                        <br />
                                        <a href="/Register">Registrera nytt konto</a>
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






