import {
  SET_EXERCISES_PENDING,
  REQ_EXERCISES_SUCCESS,
  REQ_EXERCISES_ERROR,
  REQ_EXERCISES_PENDING
} from '../actionTypes';
import exercises from '../../exercises';
import createReducer from '../helpers/createReducer';

const initialState = {
  // will hold each item with ids as keys
  byId: {},
  // an array of all the ids
  exercises: [],
  // needed for cache state
  exercisesLoadedAt: 0,
  // isLoading
  isLoading: false,
  // any errors
  error: null
};

function exercisesPending(state, action) {
  return {
    ...state,
    isLoading: true,
    error: null
  };
}

function exercisesSuccess(state, action) {
  return {
    ...state,
    isLoading: false,
    error: null,
    exercisesLoadedAt: Date.now(),
    byId: {
      ...state.byId,
      ...action.data.reduce(
        (exercises, exercise) => ({
          ...exercises,
          [exercise.id]: {
            data: exercise,
            isLoading: false,
            exercisesLoadedAt: Date.now(),
            error: null
          }
        }),
        {}
      )
    },
    allIds: [
      ...new Set([...state.allIds, ...action.data.map(exercise => exercise.id)])
    ]
  };
}

function exercisesError(state, action) {
  return {
    ...state,
    isLoading: false,
    error: action.err
  };
}

export default createReducer(initialState, {
  [REQ_EXERCISES_PENDING]: exercisesPending,
  [REQ_EXERCISES_SUCCESS]: exercisesSuccess,
  [REQ_EXERCISES_ERROR]: exercisesError
});
