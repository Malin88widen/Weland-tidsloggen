import React, { Component } from "react";

function Form() {
  return (
   <form>
        <div class="form-group">
      <label for="activity">Välj Aktivitet:</label>
      <select  class="form-control">
        <option value="meeting">Möte</option>
        <option value="dokumentation">Dokumentation</option>
        <option selected value="support">
          Support
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
    </form>
  );
}

export default Form;
