import {render, screen} from '@testing-library/react';
import CardList from './CardList';
import React from 'react';

it('expect to render Card component', () => {
    const mockRobots = [
        {
            id: 1,
            name: 'John Doe',
            username: 'JohnD',
            email: 'john@gmail.com'

        }
    ]
    expect(render(<CardList robots = {mockRobots}/>)).toMatchSnapshot();
})