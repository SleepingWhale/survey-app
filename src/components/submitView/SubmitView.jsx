import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { types, Validators } from '../../common';

function formatReply(reply, type) {
  if (type === types.date && Validators.date(reply)) {
    return format(reply, 'MM/dd/yyyy');
  }
  if (type === types.boolean) {
    return reply ? 'Yes' : 'No';
  }

  return reply;
}

export const SubmitView = ({ questions }) => {
  return (
    <dl className="row">
      {questions.map(({ text, reply, id, type }) => (
        <Fragment key={id}>
          <dt className="col-sm-9">{text}</dt>
          <dd className="col-sm-3">{formatReply(reply, type)}</dd>
        </Fragment>
      ))}
    </dl>
  );
};

SubmitView.prototype = {
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      reply: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.instanceOf(Date),
        PropTypes.bool
      ]),
      id: PropTypes.string,
      type: PropTypes.oneOf(Object.values(types))
    })
  )
};
