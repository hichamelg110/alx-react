import { Map } from 'immutable';
import uiReducer from './uiReducer';
import * as actions from '../actions/uiActionTypes';

describe('uiReducer', () => {
  it('returns the initial state when no action is passed', () => {
    const initialState = Map({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: Map({})
    });
    expect(uiReducer(undefined, {}).toJS()).toEqual(initialState.toJS());
  });

  it('returns the initial state when SELECT_COURSE action is passed', () => {
    const initialState = Map({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: Map({})
    });
    expect(uiReducer(undefined, { type: 'SELECT_COURSE' }).toJS()).toEqual(initialState.toJS());
  });

  it('changes isNotificationDrawerVisible correctly when DISPLAY_NOTIFICATION_DRAWER action is passed', () => {
    const initialState = Map({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: Map({})
    });
    const newState = uiReducer(initialState, { type: actions.DISPLAY_NOTIFICATION_DRAWER });
    expect(newState.get('isNotificationDrawerVisible')).toBe(true);
  });
});
