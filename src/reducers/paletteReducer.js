const defaultState = {
  colors: []
};

export default function paletteReducer(state = defaultState, action) {
  switch (action.type) {
    case 'ADD_COLOR':
      return {
        colors: [...state.colors, action.payload]
      };
    case 'UPDATE_COLOR':
      return {
        colors: [
          ...state.colors.slice(0, action.payload.position),
          action.payload.colorObj,
          ...state.colors.slice(action.payload.position + 1)
        ]
      };
    case 'DELETE_COLOR':
      return {
        colors: [
          ...state.colors.slice(0, action.payload),
          ...state.colors.slice(action.payload + 1)
        ]
      };
    default:
      return state;
  }
}
