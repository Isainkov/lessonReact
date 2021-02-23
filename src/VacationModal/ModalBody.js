import React, { Component } from "react";

export default class ModalBody extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="modal__body">
        <div className="modal__title">Dates</div>
        <div className="modal_dates_inner">
          <div className="modal__column">
            <div className="modal__subtitle">From</div>
            <div className="modal__date">15.06.2020</div>
          </div>
          <div className="modal__column">
            <div className="modal__subtitle">To</div>
            <div className="modal__date">18.06.2020</div>
          </div>
        </div>
        <div className="modal__title">Vac Type</div>
        <div className="modal__menu"></div>
        <div className="modal__footer">
        <div className="modal__btn modal__btn-cancel" onClick={()=> {this.props.setModalActive(false)}}>Cancel</div>
        <div className="modal__btn modal__btn-send modal__btn-green">Send</div>
        </div>
      </div>
    );
  }
}