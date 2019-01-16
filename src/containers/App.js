import React, { Component} from 'react';
import CardList from '../components/CardList';
// import { robots } from './robots';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
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
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
})
        console.log('render');
        if (robots.length === 0) {
            return <h2>Loading Robots</h2>        
        } 
        else {
            return (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardList robots={ filteredRobots} />
                    </Scroll>
                    
                </div>
                
            );
        }        
    }    
}
export default App;