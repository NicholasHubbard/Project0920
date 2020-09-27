import API from '../../API';
import {
  REQ_EXERCISES_PENDING,
  REQ_EXERCISES_SUCCESS,
  REQ_EXERCISES_ERROR
} from '../actionTypes';

// cache data for 5 minutes
const CACHE_TIME = 1000 * 60 * 5;

export const fetchExercises = () => ({
  // types for this action - "request, success, error"
  types: [REQ_EXERCISES_PENDING, REQ_EXERCISES_SUCCESS, REQ_EXERCISES_ERROR],
  // a function used to call the api
  callAPI: () => API.get('/exercises'),
  // receives the current app state and returns true if we should call the api
  shouldCallAPI: state => {
    const { exerciseLoadedAt, isLoading } = state.exercises;
    // if items are currently loading don't call again
    if (isLoading) return false;
    const isCached = Date.now() - exerciseLoadedAt < CACHE_TIME;
    // if we don't have the item or it's beyond the cache timeout make the api call
    return !exerciseLoadedAt || !isCached;
  }
});
