import React, { Component } from 'react';
import Header from '../../components/Header/Header';

export default class ProfileEdit extends Component {
  render() {
    return (
      <div data-testid="page-profile-edit">
        <p>Profile Edit Page</p>
        <Header />
      </div>
    );
  }
}
