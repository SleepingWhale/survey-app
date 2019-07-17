import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';

const getInput = type => {
  return class Input extends Component {
    static propTypes = {
      id: PropTypes.string.isRequired,
      onChange: PropTypes.func.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      question: PropTypes.string
    };

    static defaultProps = {
      question: ''
    };

    constructor(props) {
      super(props);
      this.input = createRef();
    }

    componentDidMount() {
      this.input.current.focus();
    }

    onChange = e => {
      const { onChange } = this.props;
      const { value } = e.target;
      onChange(value);
    };

    render() {
      const { value, question, id } = this.props;

      return (
        <div className="form-group">
          <label htmlFor={id}>{question}</label>
          <input
            ref={this.input}
            type={type}
            className="form-control"
            onChange={this.onChange}
            value={value}
            id={id}
            autoComplete="off"
          />
        </div>
      );
    }
  };
};

export const InputText = getInput('text');
export const InputNumber = getInput('number');
