const initialState = {
  meteo: {},
  meteoDays: {},
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_METEO":
      return { ...state, meteo: action.payload };
    case "SET_METEO_D":
      return { ...state, meteoDays: action.payload };
    default:
      return state;
  }
};
export default mainReducer;
