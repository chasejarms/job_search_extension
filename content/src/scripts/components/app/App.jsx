import React, {Component} from 'react';
// import { Store } from 'react-chrome-redux';


class App extends Component {
  constructor(props) {
    super(props);
    this.addInputEventListeners = this.addInputEventListeners.bind(this);
    this.sendCorrectAction = this.sendCorrectAction.bind(this);
    this._isArrowPresent = this._isArrowPresent.bind(this);
  }

  componentDidMount() {
    this.addInputEventListeners();
  }

  componentDidUpdate() {
    console.log(this.props);
  }

  addInputEventListeners() {
    let documentInputs = document.querySelectorAll('input');

    documentInputs.forEach(input => {

      switch(input.type) {
        case "text":
        case "email":
        case "number":
        case "search":
        case "tel":
        case "time":
          input.addEventListener('keydown', e => {
            let key = e.which || e.keyCode;
            let phrase = e.target.value;

            if (key === 9 && this._isArrowPresent(phrase)) {
              this.sendCorrectAction(e.target.value);
            }
          });
          break;
        default:
          break;
      }

    });

  }

  sendCorrectAction(text) {
    let splitUpText = text.split(/=>(.+)/);
    let splitUpTextWithoutLast = splitUpText.slice(0, splitUpText.length - 1);

    if (splitUpTextWithoutLast[0] !== "") {
      this.props.setVariable(splitUpTextWithoutLast);
    } else {
      this.props.getVariable(splitUpTextWithoutLast);
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
