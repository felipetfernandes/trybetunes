import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addSong } from '../../services/favoriteSongsAPI';
import Load from '../Load/Load';

export default class MusicCard extends Component {
  state = {
    load: false,
    checked: false,
  };

  saveFavorite = (event) => {
    this.setState({ checked: true }, async () => {
      if (event.target.checked) {
        this.setState({ load: true });
        await addSong(this.props);
        this.setState({ load: false });
      }
    });
  };

  render() {
    const { trackName, previewUrl, trackId } = this.props;
    const { load, checked } = this.state;
    return (
      load
        ? <Load />
        : (
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
          </>
        )
    );
  }
}

MusicCard.propTypes = {
  trackName: PropTypes.string.isRequired,
  previewUrl: PropTypes.string.isRequired,
  trackId: PropTypes.number.isRequired,
};
