export default (state, action) => {
  switch (action.type) {
    case 'ADD_HERO_TO_LIST':
      return {
        ...state,
        favorites: [action.payload, ...state.favorites],
      };
    default:
      return state;
  }
};
