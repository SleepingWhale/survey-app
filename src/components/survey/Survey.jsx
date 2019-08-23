import React, { PureComponent, Fragment } from 'react';
import { ControlSwitch } from '../controls';
import { SubmitViewContainer } from '../submitView';
import { Validators, validationMessages, types } from '../../common';
import { UserInfo } from '../UserInfor';

export class Survey extends PureComponent {
  state = {
    isValid: true,
    isSubmitted: false
  };

  validate = () => {
    const { question } = this.props;

    if (!Object.hasOwnProperty.call(types, question.type)) {
      return true;
    }

    return Validators[question.type](question.reply);
  };

  handleSubmit = () => {
    const isValid = this.validate();

    if (isValid) {
      this.setState({ isValid: true, isSubmitted: true });
    } else {
      this.setState({ isValid: false });
    }
  };

  handleNext = () => {
    const { onClickNext } = this.props;
    const isValid = this.validate();

    if (isValid) {
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
    const { isValid, isSubmitted } = this.state;
    const previousDisabled = questionIndex === 0;
    const isLastQuestion = quantity === questionIndex + 1;
    const { reply, text, id, type } = question;

    return (
      <div className="container py-3">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <div className="card border-primary">
              <div
                className="card-header bg-primary text-white"
                id="survey-header"
              >
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    {isSubmitted
                      ? 'Submitted'
                      : `${questionIndex + 1} / ${quantity}`}
                  </div>
                  <UserInfo />
                </div>
              </div>
              <div className="card-body">
                {isSubmitted ? (
                  <div className="card-text">
                    <SubmitViewContainer />
                  </div>
                ) : (
                  <Fragment>
                    <ControlSwitch
                      onChange={this.handleChange}
                      value={reply}
                      question={text}
                      id={id}
                      type={type}
                      key={id}
                    />
                    {!isValid && (
                      <div className="form-group" id="survey-validation">
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
                        id="survey-button-previous"
                      >
                        Previous
                      </button>
                      {isLastQuestion ? (
                        <button
                          type="button"
                          className="btn btn-outline-primary"
                          onClick={this.handleSubmit}
                          id="survey-button-submit"
                        >
                          Submit
                        </button>
                      ) : (
                        <button
                          type="button"
                          className="btn btn-outline-primary"
                          onClick={this.handleNext}
                          id="survey-button-next"
                        >
                          Next
                        </button>
                      )}
                    </div>
                  </Fragment>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
