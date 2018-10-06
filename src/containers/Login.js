import React, { Component } from "react";
import Toggle from 'react-toggle';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { logKeystrokeEvents } from '../keylog.js';
import "../styles/Login.css";
import "react-toggle/style.css";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "dawud@twosense.ai",
      password: "",
      passwordIsCorrect: true,
      runningDistance: 0
    };

    logKeystrokeEvents(true);
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    let result = logKeystrokeEvents(false);
    let correct = this.state.password === 'TheP@sswordIsYou1'

    if (!correct) {
      logKeystrokeEvents(true);
    } else {
      if (result != null) {
        if (result.toFixed(2) > 1600) {
          window.location.href = "/failure"
        } else {
          window.location.href = "/success"
        }
      }
    }
    this.setState({
      passwordIsCorrect: correct
    });
  }

  render() {
    const email = 'dawud@twosense.ai'
    return (
      <div className="Login" style={{display: 'flex'}}>
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup id="password-field" controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          {!this.state.passwordIsCorrect ? <h4 style={{color: 'red'}}>Incorrect Password!</h4> : null }
          {!this.state.passwordIsCorrect ? <h5 style={{color: 'red'}}>Come on, people are watching.</h5> : null }
          {!this.state.passwordIsCorrect ? <h5 style={{color: 'red', marginBottom:'20px'}}>Don't screw this up!</h5> : null }
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit">
            Login
          </Button>
        </form>
        <div style={{marginTop:'20px', marginRight: '60px', marginLeft: '0px', paddingLeft: '0px'}} id='myPasswordGraphic'>
          <img style={{width: '200px', height:'200px'}} src="sticky.png"/>
        </div>
      </div>
    );
  }
}