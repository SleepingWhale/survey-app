import {
  surveyReducer,
  initSurvey,
  updateReply,
  initState,
  INIT,
  UPDATE_REPLY,
  leafNext,
  leafPrevious
} from './Survey.redux';

const data = [
  {
    id: 'A01',
    text: 'What happened to your product?',
    reply: '',
    type: 'string',
    next: 'A02'
  },
  {
    id: 'A02',
    text: 'When did the incident occur?',
    reply: '',
    type: 'date',
    next: 'A03'
  },
  {
    id: 'A03',
    text: 'When was your last claim submission?',
    reply: '',
    type: 'date',
    next: null
  }
];

describe('Survey actions', () => {
  it('should create an action to init survey', () => {
    const expectedAction = {
      type: INIT,
      data
    };

    expect(initSurvey(data)).toEqual(expectedAction);
  });

  it('should create an action to update reply', () => {
    const value = 'some text';
    const expectedAction = {
      type: UPDATE_REPLY,
      value
    };

    expect(updateReply(value)).toEqual(expectedAction);
  });
});

describe('Survey reducer', () => {
  it('should return the initial state', () => {
    expect(surveyReducer(undefined, {})).toEqual(initState);
  });

  it('should handle INIT', () => {
    expect(surveyReducer(initState, initSurvey(data))).toEqual({
      questions: data,
      quantity: 3,
      currentQuestion: 0
    });
  });

  it('should handle UPDATE_REPLY', () => {
    const value = 'some text';

    expect(
      surveyReducer(
        {
          questions: data,
          quantity: 3,
          currentQuestion: 1
        },
        updateReply(value)
      )
    ).toEqual({
      questions: [
        data[0],
        {
          ...data[1],
          reply: value
        },
        data[2]
      ],
      quantity: 3,
      currentQuestion: 1
    });
  });

  it('should LEAF_NEXT currentQuestion', () => {
    expect(
      surveyReducer(
        {
          questions: data,
          quantity: 3,
          currentQuestion: 1
        },
        leafNext()
      )
    ).toEqual({
      questions: data,
      quantity: 3,
      currentQuestion: 2
    });
  });

  it('should not LEAF_NEXT currentQuestion', () => {
    expect(
      surveyReducer(
        {
          questions: data,
          quantity: 3,
          currentQuestion: 2
        },
        leafNext()
      )
    ).toEqual({
      questions: data,
      quantity: 3,
      currentQuestion: 2
    });
  });

  it('should LEAF_PREVIOUS currentQuestion', () => {
    expect(
      surveyReducer(
        {
          questions: data,
          quantity: 3,
          currentQuestion: 1
        },
        leafPrevious()
      )
    ).toEqual({
      questions: data,
      quantity: 3,
      currentQuestion: 0
    });
  });

  it('should not LEAF_PREVIOUS currentQuestion', () => {
    expect(
      surveyReducer(
        {
          questions: data,
          quantity: 3,
          currentQuestion: 0
        },
        leafPrevious()
      )
    ).toEqual({
      questions: data,
      quantity: 3,
      currentQuestion: 0
    });
  });
});
