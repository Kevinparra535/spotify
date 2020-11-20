import React from "react";
import { Redirect } from "react-router-dom";

import _ from "lodash";

import AlbumsList from "./AlbumsList";
import ArtistsList from "./ArtistsList";
import PlayList from "./PlayList";

const SearchResult = (props) => {
  const {
    isValidSession,
    loadMore,
    result,
    setCategory,
    selectedCategory,
  } = props;
  const { albums, artists, playlist } = result;

  if (!isValidSession()) {
    return (
      <Redirect
        to={{
          pathname: "/",
          state: {
            session_expired: true,
          },
        }}
      />
    );
  }

  return (
    <React.Fragment>
      <div className="search__buttons">
        {!_.isEmpty(albums.items) && (
          <button
            className={`${
              selectedCategory === "albums" ? "btn active" : "btn"
            }`}
            onClick={() => setCategory("albums")}
          >
            Álbumes
          </button>
        )}
        {!_.isEmpty(artists.items) && (
          <button
            className={`${
              selectedCategory === "artists" ? "btn active" : "btn"
            }`}
            onClick={() => setCategory("artists")}
          >
            Artistas
          </button>
        )}
        {!_.isEmpty(playlist.items) && (
          <button
            className={`${
              selectedCategory === "playlist" ? "btn active" : "btn"
            }`}
            onClick={() => setCategory("playlist")}
          >
            Listas
          </button>
        )}
      </div>
      <div className={`${selectedCategory === "albums" ? "" : "hide"}`}>
        {albums && <AlbumsList albums={albums} />}
      </div>
      <div className={`${selectedCategory === "artists" ? "" : "hide"}`}>
        {artists && <ArtistsList artists={artists} />}
      </div>
      <div className={`${selectedCategory === "playlist" ? "" : "hide"}`}>
        {playlist && <PlayList playlist={playlist} />}
      </div>
      {!_.isEmpty(result[selectedCategory]) &&
        !_.isEmpty(result[selectedCategory].next) && (
          <div className="load-more" onClick={() => loadMore(selectedCategory)}>
            <button variant="info" type="button">
              Cargar más
            </button>
          </div>
        )}
    </React.Fragment>
  );
};

export default SearchResult;
