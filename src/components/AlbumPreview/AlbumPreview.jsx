import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './albumPreview.css';

export default class AlbumPreview extends Component {
  render() {
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
        <div className="wrapper">
          <img src={ artworkUrl100 } alt="Capa do Album" />
          <h1>{collectionName}</h1>
          <p>{artistName}</p>
          <p>{releaseDate}</p>
        </div>
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
