import React from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import {SearchBox} from './components/search-box/search-box.component';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField:''
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => {this.setState({ monsters: users })
      //console.log('in fetch = ',this.state);
    });
      
  }
  handleChange = (e)=>{
    this.setState({searchField:e.target.value})
  }

  render() {
    const {monsters,searchField} = this.state;
    const fileteredMonsters = monsters.filter(
      monster => monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    // console.log('monsters in state',monsters);
    // console.log("monsters ",fileteredMonsters);
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox placeholder="search monster" handleChange={this.handleChange}></SearchBox>
        
        <CardList monsters={fileteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
