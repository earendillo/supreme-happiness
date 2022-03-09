import React from 'react';
import { Test, BlueTest } from './Home.styles';
import { Pokemon } from './Pokemon.component';

export function Home(): JSX.Element {
    return (
        <div>
            HELLO WORLD FROM REACT COMPONENT, typescript working?
            <Test>hello world from styled components</Test>
            <BlueTest>hello world from blue test</BlueTest>

            Pokemon:
            <Pokemon />
        </div>
    )
}
