// Actions
export const INIT = 'survey-app/questions/INIT';
export const UPDATE = 'survey-app/questions/UPDATE';

// Reducer
export function questionsReducer(state = [], action = {}) {
  switch (action.type) {
    case INIT: {
      return action.data;
    }
    case UPDATE: {
      const { index, value } = action;
      const question = state[index];

      return [
        ...state.slice(0, index),
        {
          ...question,
          reply: value
        }
      ];
    }
    default:
      return state;
  }
}

// Action Creators
export function initSurvey() {
  return {
    type: INIT
  };
}

export function updateReply(index, value) {
  return {
    type: INIT,
    index,
    value
  };
}

// Selectors
export function getQuestions(state) {
  return state.questions;
}
