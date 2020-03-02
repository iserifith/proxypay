/**
 * Redux related utils
 */

const createReducer = (initialState, handlers) => {
  return (state = initialState, action) => {
    return Object.prototype.hasOwnProperty.call(handlers, action.type)
      ? handlers[action.type](state, action)
      : state;
  };
};

export { createReducer };
