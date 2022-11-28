import {render, screen} from '@testing-library/react';
import Card from './Card';
import React from 'react';

it('expect to render Card component', () => {
    expect(render(<Card/>)).toMatchSnapshot();
})