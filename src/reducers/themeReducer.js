const defaultState = {
  lightTheme: false
};

export default function themeReducer(state = defaultState, action) {
  switch (action.type) {
    case 'CHANGE_THEME':
      return {
        lightTheme: action.payload
      };
    default:
      return state;
  }
}
