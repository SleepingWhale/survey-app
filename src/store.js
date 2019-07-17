import { combineReducers, createStore } from 'redux';
import { surveyReducer } from './components/survey';
import initialData from './data';

function setDefaultValue(question) {
  let reply;

  switch (question.type) {
    case 'string':
      reply = '';
      break;
    case 'number':
      reply = 0;
      break;
    case 'date':
      reply = null;
      break;
    case 'boolean':
      reply = false;
      break;
    default:
      reply = null;
  }

  return {
    ...question,
    reply
  };
}

function prepareData({ questions }) {
  const result = [];
  let question = questions[0];
  result.push(question);
  const findCb = next => next.id === question.next;

  do {
    question = questions.find(findCb);
    result.push(setDefaultValue(question));
  } while (question.next !== null);

  return result;
}

const questions = prepareData(initialData);

export const store = createStore(
  combineReducers({
    survey: surveyReducer
  }),
  {
    survey: {
      questions,
      quantity: questions.length,
      currentQuestion: 0
    }
  },
  window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);
