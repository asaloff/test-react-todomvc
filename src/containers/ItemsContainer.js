import { connect } from 'react-redux';
import Items from '../components/Items';

const mapStateToProps = (state) => {
  return { items: state.items };
};

export default connect(mapStateToProps)(Items);
