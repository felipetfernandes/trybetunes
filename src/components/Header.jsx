import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
            <div>
              <p data-testid="header-user-name">
                Olá
                {' '}
                {name}
              </p>
              <nav>
                <Link to="/search" data-testid="link-to-search">Search</Link>
                <Link to="/favorites" data-testid="link-to-favorites">Favorites</Link>
                <Link to="/profile" data-testid="link-to-profile">Profile</Link>
              </nav>
            </div>
          )}
      </header>
    );
  }
}
