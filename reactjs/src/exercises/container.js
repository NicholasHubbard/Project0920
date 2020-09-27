import { connect } from 'react-redux';
import { fetchExercises } from '../store/exercises/actions';

function mapStateToProps(state) {
  console.log('Current STATE >>>> ', { state });
  const {
    exercises: { byId, allIds }
  } = state;
  return { exercises: allIds.map(id => byId[id].data) };
}

// set the actions we need in this component
const mapDispatchToProps = { fetchExercises };

export default connect(mapStateToProps, mapDispatchToProps);
