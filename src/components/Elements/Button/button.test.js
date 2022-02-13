import React from 'react';
import { shallow } from 'enzyme';

import Button from './Button';

describe('Button Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Button type="button" textBtn="Button">
        Button
      </Button>,
    );
    jest.clearAllMocks();
  });

  it('should render a button element', () => {
    expect(wrapper.find('button')).toHaveLength(1);
  });

  it('should render a text for button', () => {
    expect(wrapper.text()).toEqual('Button');
  });

  it('should have a Button type defined', () => {
    expect(wrapper.props().type).toEqual('button');
  });

  it('should have an click event', () => {
    const mockCallBack = jest.fn();

    const button = shallow(
      <Button type="button" handleClick={mockCallBack} textBtn="Button">
        Hello!
      </Button>,
    );

    button.find('button').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
