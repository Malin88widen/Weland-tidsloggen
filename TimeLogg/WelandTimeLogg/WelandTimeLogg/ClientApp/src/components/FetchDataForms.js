import React, { Component } from "react";
//import Form from './Form'
import axios from 'axios';
import Table from 'react-bootstrap/table';
import Button from "react-bootstrap/Button";
import { Formik } from 'formik';
import * as yup from 'yup';
import Container from "react-bootstrap/Container";

class FetchDataForms extends React.Component {
    state = {
        loading: true,
        forms: [],
        person: null
    };

    async componentDidMount() {
        const url = "https://localhost:44383/api/forms/{id}";

        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        this.setState({ forms: data, loading: false });
    }

    //FormikTest

    render() {
        return (
            <div id="HomePageCSS">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-4"></div>
                        <Container>
                            <section className="form-style">
                                <h2>Example Clear Inputs with Formik</h2>
                                <Formik
                                    initialValues={{ Firstname: '', FirstNumber: '' }}
                                    validationSchema={yup.object({ Firstname: yup.string(), FirstNumber: yup.number() })}
                                    onSubmit={(values) => {
                                        console.log(values);
                                    }}>
                                    {
                                        formik => (
                                            <form onSubmit={formik.handleSubmit}>
                                                <label htmlFor="FirstName">Name</label>
                                                <input
                                                    type="text"
                                                    id="Firstname"
                                                    onChange={formik.handleChange}
                                                    value={formik.values.Firstname}
                                                ></input>
                                                <label htmlFor="FirstNumber">Number</label>
                                                <input
                                                    type="text"
                                                    id="FirstNumber"
                                                    onChange={formik.handleChange}
                                                    value={formik.values.Firstname}
                                                ></input>
                                                <input type="submit" value="Send"></input>
                                            </form>
                                        )
                                    }

                                </Formik>

                            </section>
                        </Container>

                    </div>
                </div>
            </div>
        );
    }
}


export default FetchDataForms;

                