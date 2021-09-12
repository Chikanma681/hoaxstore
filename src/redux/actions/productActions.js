import { ActionTypes } from "../constants/action-types";

export const setProducts = (product) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: product,
  };
};

export const selectedProducts = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCTS,
    payload: product,
  };
};
