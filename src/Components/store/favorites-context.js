import { createContext, useState } from 'react';

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => {}, // we put empty functions just so this helps the IDE to
  removeFavorite: (meetupID) => {}, // recognize this object properties as functions and then
  itemIsFavorite: (meetupID) => {}, // tells us this info whenever this context object is used.
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  // inside this function we could have simply wrote "setUserFavorites(userFavorites.concat(favoriteMeetup))"
  // but since this will not always display the latest info since React is not managing everything
  // instantly, we should wait by using a function and loading the previous "userFavorites" state
  // so the favorites are displayed in the correct order.
  function addFavoriteHandler(favoriteMeetup) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteMeetup);
    });
  }

  function removeFavoriteHandler(meetupID) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((meetup) => meetup.id !== meetupID);
    });
  }

  function itemIsFavoriteHandler(meetupID) {
    return userFavorites.some((meetup) => meetup.id === meetupID);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
