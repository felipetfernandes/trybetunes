import React, { Component } from 'react';
import { getUser } from '../services/userAPI';
import Load from './Load';

export default class Header extends Component {
  state = {
    load: true,
    name: '',
  };

  async componentDidMount() {
    this.teste();
  }

  teste = async () => {
    const { name } = await getUser();
    this.setState({
      load: false,
      name,
    });
  };

  render() {
    const { load, name } = this.state;
    return (
      <header data-testid="header-component">
        {load
          ? <Load />
          : (
            <p data-testid="header-user-name">
              Olá
              {' '}
              {name}
            </p>
          )}
      </header>
    );
  }
}
