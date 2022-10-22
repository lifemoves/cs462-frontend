import React, { Component } from 'react'
import logo from '../assets/images/logos/cs302Logo.svg';

export default class Login extends Component {
  render() {
    return (
      <form>
        <img style={{ width: 200 }} src={logo} className="center"/>
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
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button style={{ width: 250 }} type="submit" className="btn btn-primary center">
            Login
          </button>
        </div>
        <p className="login-links">
            <a href="#">Forgot password?</a><br/>
            <a href="/register">Don't have an account?</a><br/>
        </p>
      </form>
    )
  }
}