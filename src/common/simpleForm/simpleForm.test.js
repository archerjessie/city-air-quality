import React from 'react';
import SimpleForm from './SimpleForm';
import renderer from 'react-test-renderer';

describe("SimpleForm", () => {
    it("renders as expected", () => {
        const tree = renderer
            .create(<SimpleForm search="melbourne" />)
            .toJSON();

        expect(tree).toMatchSnapshot();
    })
})