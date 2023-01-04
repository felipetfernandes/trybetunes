import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createUser } from '../userAPI';
import Load from '../../components/Load/Load';

export default class Login extends Component {
  state = {
    userName: '',
    buttonDisable: true,
    load: false,
  };

  onInputChange = ({ target: { value } }) => {
    this.setState({ userName: value }, () => {
      this.buttonChange();
    });
  };

  buttonChange = () => {
    const { userName } = this.state;
    const minLength = 3;
    if (userName.length >= minLength) {
      this.setState({ buttonDisable: false });
    } else {
      this.setState({ buttonDisable: true });
    }
  };

  buttonSubmit = () => {
    const { userName } = this.state;
    const { history } = this.props;
    this.setState({ load: true }, async () => {
      await createUser({ name: userName });
      return history.push('/search');
    });
  };

  render() {
    const { userName, buttonDisable, load } = this.state;
    return (
      (load) ? <Load />
        : (
          <form data-testid="page-login">
            <input
              type="text"
              data-testid="login-name-input"
              placeholder="User Name"
              value={ userName }
              onChange={ this.onInputChange }
            />
            <button
              type="submit"
              data-testid="login-submit-button"
              disabled={ buttonDisable }
              onClick={ this.buttonSubmit }
            >
              Entrar
            </button>
          </form>
        )
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
