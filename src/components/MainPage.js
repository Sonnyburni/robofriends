import'./MainPage.css';
import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import Header from	'../components/header';
import { useOnlineStatus } from '../components/online';


const MainPage = ({onSearchChange, pending, text, robots}) => {

	const online = useOnlineStatus();
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        let filteredRobots = robots.filter(robot => {
            return(
                robot.name.toLowerCase().includes(text.toLowerCase())
            );
        });
        setSearchResults(filteredRobots);
    }, [text,robots])

    const newRobot = searchResults;

	return(
		 online ?
			<div className='tc'>
				<Scroll>
					<Header />
					<SearchBox searchChange ={onSearchChange}/>
				</Scroll>
				    { pending ? <h1>Loading...</h1> :
					<ErrorBoundary>
					 {
                    text === "" ? <CardList robots={ robots }/> : <CardList robots={ newRobot }/>
                     }
					</ErrorBoundary>	
					}			
				</div>	
				:<h1>Please check your internet connection</h1>
			);
		}
		
	

export default MainPage;