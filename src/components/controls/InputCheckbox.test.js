import React from 'react';
import { mount } from 'enzyme';
import { InputCheckbox } from './InputCheckbox';

describe('InputCheckbox', () => {
  it('should render correctly', () => {
    const onChangeHandler = jest.fn();
    const component = mount(
      <InputCheckbox
        onChange={onChangeHandler}
        value={false}
        id="id"
        question="question"
      />
    );
    expect(component).toMatchSnapshot();
  });

  it('should call handler', () => {
    const onChangeHandler = jest.fn();
    const component = mount(
      <InputCheckbox
        onChange={onChangeHandler}
        value={false}
        id="id"
        question="question"
      />
    );
    const input = component.find('input').at(0);

    input.simulate('change', { target: { checked: true } });

    expect(onChangeHandler).toHaveBeenNthCalledWith(1, true);
  });
});
