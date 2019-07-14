import { connect } from 'react-redux';
import { Survey } from './Survey';
import { getQuestions, updateReply } from './Survey.redux';

function mapStateToProps(state) {
  return {
    questions: getQuestions(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onChange(index, value) {
      dispatch(updateReply(index, value));
    }
  };
}

export const SurveyContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Survey);
