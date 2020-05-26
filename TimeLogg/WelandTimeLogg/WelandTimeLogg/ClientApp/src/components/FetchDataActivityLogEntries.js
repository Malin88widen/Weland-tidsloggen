import React, { Component } from "react";
import axios from 'axios';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";



class FetchDataActivityLogEntries extends Component {
    constructor(props) {
        super(props)

        this.state = {
            hour: '',
            name: '',
            sampleData: '',

        }
        //this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(prevProps) {
        //axios.get("https://localhost:44325/api/activityLogEntries")
        //    .then(response => {
        //        console.log(response)
        //        this.setState({ posts: response.data })
        fetch("https://localhost:44325/api/activityLogEntries")
            .then(response => response.text())
            .then(data => {
                this.setState({ sampleData: data });
                console.log("state", this.state.sampleData)
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


    handleNameChange = (e) => {

        this.setState({ [e.target.name]: e.target.value })
        console.log(e.target.name)
        console.log(e.target.value)

    }

    //handleHourChange = (e) => {

    //    this.setState({ [e.target.name]: e.target.value })
    //    console.log(e.target.name)
    //    console.log(e.target.value)

    //}

    handleSubmit = (e) => {
        e.preventDefault()
        const data = this.state;
        //data.append('Aktivitet', this.state.Aktivitet.value);
        //data.append('Timmar', this.state.Timmar.value);
        console.log(data)
        axios.post('https://localhost:44325/api/activityLogEntries/post', this.state)
            .then(response => {
                console.log(response)
                window.location.reload();
            })
    }


    handleSubmitSaveToHistory = (e) => {
        e.preventDefault()
        console.log(this.state)
        axios.post('https://localhost:44325/history')
            .then(response => {
                console.log(response)


            })
            .catch(error => {
                console.log(error)
            })

    }

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
                                        <Form.Control type="text" id="name" name="name" onChange={this.handleNameChange} />
                                    </Form.Group>
                                    <Form.Group controlId="formGroupPassword">
                                        <Form.Label>Dina arbetade timmar:</Form.Label>
                                        <Form.Control type="number" id="hour" name="hour" onChange={this.handleNameChange} />
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
                                        <table class="table-striped">
                                            <thead>
                                                <tr>
                                                    <th>Aktivitet</th>



                                                    <th>Timmar</th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    name
                                                    <th>{this.state.name}</th>

                                                    <th> </th>
                                                    hour
                                                    <th>{this.state.hour}</th>
                                                    {this.state.sampleData((data, index) => {
                                                        return <p>{data.name}</p>
                                                    })}
                                                
                                                    {this.state.sampleData}
                                                </tr>
                                            </tbody>
                                        </table>
                                       
                                     
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

export default FetchDataActivityLogEntries;



 //{this.state.sampleData/*.includes.DateTime.Today*/}


