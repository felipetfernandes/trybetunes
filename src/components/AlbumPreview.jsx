import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class AlbumPreview extends Component {
  render() {
    console.log(this.props);
    const { artistName,
      artworkUrl100,
      collectionName,
      collectionId,
      releaseDate } = this.props;
    return (
      <Link
        to={ `/album/${collectionId}` }
        data-testid={ `link-to-album-${collectionId}` }
      >
        <img src={ artworkUrl100 } alt="Capa do Album" />
        <h1>{collectionName}</h1>
        <p>{artistName}</p>
        <p>{releaseDate}</p>
      </Link>
    );
  }
}

AlbumPreview.propTypes = {
  artistName: PropTypes.string.isRequired,
  artworkUrl100: PropTypes.string.isRequired,
  collectionId: PropTypes.string.isRequired,
  collectionName: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
};
