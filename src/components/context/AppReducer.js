export default (state, action) => {
  switch (action.type) {
    case 'ADD_HERO_TO_LIST':
      return {
        ...state,
        favorites: [action.payload, ...state.favorites],
      };
    // case 'DELETE_HERO_FROM_LIST':
    //   return state.filter((favorites) => action.payload.id !== favorites.id);
    default:
      return state;
  }
};
