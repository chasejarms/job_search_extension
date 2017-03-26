export default (state = [], action) => {
  let key;
  switch (action.type) {
    case "GET_VARIABLE":
      key = action.variableInfo[1];

      // chrome.storage.sync.get(key);

      // return chrome.storage.sync.get(null);
      return state;
    case "SET_VARIABLE":
      key = action.variableInfo[0];
      let value = action.variableInfo[1];

      chrome.storage.sync.set({key: value}, () => {});

      // return chrome.storage.sync.get(null);
      return state;
    default:
      return state;
  }
};
