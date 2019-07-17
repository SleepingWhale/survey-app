import { connect } from 'react-redux';
import { SubmitView } from './SubmitView';
import { getAllQuestions } from '../survey';

function mapStateToProps(state) {
  return {
    questions: getAllQuestions(state)
  };
}

export const SubmitViewContainer = connect(mapStateToProps)(SubmitView);
