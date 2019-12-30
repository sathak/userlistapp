import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Userdetails from './Userdetails';

const UserGrid = (props) => {
  const emptyUserlist = (<p> Still there are no users information </p>);
console.log(props);
const { users } = props;
  const userinfo = (
    <div className="gridOverflow">
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>D.O.B</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
           {users.map( 
             user => user?<Userdetails user={user} key={user.userId}/>:<tr key={Math.random()}></tr>
           )}
        </tbody>
      </table>
    </div>
  );
    return (
      <div>
      {users.length=== 0 ? emptyUserlist:userinfo}
      </div>
    );

}

UserGrid.propTypes={
    users:PropTypes.array.isRequired
}
export default UserGrid;
