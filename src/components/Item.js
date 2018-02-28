import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListGroupItem, Button } from 'reactstrap';

class Item extends Component {
  constructor() {
    super();
    this.state = { hovered: false };

    this.setHovered = this.setHovered.bind(this);
    this.setUnhovered = this.setUnhovered.bind(this);
  }

  setHovered() {
    this.setState({ hovered: true });
  }

  setUnhovered() {
    this.setState({ hovered: false });
  }

  render() {
    const { item, markCompleted, deleteItem } = this.props;

    return (
      <ListGroupItem
        onMouseOver={this.setHovered}
        onMouseLeave={this.setUnhovered}
        color={item.completed ? "success" : ""}
      >
        <div className="row justify-content-between">
          <div className="col-10">
            {item.text}
          </div>
          <div className="col-2 ">
            <div className="item-buttons row justify-content-end">
              {!item.completed && <Button color="success" size="xs" onClick={markCompleted}>&#10003;</Button>}
              {this.state.hovered && <Button color="danger" size="xs" onClick={deleteItem}>X</Button>}
            </div>
          </div>
        </div>
      </ListGroupItem>
    );
  }
}

Item.propTypes = {
  item: PropTypes.object.isRequired,
  markCompleted: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired
};

export default Item;
