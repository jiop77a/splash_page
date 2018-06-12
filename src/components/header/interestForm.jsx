import React, { Component } from 'react';

class InterestForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      school: "",
      email: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {

  }

  update(property) {
   return e => this.setState({ [property]: e.target.value });
  }

  render() {
    return (
      <form className="interest-form">
        <label>Interested Student?</label>
        <div className="name-and-school">
          <input
            placeholder="Name"
            value={this.state.name}
            onChange={this.update('name')}
          />
          <input
            placeholder="School"
            value={this.state.school}
            onChange={this.update('school')}
          />
        </div>
        <div className="email">
          <input
            placeholder="Email Address"
            value={this.state.email}
            onChange={this.update('email')}
          />
        </div>
        <button
          className="interest-button">Interested Student
        </button>
        <span
          onClick={()=> console.log('link to some other form')}>
          Interested Company?
        </span>
      </form>
    );
  }
}

export default InterestForm;
