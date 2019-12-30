import React, { Component } from 'react';
export default class ViewInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: []
         };
        
      }
    render() {
       
        let styles = this.props.show
        ? { display: "block" }
        : { display: "none" };
      
        return (
            <div className="modal" role="dialog"  style={styles}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">User Deatil</h5>
                            <button type="button" className="close" data-dismiss="modal" onClick={this.props.closeModal} aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {this.props.user?<div>
                                <h2>Name :</h2>
                            <p>{this.props.user.username}</p>
                            <h2>D.O.B :</h2>
                            <p>{new Date(this.props.user.dob).toLocaleDateString()}</p>
                            <h2>Email ID :</h2>
                            <p>{this.props.user.email}</p>
                            </div>
                            : <div></div>}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.props.closeModal}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}