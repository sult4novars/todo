import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../src/App';

Enzyme.configure({ adapter: new Adapter() });

test('It should say hello', () => {
  const component = shallow(<App />);
  expect(component.equals(<h1>Hello</h1>)).toBe(true);
});
