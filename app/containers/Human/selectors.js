import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the human state domain
 */

const selectHumanDomain = state => state.human || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Human
 */

const makeSelectHuman = () =>
  createSelector(
    selectHumanDomain,
    substate => substate,
  );

export default makeSelectHuman;
export { selectHumanDomain };
