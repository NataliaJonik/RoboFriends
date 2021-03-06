import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {
	constructor() {
		super()
		this.state = {
			Robots: [],
			searchfield: ''
		}
		
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=> response.json())
		.then(users => this.setState({ Robots: users}));
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
		
	}


	render() {
		const filterRobots = this.state.Robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		if (this.state.Robots.length === 0) {
			return <h1>Loading</h1>
		}	else {
			return (
				<div className='tc'>
					<h1 className='f1'>RoboFriends</h1>
					<SearchBox searchChange={this.onSearchChange}/> 
					<Scroll>
						<CardList Robots={filterRobots}/>
					</Scroll>
				</div>
			);

		}
	}
}

export default App;
