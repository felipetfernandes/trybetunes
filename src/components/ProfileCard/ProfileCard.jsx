import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class ProfileCard extends Component {
  render() {
    const { name, email, description, image } = this.props;
    return (
      <div className="wrapper-profileCard">
        <div>
          <img src={ image } alt="UserImage" data-testid="profile-image" />
          <Link to="/profile/edit">Editar perfil</Link>
        </div>
        <h2>Nome</h2>
        <p>{name}</p>
        <h2>Email</h2>
        <p>{email}</p>
        <h2>Descrição</h2>
        <p>{description}</p>
      </div>
    );
  }
}

ProfileCard.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
