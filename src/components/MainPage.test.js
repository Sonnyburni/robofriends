import {render, screen, fireEvent} from '@testing-library/react';
import ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import MainPage from './MainPage';
import userEvent from '@testing-library/user-event';



const renderer = new ShallowRenderer();

beforeEach(() => {
})

it('renders MainPage without crashing', () => {
    const onSearchChange = jest.fn();
const pending = false;
const text = 'a';
const robots = [];
    renderer.render(<MainPage onSearchChange = {onSearchChange}  pending = {pending} text = {text} robots={robots} />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot()
});

it('renders robots correctly', () => {
    const onSearchChange = jest.fn();
    const pending = false;
    const text = 'o';
    const robots = [{
        id:3,
        name:'John',
        email:'john@gmail.com'
    }];
    const user = userEvent.setup()
    render(<MainPage onSearchChange = {onSearchChange}  pending = {pending} text = {text} robots={robots} />);
    screen.getByText('John');
})