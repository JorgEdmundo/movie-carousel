import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header';

describe('Header Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Header />);
    jest.clearAllMocks();
  });

  it('should render the header', () => {
    expect(wrapper.find('.header')).toHaveLength(1);
  });

  it('should render a h1 tag', () => {
    expect(wrapper.find('h1')).toHaveLength(1);
  });

  it('should render two buttons', () => {
    expect(wrapper.find('Button')).toHaveLength(2);
  });
});
