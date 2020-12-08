import { SORT_PRICE, SORT_RATING } from "./../action/ItemsAction";
import {
  ROUTE_FAIL,
  ROUTE_LOADING,
  ROUTE_SUCCESS,
} from "../action/RouteAction";

const initialState = {
  loading: false,
  faile: false,
  items: null,
};

const RouteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ROUTE_LOADING:
      return {
        ...state,
        faile: false,
        loading: true,
      };

    case ROUTE_FAIL:
      return {
        ...state,
        loading: false,
        faile: true,
      };

    case ROUTE_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload,
      };
    // case SORT_PRICE:
    //   return {
    //     ...state,
    //     items: state.items!.sort((a, b) => b.price - a.price),
    //   };
    // case SORT_RATING:
    //   return {
    //     ...state,
    //     items: state.items!.sort((a, b) => b.rating - a.rating),
    //   };

    default:
      return state;
  }
};

export default RouteReducer;
