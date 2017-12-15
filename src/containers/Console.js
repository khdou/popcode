import {connect} from 'react-redux';
import Console from '../components/Console';
import {
  getCompiledProjects,
  getConsoleHistory,
  getCurrentProjectKey,
  getHiddenUIComponents,
  isExperimental,
} from '../selectors';
import {evaluateConsoleEntry, toggleComponent} from '../actions';

function mapStateToProps(state) {
  return {
    compiledProjects: getCompiledProjects(state),
    currentProjectKey: getCurrentProjectKey(state),
    history: getConsoleHistory(state),
    isEnabled: isExperimental(state),
    isOpen: !getHiddenUIComponents(state).includes('console'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onInput(input) {
      dispatch(evaluateConsoleEntry(input));
    },

    onToggleVisible(projectKey) {
      dispatch(toggleComponent(projectKey, 'console'));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Console);
