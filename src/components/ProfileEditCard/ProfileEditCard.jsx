import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProfileEditCard extends Component {
  render() {
    const { saveChanges,
      onInputChange,
      disabled,
      name,
      email,
      description,
      image,
    } = this.props;
    return (
      <form className="wrapper-profileEditCard">
        <div>
          <img src={ image } alt="Userimage" data-testid="profile-image" />
          <input
            name="image"
            type="text"
            value={ image }
            onChange={ onInputChange }
            data-testid="edit-input-image"
          />
        </div>
        <h2>Nome</h2>
        <input
          name="name"
          type="text"
          value={ name }
          onChange={ onInputChange }
          data-testid="edit-input-name"
        />
        <h2>email</h2>
        <input
          name="email"
          type="text"
          value={ email }
          onChange={ onInputChange }
          data-testid="edit-input-email"
        />
        <h2>Descrição</h2>
        <input
          name="description"
          type="text"
          value={ description }
          onChange={ onInputChange }
          data-testid="edit-input-description"
        />
        <button
          type="submit"
          disabled={ disabled }
          data-testid="edit-button-save"
          onClick={ saveChanges }
        >
          Salvar
        </button>
      </form>
    );
  }
}

ProfileEditCard.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  saveChanges: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
};
