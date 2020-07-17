export const loading = () => {
  return {
    type: 'LOADING'
  };
}

export const ageUpAsnc = val => {
  return { type: "AGE_UP", value: val };
}

export const ageUp = val => {
  return dispatch => {
    dispatch(loading());
    setTimeout(() => {
      dispatch(ageUpAsnc(1));
    }, 5000);
  };
}

export const ageDown = val => {
  return { type: "AGE_DOWN", value: val };
}