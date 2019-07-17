import React, { PureComponent } from 'react';
import { ControlSwitch } from '../controls';
import { Validators, validationMessages } from '../../common';

export class Survey extends PureComponent {
  state = {
    isValid: true
  };

  handleSubmit = () => {
    console.log('submit');
  };

  handleNext = () => {
    const { question, onClickNext } = this.props;

    if (Validators[question.type](question.reply)) {
      this.setState({ isValid: true });
      onClickNext();
    } else {
      this.setState({ isValid: false });
    }
  };

  handleChange = value => {
    const { onChange } = this.props;
    onChange(value);
  };

  render() {
    const { question, quantity, questionIndex, onClickPrevious } = this.props;
    const { isValid } = this.state;
    const previousDisabled = questionIndex === 0;
    const isLastQuestion = quantity === questionIndex + 1;
    const { reply, text, id, type } = question;

    return (
      <div className="container">
        <div className="card w-50 border-primary">
          <div className="card-header bg-primary text-white">
            {`${questionIndex + 1} / ${quantity}`}
          </div>
          <div className="card-body">
            <ControlSwitch
              onChange={this.handleChange}
              value={reply}
              question={text}
              id={id}
              type={type}
            />
            {!isValid && (
              <div className="form-group">
                <span className="badge badge-danger">
                  {' '}
                  {validationMessages[type]}{' '}
                </span>
              </div>
            )}
            <div className="d-flex justify-content-between">
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={onClickPrevious}
                disabled={previousDisabled}
              >
                Previous
              </button>
              {isLastQuestion ? (
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  onClick={this.handleSubmit}
                >
                  Submit
                </button>
              ) : (
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  onClick={this.handleNext}
                >
                  Next
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
