import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Load from '../../components/Load/Load';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import { getUser } from '../userAPI';

export default class Profile extends Component {
  state = {
    load: true,
    user: {},
  };

  async componentDidMount() {
    const user = await getUser();
    this.setState({
      load: false,
      user });
  }

  render() {
    const { load, user } = this.state;
    return (
      <div data-testid="page-profile">
        <p>Profile Page</p>
        <Header />
        {load ? <Load /> : <ProfileCard { ...user } />}
      </div>
    );
  }
}
