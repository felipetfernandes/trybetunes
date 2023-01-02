import React, { Component } from 'react';
import Header from '../../components/Header';

export default class Profile extends Component {
  render() {
    return (
      <div data-testid="page-profile">
        <p>Profile Page</p>
        <Header />
      </div>
    );
  }
}
