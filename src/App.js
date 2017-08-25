import React from 'react';
import {connect} from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios'
import {sort, isLoading} from './actions/sort'
import './App.css';
import ItemList from './components/ItemList'
import Item from './components/Item'
var image = require('./hat.png')

const styles = {
  button: {
    margin: 12,
  },
  exampleImageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  },
};


const App = (props)=> {
  const sortTime = ()=>{
    props.isLoading()
    props.sort()
  }
  
  return (
    <MuiThemeProvider>  
      <div className="App">
      {
              props.loading ?
              <Item gif={image} infinite="infinite" animation="pulse" name="Escogiendo..."/>
              :
              <RaisedButton
              onClick={sortTime}
              label="Elige una nueva persona!"
              labelPosition="before"
              primary={true}
              style={styles.button}
              containerElement="label"
            />
          }
          <ItemList data={props.sorted_items}/>
        
         
      
     
      </div>
    </MuiThemeProvider>
  );
}


const mapStateToProps = (state)=>{
  return {
    items : state.sort.items,
    sorted_items: state.sort.sorted_items,
    sort_item :state.sort.sort_item,
    loading: state.sort.loading
  }
}

const mapDispatchToProps = dispatch=>{
  return{
    sort: ()=>{
      setTimeout(()=>{
        axios.get('https://api.giphy.com/v1/gifs/random?api_key=fd5fadd98b414e4091e60466e59dcf02&tag=funny&rating=R')
        .then((data)=>{
          dispatch(sort(data))
        })
      },3000)
        
      
    },
    isLoading: ()=>{
      dispatch(isLoading())
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
