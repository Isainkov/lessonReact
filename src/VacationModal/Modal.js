import React, { Component } from "react";
import ModalHeader from "./ModalHeader";
import ModalBody from "./ModalBody";

export default class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <div className={this.props.active ? "modal__overlay active" : "modal__overlay"} onClick={()=>this.props.setModalActive(false)}></div>
        <div className={this.props.active ? "modal active" : "modal"}>
          <ModalHeader />
          <ModalBody setModalActive={this.props.setModalActive}/>
        </div>
      </>
    );
  }
}
