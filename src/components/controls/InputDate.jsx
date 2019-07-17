import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DatePicker, { registerLocale } from 'react-datepicker';
import { enGB } from 'date-fns/locale';
import 'react-datepicker/dist/react-datepicker.css';

registerLocale('enGB', enGB);

export class InputDate extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.instanceOf(Date),
    question: PropTypes.string
  };

  static defaultProps = {
    question: '',
    value: null
  };

  onChange = e => {
    const { onChange } = this.props;
    const { value } = e.target;
    onChange(value);
  };

  render() {
    const { value, question, id, onChange } = this.props;

    return (
      <div className="form-group">
        <label htmlFor={id}>{question}</label>
        <br />
        <DatePicker
          id={id}
          selected={value}
          onChange={onChange}
          className="form-control"
          locale="enGB"
        />
      </div>
    );
  }
}
