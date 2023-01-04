import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header';
import MusicCard from '../../components/MusicCard/MusicCard';
import getMusics from '../musicsAPI';

export default class Album extends Component {
  state = {
    artistName: '',
    collectionName: '',
    musics: [],
  };

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const data = await getMusics(id);
    this.setState({
      artistName: data[0].artistName,
      collectionName: data[0].collectionName,
      musics: data.slice(1),
    });
  }

  render() {
    const { musics, artistName, collectionName } = this.state;
    return (
      <div data-testid="page-album">
        <h1>Album Page</h1>
        <Header />
        <p data-testid="artist-name">{artistName}</p>
        <h2 data-testid="album-name">{collectionName}</h2>
        {musics.map((music) => (
          <MusicCard { ...music } key={ music.trackId } />
        ))}
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape.isRequired,
};
