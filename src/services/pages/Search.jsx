import React, { Component } from 'react';
import Header from '../../components/Header';
import Load from '../../components/Load';
import AlbumPreview from '../../components/AlbumPreview';
import searchAlbumsAPI from '../searchAlbumsAPI';

export default class Search extends Component {
  state = {
    artist: '',
    buttonDisable: true,
    load: false,
    researchedArtist: '',
    albuns: [],
  };

  onInputChange = ({ target: { value } }) => {
    this.setState({ artist: value }, () => {
      this.buttonChange();
    });
  };

  buttonChange = () => {
    const { artist } = this.state;
    const minLength = 2;
    if (artist.length >= minLength) {
      this.setState({ buttonDisable: false });
    } else {
      this.setState({ buttonDisable: true });
    }
  };

  buttonSubmit = () => {
    const { artist } = this.state;
    this.setState({
      load: true,
      researchedArtist: artist,
      artist: '',
    }, async () => {
      const { researchedArtist } = this.state;
      const response = await searchAlbumsAPI(researchedArtist);
      this.setState({
        load: false,
        albuns: response,
      });
    });
  };

  render() {
    const { artist, buttonDisable, load, researchedArtist, albuns } = this.state;
    return (
      <div data-testid="page-search">
        {load
          ? <Load />
          : (
            <>
              <Header />
              <form>
                <input
                  type="text"
                  placeholder="Nome do Artista"
                  data-testid="search-artist-input"
                  value={ artist }
                  buttonDisable={ buttonDisable }
                  onChange={ this.onInputChange }
                />
                <button
                  type="submit"
                  data-testid="search-artist-button"
                  disabled={ buttonDisable }
                  onClick={ this.buttonSubmit }
                >
                  Pesquisar
                </button>
              </form>
              { (albuns.length > 0) && (
                <>
                  <p>
                    Resultado de álbuns de:
                    {' '}
                    { researchedArtist }
                  </p>
                  {
                    albuns.map((album) => (
                      <AlbumPreview { ...album } key={ album.collectionId } />
                    ))
                  }
                </>
              )}
              {(albuns.length === 0 && researchedArtist !== '') && (
                <p>
                  Nenhum álbum foi encontrado
                </p>
              )}
            </>
          )}
      </div>
    );
  }
}
