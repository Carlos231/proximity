import React from 'react';
import renderer from 'react-test-renderer';

import App from '../App';

describe('<App />', () => {
    it('has 1 child', () => {
        const tree = renderer.create(<App />).toJSON();
        expect(tree.children.length).toBe(1);
    });

    it('renders correctly', () => {
        renderer.create(<App />);
    });

    // Snapshot testing: used to make sure UI stays consistent

    it('renders correctly - snapshot', () => {
        const tree = renderer.create(<App />).toJSON();
        expect(tree).toMatchSnapshot();
    });

});