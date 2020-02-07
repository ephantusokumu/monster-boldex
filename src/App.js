import React, {Component} from 'react';
import './App.css';
import {CardList} from './components/card-lists/card-list.component'

class App extends Component{
// state

constructor(){
  super();
  this.state = {
    monsters:[  ]
  };
}


// fetch data from the API
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters:users}))

  }


  render(){
    return(
      <div className="App">
        <CardList monsters = {this.state.monsters}>
       
        </CardList>
    </div>
    )
  }
}

export default App;
