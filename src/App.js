import React, { Component} from 'react';
import CardList from './CardList';
// import { robots } from './robots';
import SearchBox from './SearchBox'
import './App.css';


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
        console.log('constructor');
    }


    componentDidMount() {
        // this.setState({ robots: robots})
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> {
            return response.json();
        })
        .then(users=> {
            this.setState({ robots:users})
        })
        console.log('did mount');
    }

    onSearchChange= (event) => {
        // console.log(event.target.value);
        this.setState({searchfield: event.target.value})
        
        // console.log(filteredRobots);
    }

    render() {
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
})
        console.log('render');
        if (this.state.robots.length === 0) {
            return <h2>Loading Robots</h2>        
        } 
        else {
            return (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <CardList robots={ filteredRobots} />
                </div>
                
            );
        }        
    }    
}
export default App;