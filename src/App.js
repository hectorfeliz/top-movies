import React from 'react';
import logo from './logo.svg';
import './css/App.css';
import Container from '@material-ui/core/Container';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Years from "./components/Years";

function App() {



    return (  
      <div className="App">
        <header className="App-header">
        <Container>
        <h1><img src={logo} className="App-logo" alt="logo" />Top 10 Movies Per Year</h1>
        </Container>
        </header>
        <Container>
        <FormControl>
          <InputLabel htmlFor="year-select">Select a year</InputLabel>
          <Years />
        </FormControl>
  
        </Container>
      </div>
  
    );
 
  

}



export default App;
