import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class InputCheckbox extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.bool,
    question: PropTypes.string
  };

  static defaultProps = {
    value: false,
    question: ''
  };

  onChange = e => {
    const { onChange } = this.props;
    const { checked } = e.target;
    onChange(checked);
  };

  render() {
    const { value, question, id } = this.props;

    return (
      <div className="form-group">
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id={id}
            checked={value}
            onChange={this.onChange}
          />
          <label className="form-check-label" htmlFor={id}>
            {question}
          </label>
        </div>
      </div>
    );
  }
}
