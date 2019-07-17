import React from 'react';
import { mount } from 'enzyme';
import { ControlSwitch } from './ControlSwitch';
import { types } from '../../common';

describe('ControlSwitch', () => {
  it(`should render control for ${types.boolean} type`, () => {
    const onChangeHandler = jest.fn();
    const component = mount(
      <ControlSwitch
        onChange={onChangeHandler}
        value={false}
        id="id"
        question="question"
        type={types.boolean}
      />
    );
    expect(component).toMatchSnapshot();
  });

  it(`should render control for ${types.string} type`, () => {
    const onChangeHandler = jest.fn();
    const component = mount(
      <ControlSwitch
        onChange={onChangeHandler}
        value="hello world"
        id="id"
        question="question"
        type={types.string}
      />
    );
    expect(component).toMatchSnapshot();
  });

  it(`should render control for ${types.number} type`, () => {
    const onChangeHandler = jest.fn();
    const component = mount(
      <ControlSwitch
        onChange={onChangeHandler}
        value={55}
        id="id"
        question="question"
        type={types.number}
      />
    );
    expect(component).toMatchSnapshot();
  });

  it(`should render control for ${types.date} type`, () => {
    const onChangeHandler = jest.fn();
    const component = mount(
      <ControlSwitch
        onChange={onChangeHandler}
        value={new Date(1563382002751)}
        id="id"
        question="question"
        type={types.date}
      />
    );
    expect(component).toMatchSnapshot();
  });
});
