import React from 'react';
import { shallow } from 'enzyme';
import { Survey } from './Survey';

const question = {
  id: 'A01',
  text: 'What happened to your product?',
  reply: 'Got lost',
  type: 'string',
  next: 'A02'
};

describe('Survey', () => {
  it('should render correctly', () => {
    const onClickPreviousHandler = jest.fn();
    const onClickNextHandler = jest.fn();
    const component = shallow(
      <Survey
        question={question}
        quantity={3}
        questionIndex={0}
        onClickPrevious={onClickPreviousHandler}
        onClickNext={onClickNextHandler}
      />
    );
    expect(component).toMatchSnapshot();
  });

  it('should render correct header', () => {
    const onClickPreviousHandler = jest.fn();
    const onClickNextHandler = jest.fn();
    const component = shallow(
      <Survey
        question={question}
        quantity={3}
        questionIndex={2}
        onClickPrevious={onClickPreviousHandler}
        onClickNext={onClickNextHandler}
      />
    );

    expect(component.find('#survey-header').contains('3 / 3')).toBeTruthy();
    component.find('#survey-button-submit').simulate('click');
    expect(component.find('#survey-header').contains('Submitted')).toBeTruthy();
  });

  it('should leaf questions', () => {
    const onClickPreviousHandler = jest.fn();
    const onClickNextHandler = jest.fn();
    const component = shallow(
      <Survey
        question={question}
        quantity={3}
        questionIndex={1}
        onClickPrevious={onClickPreviousHandler}
        onClickNext={onClickNextHandler}
      />
    );

    component.find('#survey-button-next').simulate('click');
    expect(onClickNextHandler).toHaveBeenNthCalledWith(1);

    component.find('#survey-button-previous').simulate('click');
    expect(onClickNextHandler).toHaveBeenNthCalledWith(1);
  });

  it('should not leaf if value is invalid', () => {
    const onClickPreviousHandler = jest.fn();
    const onClickNextHandler = jest.fn();
    const component = shallow(
      <Survey
        question={{
          id: 'A01',
          text: 'What happened to your product?',
          reply: 'text',
          type: 'number',
          next: 'A02'
        }}
        quantity={3}
        questionIndex={1}
        onClickPrevious={onClickPreviousHandler}
        onClickNext={onClickNextHandler}
      />
    );

    component.find('#survey-button-next').simulate('click');
    expect(onClickNextHandler).not.toHaveBeenCalled();
    expect(component.exists('#survey-validation')).toBeTruthy();
  });

  it('should not leaf back when on first question', () => {
    const onClickPreviousHandler = jest.fn();
    const onClickNextHandler = jest.fn();
    const component = shallow(
      <Survey
        question={question}
        quantity={3}
        questionIndex={0}
        onClickPrevious={onClickPreviousHandler}
        onClickNext={onClickNextHandler}
      />
    );

    component.find('#survey-button-previous').simulate('click');
    expect(onClickNextHandler).not.toHaveBeenCalled();
  });
});
