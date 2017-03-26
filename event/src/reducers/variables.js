export default (state = [], action) => {
  switch (action.type) {
    case "GET_VARIABLE":
      console.log("get is the action");
      return ["get is working"];
    case "SET_VARIABLE":
      console.log("set is the action");
      return ["set is working"];
    default:
      return [`${action.variableInfo}`];
  }
};
