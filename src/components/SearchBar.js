import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';

class SearchBar extends Component {
  render() {
    const { createTodo } = this.props;

    return (
      <div className="SearchBar container">
        <div className="row justify-content-center">
          <div className="col-lg-5">
            <form onSubmit={createTodo}>
              <InputGroup>
                <Input placeholder="New Item" name="new" autoFocus/>
                <InputGroupAddon addonType="append">
                  <Button color="primary">+</Button>
                </InputGroupAddon>
              </InputGroup>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

SearchBar.propTypes = {
  createTodo: PropTypes.func.isRequired
};


export default SearchBar;
