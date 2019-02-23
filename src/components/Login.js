import React, { Component } from 'react'
import Success from './Success'
import LoginForm from './LoginForm'

export default class Login extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      username: '',
      password: '',
      showAlert: false,
      alertMessage: '',
      success: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChangePassword = this.handleChangePassword.bind(this)
    this.handleChangeUsername = this.handleChangeUsername.bind(this)
  }

  handleChangeUsername (e) {
    this.setState({username: e.target.value})
  }

  handleChangePassword (e) {
    this.setState({password: e.target.value})
  }

  clearAlert () {
    this.setState({showAlert: false, alertMessage: ''})
  }

  resetForm () {
    this.clearAlert()
    this.setState({username: '', password: '', success: false})
  }

  handleSubmit (e) {
    e.preventDefault()
    if (!this.state.password) {
      this.setState({showAlert: true, alertMessage: 'Please enter password'})
    } else if (!this.state.username) {
      this.setState({showAlert: true, alertMessage: 'Please enter username'})
    } else {
      this.clearAlert()
      this.setState({success: true})
    }
  }
  
  render() {
    return (
      <section className="content">
        <div style={{height: '40px'}}></div>
        <div className="columns is-centered">
          <div className="column is-half">
            {this.state.success ? <Success reset={() => this.resetForm()} /> : 
            <LoginForm handleSubmit={this.handleSubmit} usernameVal={this.state.username} passwordVal={this.state.password} showAlert={this.state.showAlert} alertMessage={this.state.alertMessage} handleChangeUsername={this.handleChangeUsername} handleChangePassword={this.handleChangePassword}/>}
        </div>
      </div>
    </section>
    )
  }
}

