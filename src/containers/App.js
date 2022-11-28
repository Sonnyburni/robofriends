import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import'./App.css';
import {setSearchField, requestRobots} from '../actions';
import MainPage from '../components/MainPage';


const App = ({store}) => {

    const text = useSelector(state => state.searchRobots.searchField);
	const robots = useSelector(state => state.getRobots.users);
	const pending = useSelector(state => state.getRobots.isPending);

	const dispatch = useDispatch();

	const onSearchChange= (event) => {
		dispatch(setSearchField(event.target.value))
	}

	useEffect(() =>  {
        dispatch(requestRobots());
    }, [dispatch])

	return(
		 <MainPage onSearchChange = {onSearchChange}  pending = {pending} text = {text} robots={robots} />
			);
		}
		
	

export default App;