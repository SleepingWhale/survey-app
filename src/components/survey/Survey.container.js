import { connect } from 'react-redux';
import { Survey } from './Survey';
import {
  getCurrentQuestion,
  getQuantity,
  getCurrentQuestionIndex,
  updateReply,
  leafNext,
  leafPrevious
} from './Survey.redux';

function mapStateToProps(state) {
  return {
    question: getCurrentQuestion(state),
    quantity: getQuantity(state),
    questionIndex: getCurrentQuestionIndex(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onChange(index, value) {
      dispatch(updateReply(index, value));
    },
    onClickNext() {
      dispatch(leafNext());
    },
    onClickPrevious() {
      dispatch(leafPrevious());
    }
  };
}

export const SurveyContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Survey);
