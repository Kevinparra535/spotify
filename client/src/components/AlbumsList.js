import React from "react";

import _ from "lodash";

import music from "../images/icons/player__default.png";

const AlbumsList = ({ albums }) => {
  return (
    <React.Fragment>
      {Object.keys(albums).length > 0 && (
        <div className="albums">
          {albums.items.map((album, index) => {
            return (
              <React.Fragment key={index}>
                <div className="cards">
                  <a
                    target="_blank"
                    href={album.external_urls.spotify}
                    rel="noopener noreferrer"
                    className="div-image-link"
                  >
                    {!_.isEmpty(album.images) ? (
                      <img src={album.images[0].url} alt="cover" />
                    ) : (
                      <img
                        className="cover__alternative"
                        src={music}
                        alt="cover"
                      />
                    )}
                  </a>
                  <div>
                    <div>{album.name}</div>
                    <div>
                      <small>
                        {album.artists.map((artist) => artist.name).join(", ")}
                      </small>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      )}
    </React.Fragment>
  );
};

export default AlbumsList;
