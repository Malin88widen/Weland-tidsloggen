import React, { Component } from "react";
import axios from 'axios';
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import ActivityLogEntries from './FetchDataHistory'
import NameList from "./Form";
import ActivityList from "./Form";
import ReactSelectList from "react-selectlist";
import Select from 'react-select';
import SelectList from 'react-widgets/lib/SelectList';
import { Formik } from 'formik';
import * as yup from 'yup';
import FetchDataForms from './FetchDataForms';
import CreatableSelect from 'react-select/creatable';
import LogIn from "./auth/Login"






class FetchDataActivityLogEntries extends Component {
    constructor(props) {
        super(props)



        this.state = {
            hour: '',
            name: '',

            project: '',
            description: '',
            activityLogEntries: [],
            createdDate: [],
            selectedOption: null,
            selectListName: '',
            isClearable: true,
            isDisabled: false,
            isLoading: false,
            isRtl: false,
            isSearchable: true,
            data: [],
            row: '',
            removeData: true,

        };

        this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
        this.deleteHandler = this.deleteHandler.bind(this);
        this.handleRemove = this.handleRemove.bind(this);

        const { selectedOption } = this.state;
        //this.deleteHandler = this.deleteHandler.bind(this);

    }

    handleSuccessfulAuth(data) {
        this.props.handleLogin(data);
        this.props.history.push("/dashboard");
    }


    async componentDidMount() {
        const url = "https://localhost:44325/api/activityLogEntriesFrontPage";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        this.setState({ activityLogEntries: data, loading: false });
    }

    handleNameChange = (e) => {

        this.setState({ [e.target.name]: e.target.value })
        console.log(e.target.name)
        console.log(e.target.value)

    }

    handleSubmit = (e) => {
        const data = this.state;
        console.log(data)
        axios.post('https://localhost:44325/api/activityLogEntries/post', this.state)
            .then(response => {
                console.log(response)
                window.location.reload();
            })
    }

    //radera en rad 
    handleRemove = (id) => {
        const data = this.state;
        console.log(data)
        axios.delete('https://localhost:44325/api/activityLogEntries/delete/' + id,id)
            .then(response => {
                console.log(response)
                window.location.reload();
            })
    }

 



  

   


    handleChange = selectedOption => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);

    }


    handleChanges = (e) => {
        this.setState({
            value: e.target.value
        });
    }

    deleteDep(id) {
        if (window.confirm('Är du säker?')) {
            fetch('https://localhost:44325/api/activityLogEntries/{id}' + id, {
                method: 'DELETE',
                header: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
        }
    }



    //onDeleteClick(id, e) {
    //    let inventory;
    //    axios.delete(api() + '/products/' + id).then((deleted) => {
    //        axios.get(api() + this.state.lastGET).then((response) => {
    //            inventory = response.data.data
    //            this.setState({ inventory })
    //        })
    //    })
    //}

    //deleteHandler(e, id) {
    //    e.preventDefault()
    //    const data = this.state;
    //    console.log(data)
    //    axios.delete('https://localhost:44325/api/activityLogEntries/delete', this.state)
    //        .then(response => {
    //            console.log(response)
    //            window.location.reload();
    //        })
    //    console.log('raderat', id, e);
    //};

    //function(index) {
    //    var activityLogEntries = [...this.state.activityLogEntries];
    //    activityLogEntries.splice(index, 1);
    //    this.setState({ activityLogEntries });
    //};

    //handleRemove = (i) => {
    //    this.setState(state => ({
    //        data: state.data.filter((row, j) => j !== i),
    //    }));
    //}
    //https://www.youtube.com/watch?v=7HVxhqN5fkM

    //deleteMethod(id) {
    //    if (window.confirm('Are you sure?'))
    //    {

    //    }
    //}

    deleteHandler(id) {
        //id.preventDefault()
        const data = this.state;
        console.log(data)
        axios.delete('https://localhost:44325/api/activityLogEntries/delete', this.state)
            .then(response => {
                console.log(response)
                window.location.reload();
            })
        console.log('readerat', id);
    };




    render() {




        //Select som fungerar
        let activitiesSelectList = this.state.activityLogEntries.map((item, i) => {

            return (
                <option key={i} selectListName={item.id}>{item.name}</option>
            )
        }, this);


        //Select test
        var createdProjectOutput = this.state.activityLogEntries.map((form, id) => {
            return <p key={id}>{form.selectListName}</p>
        });

        //Select Test
        var options = this.state.activityLogEntries.map((item, i) => {
            return (
                <option key={i} selectListName={item.id}>{item.name}</option>
            )
        }, this);

        //Select test
        var RightOneMaby = this.state.activityLogEntries.map(function (id) {
            return <p>{id.selectListName}</p>
        })

        //Funktioner som gör att en select ska rensas osv. vet inte om det fungerar
        const {
            isClearable,
            isSearchable,
            isDisabled,
            isLoading,
            isRtl,
        } = this.state;


        //select med försök till dynamisk data som värden
        const optionsMabyDynamic = [
            {
                activitiesSelectList
            }
        ]

        //Hämtar data från "optionsMabyDynamic"
        const MyComponent = () => (
            <Select options={optionsMabyDynamic} />
        )

        //var inputs = this.state..map((location, i) => {
        //    let strLoc = JSON.stringify(location); // stringify it
        //    return (
        //        <div key={i}>
        //            <input type="radio" id={i} name="location" value={strLoc} />
        //            <label htmlFor={'choice' + { i }}>{location.name}</label>
        //        </div>
        //    );
        //});

        //function checkForBlanc() {
        //    if (!this.state.name.equals("")) {
        //        this.state.name = this.state.selectListName;
        //    }
        //    else if (!this.state.selectListName.map.equals("null")) {
        //        this.state.selectlistname = this.state.name;
        //    }
        //}






        return (
            <div id="HomePageCSS">
                <Container>
                    <h1>TidsLoggen</h1>
                    <br />
                    <Row>
                        <div className="col-sm-4"></div>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">


                                    <Row>
                                        <Col>
                                            <Form.Group controlId="formGroupPassword">
                                                <Form.Control type="text" placeholder="Arbetsuppgift *" id="name" name="name" onChange={this.handleNameChange} />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group controlId="formGroupEmail">
                                                <Form.Control type="number" placeholder="Tid*" id="name" name="hour" onChange={this.handleNameChange} />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Form.Group controlId="formGroupEmail">
                                        <Form.Control type="text" placeholder="Projekt" id="project" name="project" onChange={this.handleNameChange} />
                                    </Form.Group>
                                    <Form.Group controlId="formGroupEmail">
                                        <Form.Label>Beskrivning:</Form.Label>
                                        <Form.Control as="textarea" rows="3" type="text" id="description" name="description" onChange={this.handleNameChange} />
                                    </Form.Group>

                           
                                <br />
                                <button type="submit" className="btn btn-info" >Spara</button>

                            </div>


                        </form>

                    </Row>
                </Container>
                <br />
                <Container>
                    <h2>Historik</h2>
                    <Table id="myTable" striped bordered>
                        <thead>
                            <tr>
                                <th>Arbete</th>
                                <th>Timmar</th>
                                <th>Beskrivning</th>
                                <th>Projekt</th>
                                <th>Datum</th>
                                <th>Ta bort aktivitet</th>
                            </tr>
                        </thead>


                        <tbody>
                            {this.state.activityLogEntries.map(((item, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{item.name || item.selectListName}</td>
                                        <td>{item.hours} h</td>
                                        <td> {item.description}</td>
                                        <td>{item.project}</td>
                                        <td>{(new Date(item.createdDate).toLocaleDateString())}</td>



                                        <td className='opration'>
                                            <button onClick={() => this.handleRemove(item.id)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            }))}
                        </tbody>

                    </Table>

                </Container >

            </div>
        )
    }
};



export default FetchDataActivityLogEntries;
                                                //SELECTLIST!!
                                                //<div>

                                                //  <select type="text"
                                                //        id="selectListName"
                                                //        className="basic-single"
                                                //        classNamePrefix="select"
                                                //        isDisabled={isDisabled}
                                                //        isLoading={isLoading}
                                                //        isClearable={isClearable}
                                                //        isRtl={isRtl}
                                                //        isSearchable={isSearchable}
                                                //        name="selectListname"
                                                //        onChange={this.handleNameChange}>
                                                //        {checkForBlanc}
                                                //        {activitiesSelectList}
                                                //    </select>
                                                //</div>





                                               // Selectlist som fungerar fast man får ut [object Object] alltså ett helt objekt istället för en del av objectet
                                                //<SelectList
                                                //    type="text"
                                                //    id="selectListName"
                                                //    className="basic-single"
                                                //    classNamePrefix="select"
                                                //    defaultValue={activitiesSelectList}
                                                //    onChange={this.handleNameChange}
                                                //    isDisabled={isDisabled}
                                                //    isLoading={isLoading}
                                                //    isClearable={isClearable}
                                                //    isRtl={isRtl}
                                                //    isSearchable={isSearchable}
                                                //    name="color"
                                                //    options={activitiesSelectList}
                                                //    value={this.state.value}
                                                //    data={activitiesSelectList}
                                                ///>



                                                //Test select som inte fungerar
                                                //<div>
                                                //    <MyComponent />
                                                //</div>




//<SelectList //ta bort List för att få en dropdown
//    type="text"
//    id="selectListTwo"
//    name="selectListTwo"
//    closeMenuOnSelect={true}
//    components={animatedComponents}
//    options={options}
//    dataItemKey={RightOneMaby}
//    value={this.state.value}
//    onChange={this.handleChange}
//    groupBy={activityLogEntries => activityLogEntries.activitiesSelectList}
//    data={options}
//name="citySelect"
///>



//       this.deleteHandler = this.deleteHandler.bind(this);

//deleteHandler(id) {
    //e.preventDefault()
    //const data = this.state;
    //console.log(data)
    //axios.delete('https://localhost:44325/api/activityLogEntries/delete', this.state)
    //    .then(response => {
    //        console.log(response)
    //        window.location.reload();
    //    })
//    console.log('readerat', id);
//};


                                            //<Button onClick={function () { this.deleteHandler(id)}} className="btn btn-danger btn-sm">Delete</Button>


//<ReactSelectList
//    className={"rc-selectlist"}
//    data={data}
//    disabled={[true, true]}
//    value={selected}
//    multiple={multiple}
//    orientation={orientation}
//    onChange={this._onSelectChange}
///>

//<Select
//    name="form-field-name"
//    value="one"
//    options={options}
//    onChange={logChange}
///>



//<select value={selected[0]} onChange={this._onChangeDefault}>
//    <option value={1}> Nuggets </option>
//    <option value={2}> Jazz </option>
//    <option value={3}> Warriors </option>
//    <option value={4}> Lakers </option>
//</select>



                    //<NameList />
                    //<ActivityList />












