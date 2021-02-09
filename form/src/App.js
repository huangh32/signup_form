import './App.css';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';
import {useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  const [isSubmitted, setIsSubmitted ]= useState(false);

  function submitForm(){
    setIsSubmitted(true);
  }
  return (
    <Router>
    <div className="App">
      <div className="Heading" style={{  "font-family": 'Montserrat',
  "font-weight": "bold","font-size": "65px"}}>INTERNSHIP SIGNUP FORM</div>
      <FormSignup submitForm = {submitForm} />
      {/* {!isSubmitted ? <FormSignup submitForm = {submitForm} />: <FormSuccess />} */}
    </div>

    <Switch>
      <Route exact path="/success" component={FormSuccess}/>
    </Switch>

    </Router>
  );
}

export default App;
