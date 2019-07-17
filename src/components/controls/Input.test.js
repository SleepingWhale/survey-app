import React from 'react';
import { mount } from 'enzyme';
import { InputText, InputNumber } from './Input';

describe('InputText', () => {
  it('should render correctly', () => {
    const onChangeHandler = jest.fn();
    const component = mount(
      <InputText
        onChange={onChangeHandler}
        value="text"
        id="id"
        question="question"
      />
    );
    expect(component).toMatchSnapshot();
  });

  it('should call handler', () => {
    const onChangeHandler = jest.fn();
    const content = 'hello world';
    const component = mount(
      <InputText
        onChange={onChangeHandler}
        value=""
        id="id"
        question="question"
      />
    );
    const input = component.find('input').at(0);

    input.instance().value = content;
    input.simulate('change');

    expect(onChangeHandler).toHaveBeenNthCalledWith(1, content);
  });
});

describe('InputNumber', () => {
  it('should render correctly', () => {
    const onChangeHandler = jest.fn();
    const component = mount(
      <InputNumber
        onChange={onChangeHandler}
        value="111"
        id="id"
        question="question"
      />
    );
    expect(component).toMatchSnapshot();
  });
});
