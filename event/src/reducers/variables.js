export default (state = ["anything"], action) => {
  let storageKey;
  switch (action.type) {
    // case "GET_VARIABLE":
    //   storageKey = action.variableInfo[1];
    //
    //
    //   chrome.storage.sync.get(null, function(stuff) {
    //     // anything on this line
    //     console.log(stuff);
    //   });
    //
    //   return state;
    case "SET_VARIABLE":
      storageKey = action.variableInfo[1];
      let storageValue = action.variableInfo[0];

      let obj = {};
      obj[storageKey] = storageValue;

      chrome.storage.sync.set(obj, () => {});

      return state;
    default:
      return state;
  }
};
