import React from 'react';

import authData from '../../helpers/data/authData';

// newBoard requires:
// description
// name
// faClassName
// uid (current user)

class BoardForm extends React.Component {
  state = {
    name: '',
    description: '',
    faClassName: '',
  }

  changeNameEvent = (e) => {
    e.preventDefault();
    this.setState({ name: e.target.value });
  }

  changeDescriptionEvent = (e) => {
    e.preventDefault();
    this.setState({ description: e.target.value });
  }

  changeFaClassNameEvent = (e) => {
    e.preventDefault();
    this.setState({ faClassName: e.target.value });
  }

  saveBoardEvent = (e) => {
    e.preventDefault();
    const { name, description, faClassName } = this.state;

    const newBoard = {
      name,
      description,
      faClassName,
      uid: authData.getUid(),
    };

    console.warn('hey here is a new board!!!', newBoard);
  }

  render() {
    return (
      <form className="col-6 offset-3">
        <div className="form-group">
          <label htmlFor="boardName">Board Name</label>
          <input
            type="text"
            className="form-control"
            id="boardName"
            placeholder="Enter Board Name"
            onChange={this.changeNameEvent}
          />
        </div>
        <div className="form-group">
          <label htmlFor="boardDescription">Board Description</label>
          <input
            type="text"
            className="form-control"
            id="boardDescription"
            placeholder="A cool thing about this board"
            onChange={this.changeDescriptionEvent}
          />
        </div>
        <div className="form-group">
          <label htmlFor="boardFaClassName">Fontawesome ClassName</label>
          <input
            type="text"
            className="form-control"
            id="boardFaClassName"
            placeholder="Enter FontAwesome ClassName"
            onChange={this.changeFaClassNameEvent}
          />
        </div>
        <button className="btn btn-dark" onClick={this.saveBoardEvent}>Save Board</button>
      </form>
    );
  }
}

export default BoardForm;