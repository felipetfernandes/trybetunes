import React, { Component } from 'react';
import Header from '../../components/Header';

export default class Favorites extends Component {
  render() {
    return (
      <div data-testid="page-favorites">
        <p>Favorites Page</p>
        <Header />
      </div>
    );
  }
}
