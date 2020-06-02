import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import Col from "react-bootstrap/Col";

function Settings() {
  return (
    <div>
    <div class="container">
      <div class="row">
        <div class="col-sm-4"></div>
  <div>
    <h1>Inställningar</h1>
    <br />
    <Form>
    <label for="activity">Välj färgtema:</label>
      <select  class="form-control">
        <option value="meeting">Dark Mode</option>
        <option value="dokumentation">Colorful</option>
        <option selected value="support">
          Standard 
        </option>
      </select>
  <br />
  {['checkbox'].map((type) => (
    <div key={`custom-${type}`} className="mb-3">
      <Form.Check 
        custom
        type={type}
        id={`custom-${type}`}
        label={`Check this custom ${type}`}
      />
    </div>
    
  ))}
    <Form.Check 
    type="switch"
    id="custom-switch"
    label="Check this switch"
  />
  
</Form>
<br />
    <button type="button" class="btn btn-success">
      Spara
    </button>
    </div>
    </div>
    </div>
    </div>
  );
}

export default Settings;
