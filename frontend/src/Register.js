import React from 'react';

import request from './request';


class Register extends React.Component {

  constructor(props) {
    super(props);


    this.usernameInput = null;
    this.passwordInput = null;

    this.onSubmit = this.onSubmit.bind(this);

  }

  async onSubmit() {

    if (this.usernameInput.value.length === 0) {
      console.log('invalid username')
      return;
    }

    if (this.passwordInput.value.length === 0) {
      console.log('invalid password')
      return;
    }
    
    let response = await request({
      method: 'POST',
      form: true,
      body: {
        _utf8: '✓',
        'user[name]': 'name+here',
        'user[password]': this.passwordInput.value,
        'user[email]': this.usernameInput.value,
        'user[username]': this.usernameInput.value
      },
      url: '/users'
    })

    if (response.includes('User created successfully.')) {
      console.log('User made')
    }
    else {
      console.error('Error creating user')
    }

  }

  render() {
    return (

          <div>

          <div className="form-group">
              <label className="control-label" for="user_email">Username</label>
              <input ref={(element) => {this.usernameInput = element}} className="form-control" id="user_email" name="user[email]" type="text" />
          </div>

          <div className="form-group">
              <label className="control-label" for="user_username">Password</label>
              <input  ref={(element) => {this.passwordInput = element}} className="form-control" id="user_username" name="user[username]" type="text" />
          </div>

          <div className="form-group">
              <button onClick ={this.onSubmit} className="btn btn-primary" type="submit">
                Submit
              </button>
          </div>
        </div>
    );
  }

}

export default Register;