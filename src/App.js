import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './App.css';
import ItemList from './components/ItemList'




class App extends Component {
  render() {
    return (
      <MuiThemeProvider>  
        <div className="App">

            <ItemList/>
           
        
       
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
