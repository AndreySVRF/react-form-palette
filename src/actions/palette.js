export const addColor = (color) => ({
  type: 'ADD_COLOR',
  payload: color
})

export const updateColor = (colorObj, position) => ({
  type: 'UPDATE_COLOR',
  payload: {colorObj, position}
})

export const deleteColor = (position) => ({
  type: 'DELETE_COLOR',
  payload: position
})
