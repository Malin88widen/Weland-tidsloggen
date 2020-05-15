import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/table';
import { Form } from 'react-bootstrap';
import { withRouter } from 'react-router';



class FetchDataForms extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            Timmar: '',
            Aktivitet: '',
            sampleData: '',

        }

        //this.handleInputChange = this.handleInputChange.bind(this);
    }


    componentDidMount(prevProps) {
        //axios.get("https://localhost:44383/api/forms")
        //    .then(response => {
        //        console.log(response)
        //        this.setState({ posts: response.data })
        fetch("api/forms")
            .then(response => response.text())
            .then(data => {
                this.setState({ sampleData: data });
                console.log(data)
            })
            .catch(error => {
                console.log(error)
                this.setState({ errorMsg: 'Error retriving data' })
            })



        //axios.get("https://localhost:44383/api/forms/test")
        //    .then(response => {
        //        console.log(response)
        //        this.setState({ posts: response.data })
        //    })
        //    .catch(error => {
        //        console.log(error)
        //        this.setState({ errorMsg: 'Error retriving data' })
        //    })
        //axios.get("https://localhost:44383/FetchDataActivities")
        //    .then(response => {
        //        console.log(response)
        //        this.setState({ response: response.data })
        //    })
        //    .catch(error => {
        //        console.log(error)
        //        this.setState({ errorMsg: 'Error retriving data' })
        //    })
    }

    //displayTemp() {
    //    fetch("api/forms")
    //        .then(response => response.text())
    //        .then(data => {
    //            this.setState({ temp: data });

    //        });
    //}


    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
        axios.post('https://localhost:44383/api/forms/post', this.state)
            .then(response => {
                console.log(response)
                window.location.reload();
              
            })
            .catch(error => {
                console.log(error)
            })

    }

    //handleSubmitSaveToHistory  = (e) => {
    //    e.preventDefault()
    //    console.log(this.state)
    //    axios.post('https://localhost:44383/api/forms/postToHistory', this.state)
    //            .then(response => {
    //        console.log(response)
    //window.location.reload();

    //            })
    //            .catch (error => {
    //    console.log(error)
    //})

    //    }

    render() {
        const { Name } = this.state


        return (
            <div id="HomePageCSS">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-4"></div>
                        <form onSubmit={this.handleSubmit}>
                            <div class="form-group">
                                <Form>
                                    <Form.Group controlId="formGroupEmail">
                                        <Form.Label>Aktiviteten du arbetat med:</Form.Label>
                                        <Form.Control type="text" name="Aktivitet" value={Name} onChange={this.handleChange} />
                                    </Form.Group>
                                    <Form.Group controlId="formGroupPassword">
                                        <Form.Label>Dina arbetade timmar:</Form.Label>
                                        <Form.Control type="number" name="Timmar" value={Name} onChange={this.handleChange} />
                                    </Form.Group>
                                </Form>


                                <button type="submit" class="btn btn-info">Spara</button>

                            </div>
                        </form>
                    </div>
                    <br />
                    <div>
                        <div class="container">
                            <div class="row">
                                <div class="col-sm-4"></div>
                                <form onSubmit={this.handleSubmitSaveToHistory}>
                                    <div class="form-group">
                                        <p>Historik:</p>
                                        {this.state.sampleData/*.includes.DateTime.Today*/}

                                        <br />
                                        <br />
                                        <div>
                                            <button type="submit" class="btn btn-success">Spara till historik</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div >
            </div>
        );
    }
}


export default FetchDataForms;





                        ////<ul>
                        ////    <li>
                        ////        {this.state.forms.map((Form) => Form
                        //     { this.state.forms.name }
                        //       )  </li>
                        //    )};
                        //</ul>

//<select value={this.state.value}>
//    <option value="Möte" onChange={this.handleChange}>Möte</option>
//    <option value="Dokumentation" onChange={this.handleChange}>Dokumentation</option>


//    <option selected value="default" onChange={this.handleChange}>
//        hey

//                                        </option>
//    <option value="Felsökning" onChange={this.handleChange}>Felsökning</option>
//</select>


    //async componentDidMount() {
    //    const url = "https://localhost:44383/api/forms";

    //    const response = await fetch(url);
    //    const data = await response.json();
    //    console.log(data);
    //    this.setState({ forms: data, loading: false });
    //}
    //componentDidMount() {
    //    // Simple POST request with a JSON body using fetch
    //    const requestOptions = {
    //        method: 'POST',
    //        headers: { 'Content-Type': 'application/json' },
    //        body: JSON.stringify({ title: 'React POST Request Example' })
    //    };
    //    fetch('https://localhost:44383/api/activityLogEntries/posts', requestOptions)
    //        .then(response => response.json())
    //        .then(data => this.setState({ postId: data.id }));
    //}



    //handleChange(event) {
    //    this.setState({ value: event.target.value });
    //}
    //handleSubmit(event) {
    //    alert('Your favorite activity is: ' + this.state.value);
    //    event.preventDefault();
    //}

    //render() {
    //    const {Name} = this.state
    //    return (
    //        <div>
    //            <form onSubmit={this.handleSubmit} >
    //                <div>
    //                    <input type="text" name="Name" value={Name} onChange={this.handleChange} />
    //                </div>
    //                <button type="submit">Submit</button>
    //            </form>
    //        </div>
    //        )
    //}