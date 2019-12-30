import React,{ Component,useState,useEffect } from 'react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import Signup from './signup';
import {actionUserAPI} from '../redux/actions/actioncrud';

class EditPage extends Component {
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
componentDidMount(){
  const {user, match} = this.props;
  console.log(match.params.userId);
 this.props.editUSER(match.params.userId);
  
}

componentWillReceiveProps(nextProps) {
  console.log(nextProps.user)
  if (nextProps.user) {
    this.setState({
      username: nextProps.user.username,
      email: nextProps.user.email,
      dob: new Date(nextProps.user.dob).toISOString().split('T')[0]
    });
  }
 }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value});
  }

  handleDayChange (value) {
    this.setState({
    
      dob: value?new Date(value).toISOString().split('T')[0]:''
  });
  }

  handleSubmit(event) {
    event.preventDefault();
    const userData = {
      username: this.state.username,
      email: this.state.email,
      dob: this.state.dob
    }
    this.props.updateUSER(this.props.match.params.userId, userData).then(res=>{
      alert("Updated Sucessfully");
      this.setState(() => ({
        toUserlist: true
      }))
    },err=>{
      console.log(err);
    });
    
  }

  render() {
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


const mapStateToProps = state=>{
  console.log(state);
  return {
    user: state.allUsers.user
  }
};



export default connect(mapStateToProps, 
  dispatch => bindActionCreators(actionUserAPI, dispatch)
)(EditPage) ;
