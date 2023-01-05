import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addSong, getFavoriteSongs } from '../../services/favoriteSongsAPI';
import Load from '../Load/Load';

export default class MusicCard extends Component {
  state = {
    load: false,
    checked: false,
    favorites: [],
  };

  componentDidMount() {
    this.setState({ load: true }, async () => {
      const favorites = await getFavoriteSongs();
      this.setState({ load: false,
        favorites }, () => {
        this.checkFavorites();
      });
    });
  }

  checkFavorites = () => {
    const { trackId } = this.props;
    const { favorites } = this.state;
    if (favorites.some((music) => music.trackId === trackId)) {
      this.setState({ checked: true });
    }
  };

  saveFavorite = async (event) => {
    if (event.target.checked) {
      this.setState({ load: true,
        checked: true });
      await addSong(this.props);
      const favorites = await getFavoriteSongs();
      this.setState({ load: false,
        favorites });
    }
  };

  render() {
    const { trackName, previewUrl, trackId } = this.props;
    const { load, checked } = this.state;
    return (
      <>
        <h1>{trackName}</h1>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          {' '}
          {' '}
          <code>audio</code>
          .
        </audio>
        {load ? <Load /> : (
          <label htmlFor="favorite">
            Favorita
            <input
              type="checkbox"
              name="favorite"
              data-testid={ `checkbox-music-${trackId}` }
              onChange={ this.saveFavorite }
              checked={ checked }
            />
          </label>
        )}
      </>
    );
  }
}

MusicCard.propTypes = {
  trackName: PropTypes.string.isRequired,
  previewUrl: PropTypes.string.isRequired,
  trackId: PropTypes.number.isRequired,
};
