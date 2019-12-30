import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

class Signup extends Component {
  constructor(props) {
    super(props);
  }
  

  render() {
    
    console.log(this.props);
    return (
      <div className="container">
       <form  onSubmit={this.props.handleSubmit}>
           <div className="form-group">
              <label>Name	:</label>
              <input
              value={this.props.username}
              onChange={this.props.handleChange}
              type="text"
              className="form-control"
              name="username"
              placeholder="Enter name"
              required/>
            </div>
          <div className="form-group">
              <label>Email :</label>
              <input
              value={this.props.email}
              onChange={this.props.handleChange}
              type="text"
              className="form-control"
              name="email"
              placeholder="Enter email"
              required/>
          </div>
          <div className="form-group">
              <label >D.O.B	:</label>
              <div>
              <DayPickerInput 
          value={this.props.dob}
          onDayChange={(this.props.handleDayChange)}
          inputProps={
            { required: true ,
              className:"form-control"}
          } 
        />
        </div>
           </div>
           <div className="form-group">
              <button type="submit" value="Submit" className="btn btn-primary">Submit</button>
           </div>

        </form>
        </div>
    );
  }

}

Signup.contextTypes ={
  router:PropTypes.object.isRequired
}

export default withRouter(Signup);
