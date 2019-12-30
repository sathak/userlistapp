import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux';
import {fetchUSER,actionUserAPI} from '../redux/actions/actioncrud';
import UserGrid from './usergrid';
import ViewInfo from './viewInfo';

class Userlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
     };
     this.showModal = this.showModal.bind(this);
     this.closeModal = this.closeModal.bind(this);
  }
  
  componentDidMount(){
    this.props.fetchUSER()
  }
  
  showModal() {
   
    var _users=this.props.users;
    var filtered = _users.filter(a=>a.active==undefined||a.active==0);
    if(filtered.length>0){
      var obj_keys = Object.keys(filtered);
      var ran_key = obj_keys[Math.floor(Math.random() *obj_keys.length)];
      filtered[ran_key].active=1;
      this.setState({
        show: filtered.length>0?true:false,
          user: filtered[ran_key]
        });
    }
   else{
    this.setState({
      show: false,
        user: []
      });
   }
   
   
  };
  closeModal(){
    this.setState({
      show: false
    });
  }
  render() {
    //const {props} = this.props;
    return (
      <div>
      {this.props.users?
      <div className="container-fluid">
       <h2>Userlist</h2>
       {this.props.users.length>0?<p> <button type="button" className="btn btn-sm btn-info" onClick={this.showModal}>View User</button><br/></p>:<br></br>}
      
       <UserGrid users={this.props.users} />
       <ViewInfo show={this.state.show} closeModal={this.closeModal} user={this.state.user} />
      </div>
      :<div></div>
    }
    </div>
    );
  }

}


const mapStateToProps = state=>{
  console.log(state);
  return {
    users: state.allUsers.users
  }
};

export default connect(mapStateToProps,
  dispatch => bindActionCreators(actionUserAPI, dispatch)
)(Userlist);
