import React, { Component } from "react";

function Form() {
  return (
    <form>
      <label for="activity">Välj Aktivitet eller skriv in en ny: </label>
      <input type={"text"}></input>
      <br />
      <br />
      <label for="hours">Skriv in dina arbetande timmar:  </label>
      <input type={"numbers"}></input>
      <br />
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Form;
