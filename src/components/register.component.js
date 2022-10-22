import React, { Component } from 'react'
import logo from '../assets/images/logos/cs302Logo.svg';

export default class Register extends Component {
  render() {
    return (
      <form>
        <img style={{ width: 200 }} src={logo} className="center"/>
        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
          />
        </div>
        <div className="mb-3">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Last name" />
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div><br/>
        <div className="d-grid">
          <button style={{ width: 250 }} type="submit" className="btn btn-primary center">
            Register
          </button>
        </div>
        <p className="login-links">
            <a href="/login">Already registered?</a><br/>
        </p>
      </form>
    )
  }
}