import React, { Component } from "react";

export default class ModalHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="modal__header">
        <div className="modal__name">Vacation Request</div>
        <div className="modal__days">8 Days</div>
      </div>
    );
  }
}