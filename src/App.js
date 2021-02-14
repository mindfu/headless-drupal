import './App.css';
import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
     super(props);
     // Setting up initial state
     this.state = {
      title: ''
     }
   }
   
  // calling the componentDidMount() method after a component is rendered for the first time
  componentDidMount() {
     this.serverRequest = axios.get(this.props.source).then(entity =>{    
           this.setState({
            title: entity.data[2].title[0].value
            });
       });
  }
  // calling the componentWillUnMount() method immediately before a component is unmounted from the DOM
  // componentWillUnmount() {
  //      this.serverRequest.abort();
  // }
   
  render() {
       return (
           <div>
               <h1>Entity:</h1>
               <h2>{this.state.title}</h2>
           </div>
       ); 
    }
  }
  // rendering into the DOM
  ReactDOM.render(
       <App source='http://localhost/drupal/api/entities' />, 
       document.getElementById('root')
  );

export default App;
