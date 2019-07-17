import React, { PureComponent } from 'react';
import { ControlSwitch } from '../controls';

export class Survey extends PureComponent {
  handleNext = () => {
    const { questionIndex } = this.state;
    this.setState({ questionIndex: questionIndex + 1 });
  };

  handleSubmit = () => {
    console.log('submit');
  };

  onChange = value => {
    const { onChange } = this.props;
    const { questionIndex } = this.state;

    onChange(questionIndex, value);
  };

  render() {
    const {
      question,
      quantity,
      questionIndex,
      onClickNext,
      onClickPrevious
    } = this.props;
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
              onChange={this.onChange}
              value={reply}
              question={text}
              id={id}
              type={type}
            />
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
                  onClick={onClickNext}
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
