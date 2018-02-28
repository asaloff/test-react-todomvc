import { connect } from 'react-redux';
import Item from '../components/Item';
import { markCompleted, deleteItem } from '../utils/actions';

const mapDispatchToProps = (dispatch, ownProps) => {
  const id = ownProps.item.id;

  return {
    markCompleted: () => dispatch(markCompleted(id)),
    deleteItem: () => dispatch(deleteItem(id))
  };
};

export default connect(null, mapDispatchToProps)(Item);
