import React, { Component } from 'react';

export class Survey extends Component {
  state = {
    questionIndex: 0
  };

  handleNext = () => {
    const { questionIndex } = this.state;
    this.setState({ questionIndex: questionIndex + 1 });
  };

  handlePrevious = () => {
    const { questionIndex } = this.state;
    this.setState({ questionIndex: questionIndex - 1 });
  };

  handleSubmit = () => {
    console.log('submit');
  };

  render() {
    const { questions } = this.props;
    const { questionIndex } = this.state;
    const quantity = questions.length;
    const previousDisabled = questionIndex === 0;
    const isLastQuestion = quantity === questionIndex + 1;

    return (
      <div className="container">
        <div className="card w-50 border-primary">
          <div className="card-header bg-primary text-white">
            {`${questionIndex + 1} / ${quantity}`}
          </div>
          <div className="card-body">
            <h5 className="card-title">{questions[questionIndex].text}</h5>
            <div className="d-flex justify-content-between">
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={this.handlePrevious}
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
