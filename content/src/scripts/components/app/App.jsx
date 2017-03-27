import React, {Component} from 'react';


class App extends Component {
  constructor(props) {
    super(props);
    this.sendCorrectAction = this.sendCorrectAction.bind(this);
    this._isArrowPresent = this._isArrowPresent.bind(this);
    this._isCorrectInputType = this._isCorrectInputType.bind(this);
    this.handleTabEvent = this.handleTabEvent.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleTabEvent);

    let indeedPopup = document.getElementsByClassName('indeed-apply-popup');

    // if (indeedPopup.length > 0) {
    //   indeedPopup.forEach(popUp => {
    //     document.addEventListener('keydown', this.handleTabEvent);
    //   });
    // }
    console.log("component mounted");
  }

  handleTabEvent(e) {
    let key = e.which || e.keyCode;
    if (key === 9 && this._isArrowPresent(e.target.value)) {

      if (this._isCorrectInputType(e.target)) {
        this.sendCorrectAction(e.target.value, e);
      }
    }
  }

  _isCorrectInputType(target) {
    switch(target.type) {
      case "text":
      case "email":
      case "number":
      case "search":
      case "tel":
      case "time":
        return true;
      default:
        return false;
    }
  }

  sendCorrectAction(text, e) {
    let splitUpText = text.split(/=>(.+)/);
    let splitUpTextWithoutLast = splitUpText.slice(0, splitUpText.length - 1);

    if (splitUpTextWithoutLast[0] !== "") {
      this.props.setVariable(splitUpTextWithoutLast);
      e.target.value = splitUpTextWithoutLast[0];
    } else {
      let storageKey = [splitUpTextWithoutLast[1]];

      chrome.storage.sync.get(storageKey, objMatches => {
        if (objMatches[storageKey]) {
          e.target.value = objMatches[storageKey];
        }
      });

      chrome.storage.sync.get(null, function(stuff) {
        console.log(stuff);
      });


    }
  }

  render() {
    return (
      <div></div>
    );
  }

  _isArrowPresent(text) {
    return text.includes("=>");
  }
}

export default App;
