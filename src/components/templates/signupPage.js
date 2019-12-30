import React, { Component } from 'react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import Signup from './signup';
import {actionUserAPI} from '../redux/actions/actioncrud';

class SignupPage extends Component {
  constructor(props){
    super(props);

    this.state = {
    username: '',
    email: '',
    dob: '',
    toUserlist:false
   };

   this.handleChange = this.handleChange.bind(this);
   this.handleDayChange = this.handleDayChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addUSER(this.state).then(res=>{
      alert("Added Sucessfully");
      this.setState(() => ({
        toUserlist: true
      }))
    },err=>{
      console.log(err);
    })
     
  }
  handleDayChange (value) {
    this.setState({
      dob: value?new Date(value).toISOString().split('T')[0]:''
  });
  }

  render() {
    const { addUSER} = this.props;
    if (this.state.toUserlist === true) {
      return <Redirect to='/userlist' />
    }
    return (

      <div>
          <Signup{...this.props} {...this.state} 
            handleChange = {this.handleChange}
            handleDayChange = {this.handleDayChange}
            handleSubmit = {this.handleSubmit}
           />
      </div>
    );
  }

}

SignupPage.propTypes = {
  addUSER:PropTypes.func.isRequired
}
const mapStateToProps = state=>{
  console.log(state);
  return {
    user: state.allUsers.user
  }
};
export default connect(mapStateToProps, 
  dispatch => bindActionCreators(actionUserAPI, dispatch)
)(SignupPage) ;
