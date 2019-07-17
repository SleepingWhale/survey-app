import React from 'react';
import PropTypes from 'prop-types';
import { InputText } from './InputText';
import { InputNumber } from './InputNumber';
import { InputCheckbox } from './InputCheckbox';
import { InputDate } from './InputDate';
import { types } from '../../common';

const Controls = {
  [types.string]: InputText,
  [types.number]: InputNumber,
  [types.boolean]: InputCheckbox,
  [types.date]: InputDate
};

export const ControlSwitch = ({ type, ...rest }) => {
  const Control = Controls[type];

  if (!Control)
    return (
      <div className="form-group">
        <span className="badge badge-info">
          Something wrong with this question. Please, proceed to the next one.
        </span>
      </div>
    );

  return <Control {...rest} />;
};

ControlSwitch.prototype = {
  type: PropTypes.oneOf(Object.values(types))
};
