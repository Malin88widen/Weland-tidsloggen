import React, { Component } from "react";
import FetchDataActivityLogEntries from "./FetchDataActivityLogEntries";
import Form from "react-bootstrap/Form";
//import FetchDataForms from './components/FetchDataForms';


//function Form() {
//  return (
//   <form>
//        <div class="form-group">
//      <label for="activity">Välj Aktivitet:</label>
//      <select  class="form-control">
//        <option value="meeting">Möte</option>
//        <option value="dokumentation">Dokumentation</option>
//        <option selected value="support">
//                      {this.state.forms.name}
//        </option>
//        <option value="mango">Felsökning</option>
//      </select>
//      <br />
//      <br />
//      <label for="hours">Skriv in dina arbetande timmar:</label>
//      <input class="form-control" type={"numbers"}></input>
//      <br />
//      <button type="button" class="btn btn-success">Spara</button>
//      </div>
//    </form>
//  );
//}

//export default Form;



//function Form({ form }) {
//    return (
//        <div>
//            <h2>
//                I am {form.name}. I am {form.id} years old.
//            </h2>
//        </div>
//    )
//}




function ActivityList() {
    const activities = [
        {
            id: 1,
            name: "Hello",
        }
  
    ]


    //Name: form.name etc.
    //<div>{this.state.activityLogEntries.map((form, id) => {
    //return <p>{form.project}</p>

    const activitiesList = activities.map(form => <Form key={form.id} form={form} />)
    return <p>{activitiesList}</p> //Här är jag och på youtube
}

//export default ActivityList

function Person({ person }) {
    return (
        <div>
            <h2>
                I am {person.name}. I am {person.id} years old.
            </h2>
        </div>
    )
}


function NameList() {
    const persons = [
        {
            id: 1,
            name: 'Martin',
            age: 30
        },
        {
            id: 2,
            name: 'Sara',
            age: 30
        },
        {
            id: 3,
            name: 'Henrik',
            age: 30
        }
    ]


    //Name: form.name etc.


    const personList = persons.map(person => <Person key={person.id} person={person} />)
    return <p>{personList}</p> //Här är jag och på youtube

}

export default NameList