import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk";
import albumsReducer from "../reducers/Albums";
import artistsReducer from "../reducers/Artistas";
import playlistReducer from "../reducers/Playlists";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    albums: albumsReducer,
    artists: artistsReducer,
    playlist: playlistReducer,
  }),
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
