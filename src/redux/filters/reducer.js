import { STATUSCHANGED, COLORCHANGED } from "./action.types";
import initialState from "./initialState";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STATUSCHANGED:
      return {
        ...state,
        status: action.payload
      }

    case COLORCHANGED:
      const { color, changeType } = action.payload;

      switch (changeType) {
        case "add":
          return {
            ...state,
            colors: [
              ...state.colors,
              color
            ]
          }

        case "remove":
          return {
            ...state,
            colors: state.colors.filter(existColor => existColor !== color)
          }

        default:
          return state;
      }

    default:
      return state;
  }
}

export default reducer;