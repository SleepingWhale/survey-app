// Actions
export const INIT = 'survey-app/survey/INIT';
export const UPDATE_REPLY = 'survey-app/survey/UPDATE_REPLY';
export const LEAF_NEXT = 'survey-app/survey/LEAF_NEXT';
export const LEAF_PREVIOUS = 'survey-app/survey/LEAF_PREVIOUS';

// Reducer
const initState = {
  questions: [],
  quantity: 0,
  currentQuestion: 0
};

export function surveyReducer(state = initState, action = {}) {
  switch (action.type) {
    case INIT: {
      return {
        ...state,
        questions: action.data,
        quantity: action.data.length
      };
    }
    case UPDATE_REPLY: {
      const { index, value } = action;
      const question = state[index];

      return {
        ...state,
        questions: [
          ...state.slice(0, index),
          {
            ...question,
            reply: value
          },
          ...state.slice(index + 1)
        ]
      };
    }
    case LEAF_NEXT: {
      return {
        ...state,
        currentQuestion: Math.min(state.currentQuestion + 1, state.quantity - 1)
      };
    }
    case LEAF_PREVIOUS: {
      return {
        ...state,
        currentQuestion: Math.max(state.currentQuestion - 1, 0)
      };
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
    type: UPDATE_REPLY,
    index,
    value
  };
}

export function leafNext() {
  return {
    type: LEAF_NEXT
  };
}

export function leafPrevious() {
  return {
    type: LEAF_PREVIOUS
  };
}

// Selectors
export function getCurrentQuestion(state) {
  return state.survey.questions[state.survey.currentQuestion];
}

export function getQuantity(state) {
  return state.survey.quantity;
}

export function getCurrentQuestionIndex(state) {
  return state.survey.currentQuestion;
}
