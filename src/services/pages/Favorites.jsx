import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Load from '../../components/Load/Load';
import MusicCard from '../../components/MusicCard/MusicCard';
import { getFavoriteSongs } from '../favoriteSongsAPI';

export default class Favorites extends Component {
  state = {
    load: false,
    favorites: [],
  };

  componentDidMount() {
    this.setState({ load: true }, async () => {
      const favorites = await getFavoriteSongs();
      this.setState({ load: false,
        favorites });
    });
  }

  async componentDidUpdate() {
    const favorites = await getFavoriteSongs();
    this.setState({ favorites });
  }

  render() {
    const { load, favorites } = this.state;
    return (
      <div data-testid="page-favorites">
        <p>Favorites Page</p>
        <Header />
        {load && <Load />}
        {favorites.map((music) => (
          <MusicCard { ...music } key={ music.trackId } />
        ))}
      </div>
    );
  }
}
