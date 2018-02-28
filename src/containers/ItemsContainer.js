import { connect } from 'react-redux';
import Items from '../components/Items';

const mapStateToProps = (state) => {
  return {
    items: state.items,
    unfinished: state.items.filter(item => !item.completed)
  };
};

export default connect(mapStateToProps)(Items);
