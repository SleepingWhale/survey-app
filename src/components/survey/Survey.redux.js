// Actions
export const INIT = 'survey-app/survey/INIT';
export const UPDATE_REPLY = 'survey-app/survey/UPDATE_REPLY';
export const LEAF_NEXT = 'survey-app/survey/LEAF_NEXT';
export const LEAF_PREVIOUS = 'survey-app/survey/LEAF_PREVIOUS';

// Reducer
export const initState = {
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
      const { value } = action;
      const { currentQuestion, questions } = state;
      const question = questions[currentQuestion];

      return {
        ...state,
        questions: [
          ...questions.slice(0, currentQuestion),
          {
            ...question,
            reply: value
          },
          ...questions.slice(currentQuestion + 1)
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
export function initSurvey(data) {
  return {
    type: INIT,
    data
  };
}

export function updateReply(value) {
  return {
    type: UPDATE_REPLY,
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

export function getAllQuestions(state) {
  return state.survey.questions;
}
