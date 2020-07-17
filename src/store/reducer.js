const initialState = {
  age: 21
};

const reducer = (state = initialState, action) => {
  const newState = {...state};
  if (action.type === 'AGE_UP') {
    newState.age++;
    newState.loading = false;
  }

  if (action.type === 'AGE_DOWN') {
    newState.age--;
  }
  
  if (action.type === 'LOADING') {
    newState.loading = true;
  }
  return newState;
}

export default reducer;
