import { connect } from 'react-redux';
import App from './app';
import { setVariable, getVariable } from '../../actions/variable_actions';

const mapStateToProps = state => ({
  count: state.count
});

const mapDispatchToProps = dispatch => ({
  setVariable: variableInfo => dispatch(setVariable(variableInfo)),
  getVariable: variableInfo => dispatch(getVariable(variableInfo))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
