import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from 'reactstrap';
import ItemContainer from '../containers/ItemContainer';

class Items extends Component {
  render() {
    const { items } = this.props;

    return (
      <div className="Items container">
        <h5 className="text-center">
          {items.length} {items.length === 1 ? 'item' : 'items'} left
          {!items.length && ' - You are up to date!'}
        </h5>

        <div className="row justify-content-center">
          <div className="col-lg-5">
            <ListGroup>
              {items.map(item => (
                <ItemContainer key={item.id} item={item} />
              ))}
            </ListGroup>
          </div>
        </div>
      </div>
    );
  }
}

Items.propTypes = {
  items: PropTypes.array.isRequired
};

export default Items;
