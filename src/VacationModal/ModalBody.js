import React, { Component } from "react";
import { users } from "../API/api";

const BuildTeam = () => {
  return users.teams.map((team) => (
    <option value={team.name}>{team.name}</option>
  ));
};

const BuildUser = () => {
  return (
    <select className="modal__menu">
      <option value="UserName1">1 user</option>
    </select>
  );
};

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
            <input type="date" className="modal__date"></input>
          </div>
          <div className="modal__column">
            <div className="modal__subtitle">To</div>
            <input type="date" className="modal__date"></input>
          </div>
        </div>
        <div className="modal__title">Team</div>
        <select className="modal__menu">
          <BuildTeam />
        </select>
        <div className="modal__title">User</div>
        <BuildUser />
        <div className="modal__title">Vac Type</div>
        <select className="modal__menu">
          <option value="Paid">Paid Day Off (PD)</option>
          <option value="Non-paid">Non-paid Day Off (NPD)</option>
        </select>
        <div className="modal__footer">
          <div
            className="modal__btn modal__btn-cancel"
            onClick={() => {
              this.props.setModalActive(false);
            }}
          >
            Cancel
          </div>
          <div className="modal__btn modal__btn-send modal__btn-green">
            Send
          </div>
        </div>
      </div>
    );
  }
}
