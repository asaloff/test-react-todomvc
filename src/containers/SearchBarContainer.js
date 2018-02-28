import { connect } from 'react-redux';
import SearchBar from '../components/SearchBar';
import { createTodo } from '../utils/actions';
import serialize from 'form-serialize';

const mapDispatchToProps = (dispatch) => {
  return {
    createTodo: (e) => {
      e.preventDefault();
      const form = serialize(e.target, { hash: true });

      const text = form.new;
      if (text && text.trim()) dispatch(createTodo(text));

      e.target.reset();
    }
  };
};

export default connect(null, mapDispatchToProps)(SearchBar);
