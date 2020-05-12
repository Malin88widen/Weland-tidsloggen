import React, { Component } from "react";
import Form from './Form'
import axios from 'axios';
import Table from 'react-bootstrap/table';
import Button from "react-bootstrap/Button";

class FetchDataForms extends React.Component {
    state = {
        loading: true,
        forms: [],
        person: null
    };

    async componentDidMount() {
        const url = "https://localhost:44383/api/forms";

        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        this.setState({ forms: data, loading: false });




    }



    render() {
        return (
            <div id="HomePageCSS">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-4"></div>
                        <form>
                            <div class="form-group">
                                <label for="forms">Spara Aktivitet:</label>
                                <select class="form-control">
                                    <option value="meeting">Möte</option>
                                    <option value="dokumentation">Dokumentation</option>
                                    <option selected value="default">
                                        hey
                                    </option>
                                    <option value="mango">Felsökning</option>
                                </select>
                                <br />
                                <br />
                                <label for="hours">Skriv in dina arbetande timmar:</label>
                                <input class="form-control" type={"numbers"}></input>
                                <br />
                                <button type="button" class="btn btn-success">Spara</button>
                            </div>


                            <ul>
                                {this.state.forms.map((form, id) => {
                                    return <li key={id}>{form.name}</li>;
                                })}

                                
                            </ul>
                        </form>

                    </div>
                </div>
            </div>
        );
    }
}


export default FetchDataForms;

                        //<ul>
                        //    <li>
                        //        {this.state.forms.map((Form) => Form
                        //     { this.state.forms.name }
                        //       )  </li>
                        //    )};
                        //</ul>