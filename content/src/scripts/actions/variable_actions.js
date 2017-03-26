export const SET_VARIABLE = "SET_VARIABLE";
export const GET_VARIABLE = "GET_VARIABLE";

export const setVariable = variableInfo => ({
  type: SET_VARIABLE,
  variableInfo
});

export const getVariable = variableInfo => ({
  type: GET_VARIABLE,
  variableInfo
});
