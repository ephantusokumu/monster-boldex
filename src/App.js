import React, {Component} from 'react';
import './App.css';
import {CardList} from './components/card-lists/card-list.component';
import {SearchBox} from './components/search-box/search-box.component'

class App extends Component{ 

// state

constructor(){
  super();
  this.state = {
    monsters:[  ],
    searchField:''
  };
  this.handleChange = this.handleChange.bind(this);
}


// fetch data from the API
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters:users}))

  }

  handleChange = e =>{
    this.setState({
      searchField:e.target.value
    });
  }


  render(){
    const {monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      );


    return(
      <div className='App'>
        <SearchBox 
        placeholder = 'search monsters'
        handleChange = { e => this.setState({searchField: e.target.value})}

        />
     

        <CardList monsters = {filteredMonsters}>
       
        </CardList>
    </div>
    );
  }
}

export default App;
