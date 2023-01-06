import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header';
import Load from '../../components/Load/Load';
import ProfileEditCard from '../../components/ProfileEditCard/ProfileEditCard';
import { getUser, updateUser } from '../userAPI';

export default class ProfileEdit extends Component {
  state = {
    load: true,
    user: {},
    name: '',
    email: '',
    description: '',
    image: '',
    disabled: true,
  };

  async componentDidMount() {
    const user = await getUser();
    this.setState({
      load: false,
      user,
      name: user.name,
      email: user.email,
      description: user.description,
      image: user.image }, () => {
      this.buttonCheck();
    });
  }

  onInputChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value }, () => {
      this.buttonCheck();
    });
  };

  buttonCheck = () => {
    const { name, email, description, image } = this.state;
    switch (true) {
    case name === '':
    case (!(/([a-z])\w+@[a-z]\w+.com/g).test(email)):
    case description === '':
    case image === '':
      this.setState({ disabled: true });
      break;
    default:
      this.setState({ disabled: false });
      break;
    }
  };

  saveChanges = () => {
    const { history } = this.props;
    const { name, email, description, image } = this.state;
    this.setState({ load: true }, async () => {
      await updateUser({ name, email, description, image });
      return history.push('/profile');
    });
  };

  render() {
    const { load, disabled } = this.state;
    return (
      <div data-testid="page-profile-edit">
        <p>Profile Edit Page</p>
        <Header />
        {load ? <Load />
          : (
            <ProfileEditCard
              { ...this.state }
              saveChanges={ this.saveChanges }
              onInputChange={ this.onInputChange }
              disabled={ disabled }
            />
          )}
      </div>
    );
  }
}

ProfileEdit.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
