export const ROUTE_LOADING = "ROUTE_LOADING";
export const ROUTE_FAIL = "ROUTE_FAIL";
export const ROUTE_SUCCESS = "ROUTE_SUCCESS";
export const REQUEST_ROUTE = "REQUEST_ROUTE";
export const SORT_PRICE = "SORT_PRICE";
export const SORT_RATING = "SORT_RATING";

export const routeLoadingAC = () => ({ type: ROUTE_LOADING });
export const routeFailAC = () => ({ type: ROUTE_FAIL });
export const routeSuccessAC = (payload) => ({
  type: ROUTE_SUCCESS,
  payload,
});
export const itemsRequest = () => ({ type: REQUEST_ROUTE });
export const itemsSortPrice = () => ({ type: SORT_PRICE });
export const itemsSortRating = () => ({ type: SORT_RATING });
