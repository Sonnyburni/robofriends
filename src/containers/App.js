import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import { useSelector, useDispatch } from 'react-redux';
import'./App.css';
import ErrorBoundary from '../components/ErrorBoundary';

import {setSearchField, requestRobots} from '../actions';


const App = ({store}) => {

	const [searchResults, setSearchResults] = useState([]);
	const text = useSelector(state => state.searchRobots.searchField);
	const robots = useSelector(state => state.getRobots.users);
	const pending = useSelector(state => state.getRobots.isPending)
	const dispatch = useDispatch();
	const onSearchChange= (event) => {
		dispatch(setSearchField(event.target.value))
	}

	useEffect(() =>  {
        dispatch(requestRobots());
    }, [dispatch])

	useEffect(() => {
        let filteredRobots = robots.filter(robot => {
            return(
                robot.name.toLowerCase().includes(text.toLowerCase())
            );
        });
        setSearchResults(filteredRobots);
    }, [text,robots])

	const newRobot = searchResults;


		return pending ?
		<h1>Loading...</h1> :
		(
			<div className="tc">
				<Scroll>
					<h1 className="f2">RoboFriends</h1>
					<SearchBox SearchChange={ onSearchChange }/>
				</Scroll>
					{
						text === "" ? <CardList robots={ robots }/> : <CardList robots={ newRobot }/>
					}
			</div>
		);
    }	
	
		
	

export default App;